<template>
  <div class="nav-fixed-pd ">
      <div class="header">
        <div class="container">
            <div class="header-logo">
              首页 
            </div>
        </div>
      </div>
      <div class="container">
          <div class="main-column column">
            <div class="main-content column-l">
                <div class="section">
                    <div class="section-title">
                      最新推荐
                    </div>
                    <div class="column">
                        <div class="column-l new-swiper">
                            <ui-swiper text="swiper"></ui-swiper>
                        </div>
                        <div class="column-r new-article">
                          <ul>
                          <li v-for="item in article.recosArticle" :key="item.url"><router-link :to="item.url.match(/article\/(\S*)\//)?`/scientific/${item.url.match(/article\/(\S*)\//)[1]}`:''">{{item.title}}</router-link> </li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div class="section recommend-article-wrap">
                    <div class="section-title">
                      十五言
                    </div>
                    <div class="column">
                         <div class="column-l article-list">
                              <div class="first">
                               <router-link :to="`15yan/${article.shiwuYan[0][0].id}`" :title="article.shiwuYan[0][0].title"> <img :src="article.shiwuYan[0][0].pic|imgBridge" :alt="article.shiwuYan[0][0].title" /></router-link>
                                <div class="cover"><router-link :to="`15yan/${article.shiwuYan[0][0].id}`">{{article.shiwuYan[0][0].title}}</router-link></div>
                              </div>
                              <ul class="list-ul">
                                <li v-for="item in article.shiwuYan[0].slice(1,article.shiwuYan[0].length)" :key="item.url">
                                  <router-link :to="`15yan/${item.id}`" :title="item.title">{{item.title}}</router-link>
                                  </li>
                              </ul>
                          </div>
                          <div class="column-r article-list">
                              <div href="" class="first">
                                <router-link :to="`15yan/${article.shiwuYan[1][0].id}`" :title="article.shiwuYan[1][0].title"><img :src="article.shiwuYan[1][0].pic|imgBridge" :alt="article.shiwuYan[1][0].title" /></router-link>
                                <div class="cover">
                                  <router-link :to="`15yan/${article.shiwuYan[1][0].id}`">{{article.shiwuYan[1][0].title}}</router-link>
                                  </div>
                              </div>
                              <ul class="list-ul">
                                <li v-for="item in article.shiwuYan[1].slice(1,article.shiwuYan[1].length)" :key="item.url">
                                   <router-link :to="`15yan/${item.id}`" :title="item.title">{{item.title}}</router-link>
                                </li>
                              </ul>
                          </div> 
                    </div>
                </div>
            </div>
            <div class="site-info column-r">
                 <div class="label">
                    <span>说明</span>
                 </div>
                 <div class="content">
                    <div class="img">
                      <img src="../../assets/gMSpapqSYGMgZjCDdTIk4nomFeS2Z7wmMdpfmcUxLPtKAQAA6wAAAEpQ.jpg" alt="" />
                    </div>
                    <div class="title">[一个测试的网站]</div>
                    <div class="desc">
                        展示最新科学信息、书籍推荐、摄影内容，内容采集自[豆瓣]、[果壳]。
                    </div>
                    <div class="link">
                      <a href="">[github地址]</a>
                    </div>
                 </div>
            </div>
          </div>
         <div class="section-recommendBooks">
           <div class="label-top">
             <div class="label"><span>最新书籍</span></div>
           </div>
           <div class="books-listWrap">
             <div class="book-item" v-for="item in newBooks" :key="item.url">
               <div class="img">
                 <router-link  :to="`book/${item.id}`" :title="item.title"><img :src="item.pic" :alt="item.title"/></router-link>
               </div>
               <div>
                 <router-link :to="`book/${item.id}`" class="title ellipsis"  :title="item.title">{{item.title}}</router-link>
                 <p class="author">{{item.author}}</p>
               </div>
             </div>
           </div>
         </div>

         <div class="section-photo">
           <div class="label-top">
             <div class="label"><div><span>摄</span><br /><span>影</span></div></div>
           </div>
            <div class="photo-wrap">
                <div class="column first-row">
                  <div class="column-l big-photo">
                       <router-link :to="`photo/${photo[11].id}`" :title="photo[11].title"> <img :src="photo[11].pic|imgBridge" alt="" class="vetically"/></router-link>
                      <div class="title vetically"><span><router-link :to="`photo/${photo[11].id}`">{{photo[11].title}}</router-link></span></div>
                  </div>
                  <div class="column-r">
                    <div class="min-photo-item">
                        <router-link :to="`photo/${photo[9].id}`" :title="photo[9].title"> <img :src="photo[9].pic|imgBridge" alt="" class="vetically"/></router-link>
                        <div class="title"><span><router-link :to="`photo/${photo[9].id}`">{{photo[9].title}}</router-link></span> </div>
                    </div>
                    <div class="min-photo-item">
                       <router-link :to="`photo/${photo[2].id}`" :title="photo[2].title">  <img :src="photo[2].pic|imgBridge" alt="" class="vetically"/></router-link>
                        <div class="title"><span><router-link :to="`photo/${photo[2].id}`">{{photo[2].title}}</router-link></span> </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="md-photo-item column-l">
                    <div class="img">
                     <router-link :to="`photo/${photo[12].id}`" :title="photo[12].title"> <img :src="photo[12].pic|imgBridge" alt="" /></router-link>
                    </div>
                    <div class="bottom">
                      <div class="title"><router-link :to="`photo/${photo[12].id}`" >{{photo[12].title}}</router-link></div>
                      <!-- <div class="date">{{photo[12].date}}</div> -->
                    </div>
                  </div>
                   <div class="md-photo-item column-r">
                    <div class="img">
                      <router-link :to="`photo/${photo[15].id}`" :title="photo[15].title"><img :src="photo[15].pic|imgBridge" alt="" /></router-link>
                    </div>
                    <div class="bottom">
                      <div class="title"><router-link :to="`photo/${photo[15].id}`">{{photo[15].title}}</router-link></div>
                      <!-- <div class="date">{{photo[15].date}}</div> -->
                    </div>
                  </div>
                </div>
            </div>
         </div>
      </div>
    
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import uiSwiper from '@/components/swiper'
export default {
  name: 'index',
  computed: {
    ...mapGetters({
      article: 'homeArticle',
      newBooks: 'homeNewBooks',
      photo: 'homePhoto'
    })
  },
  components: {
    uiSwiper
  },
  preFetch({ store }) {
    return store.dispatch(`getHomeData`)
  },
  title: '主页',
  // preCache: true,
  data() {
    return {

    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
@import '~scss_vars';
@import "src/styles/mixin.scss";
.header {
  height: 84px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  .header-logo {
    line-height: 84px;
    font-size: 26px;
    color: $primary-color;
  }
}
.section {
  .section-title {
    border-bottom:1px solid #e8e8e8;
    font-size: 18px;
    padding: 8px;
    margin-bottom: 6px;
  }
}
.column {
  @include clearfix;
  .column-l{
    float: left;
  }
  .column-r {
    float: right;
  }
}
.main-column {
  .main-content  {
    width: 630px;
    .new-swiper {
      width: 290px;
      height: 170px;
      // background: red;
    }
    .new-article {
      padding-top: 4px;
      width: 320px;
      line-height: 28px;
    }
    .recommend-article-wrap {
      .section-title {
        color: $primary-color;
      }
      .article-list {
        width: 306px;
        .first {
          width: 100%;
          height: 125px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .cover {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 38px;
            background: rgba(#000,0.4);
            a {
              display: block;
              line-height: 38px;
              color: #fff;
              font-size: 14px;
              text-indent: 6px;
            }
          }
        }
        .list-ul {
          margin-top: 4px;
          li {
            text-indent: 6px;
          }
        }
      }
    }
  }
  .site-info  {
    margin-top: 40px;
    width: 280px;
    background: #f1f8ec;
    height: 384px;
    position: relative;
    .label {
      position: absolute;
      right: 0;
      top: 0;
      width: 67px;
      height: 40px;
      background: #b1d695;
      text-align: center;
      line-height: 40px;
      color: #fff;
    }
    .content {
      padding:40px;
      .img {
        text-align: center;
        img{
          width:100px;
          height: 100px;
          border-radius: 50%;
          box-shadow: 0px 0px 3px 6px #b1d695;
        }
        
      }
      .title {
        text-align: center;
        line-height: 40px;
        margin-top: 6px;
        color: #555;
      }
      .desc {
        color: #999;
        font-size: 14px;
      }
      .link {
        margin-top: 30px;
      }
    }
  }
}
 .section-recommendBooks {
   >.label-top {
      @include clearfix;
     .label{
      width: 100px;
      height: 46px;
      background: #f2f2f2;
      text-align: center;
      float: right;
      span{
        line-height: 46px;
        color: $primary-color
      }
    }
   }
  .books-listWrap {
    @include clearfix;
    border:1px solid #e8e8e8;
    padding: 10px 0;
    .book-item {
      float: left;
      width: 172px;
      height: 240px;
      padding:10px 17px;
      margin:8px;
      box-shadow: 4px 3px 3px 3px #e8e8e8;
      .img {
         width: 138px;
         height: 160px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        color: #000;
        display: block;
        margin-top: 8px;
        line-height: 24px;
      }
      .author {
        font-size: 12px;
        color: #636363;
        margin: 0;
      }
    }
  }
}

.section-photo {
  margin-top: 10px;
  .label-top {
    height: 165px;
    background: url('../../assets/assets.jpg') no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-attachment:fixed;
    .label {
      width: 63px;
      height: 100%;
      background: $primary-color;
      text-align: center;
      display: table;
      span {
        color: #fff;
      }
      >div {
        display: table-cell;
        vertical-align: middle;
      }
    }
  }
  .first-row {
    margin-top: 6px;
    .big-photo {
      width: 628px;
      height: 426px;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
      }
      .title {
        height: 110px;
        border: 1px solid #fff;
        display: inline-block;
        width: auto;
        padding:0 40px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        overflow: hidden;
        &::before { 
          content: '';
          z-index: 1;
          position: absolute;
          top: 0; 
          right: 0; 
          bottom: 0; 
          left: 0; 
          background:rgba(#fff,0.4);
          filter: blur(20px);
          margin:-30px;
         }
        span {
          line-height: 110px;
        }
      }
    }
    .min-photo-item {
      position: relative;
      width: 316px;
      height: 210px;
      margin-bottom: 6px;
      overflow: hidden;
      img {
        max-width: 100%;
        width: auto;
      }
      .title {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: rgba(#fff, 0.6);
        text-align: center;
        span{
          line-height: 50px;
          font-size: 14px;
          &::before,&::after{
            content:' | ';
            color: #ff4081;
          }
        }
      }
    }
    
  }
  .md-photo-item {
      width: 472px;
      .bottom {
        border: 1px solid #e8e8e8;
        padding: 10px 0 6px 10px;
        border-top: 0;
        .title a{
          font-size: 16px;
          color: #000;
        }
        .date {
          font-size: 14px;
          line-height: 30px;
          color: #999;
        }
      }
     
      .img {
        height: 310px;
       img {
          width: 100%;
          height: 100%;
       }
      }
    }
}
</style>
