require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var fs = require('fs')
var chokidar = require('chokidar')
var LRU = require('lru-cache')
var express = require('express')
var webpack = require('webpack')
var MFS = require('memory-fs')
var proxyMiddleware = require('http-proxy-middleware')
var serverWebpackConfig = require('./webpack.server.conf')
var clientWebpackConfig = require('./webpack.dev.conf')
var createBundleRenderer = require('vue-server-renderer').createBundleRenderer

var resolve = file => path.resolve(__dirname, file)
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable
var app = express()

var bundle
var clientManifest
var templatePath = resolve('../src/index.template.html')
var template = fs.readFileSync(templatePath, 'utf-8')
var renderer
var _resolve
var readFile = (fs, file) => {
  try {
    return fs.readFileSync(path.join(clientWebpackConfig.output.path, file), 'utf-8')
  } catch (e) {}
}
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})
var update = () => {
  if (bundle && clientManifest) {
    if (_resolve) {
      _resolve()
      _resolve = null
    }
    renderer = createBundleRenderer(bundle, {
      template,
      clientManifest,
      // for component caching
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      // this is only needed when vue-server-renderer is npm-linked
      basedir: resolve('../'),
      // recommended for performance
      runInNewContext: false
    })
  }
}

// read template from disk and watch
template = fs.readFileSync(templatePath, 'utf-8')
chokidar.watch(templatePath).on('change', () => {
  template = fs.readFileSync(templatePath, 'utf-8')
  console.log('index.html template updated.')
  hotMiddleware.publish({ action: 'reload' })
})

// dev middleware
var clientCompiler = webpack(clientWebpackConfig)
var devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
  publicPath: clientWebpackConfig.output.publicPath,
  noInfo: true
})
app.use(devMiddleware)
clientCompiler.plugin('done', stats => {
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(err => console.warn(err))
  if (stats.errors.length) return
  clientManifest = JSON.parse(readFile(
    devMiddleware.fileSystem,
    'vue-ssr-client-manifest.json'
  ))
  update()
})

// hot middleware
var hotMiddleware = require('webpack-hot-middleware')(clientCompiler, { heartbeat: 5000 })
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// watch and update server renderer
var serverCompiler = webpack(serverWebpackConfig)
var mfs = new MFS()
serverCompiler.outputFileSystem = mfs
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  if (stats.errors.length) return
  // read bundle generated by vue-ssr-webpack-plugin
  bundle = JSON.parse(readFile(mfs, 'vue-ssr-server-bundle.json'))
  update()
})
app.get('/bridge',require('../imgBridge'))
app.use('/api',require('../server/router'))
app.get('*', render)
var uri = 'http://localhost:' + port

console.log('> Starting dev server...')

function render (req, res) {
  const context = {
    title: 'vue', // default title
    url: req.url
  }

  res.setHeader('Content-Type', 'text/html')

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if (err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.send(html)
  })
}

function openBrowser () {
  console.log('> Listening at ' + uri + '\n')
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
}

var server = app.listen(port)

module.exports = {
  ready: readyPromise.then(() => {
    openBrowser()
  }),
  close: () => {
    server.close()
  }
}