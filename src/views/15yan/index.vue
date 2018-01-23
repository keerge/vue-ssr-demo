<template>
  <div>
      <div class="header">
          <div class="cover-post">
              <div class="container">
                 <div class="cover-img" :style="`background-image:url(${PostsListData[0].image})`"></div>
                <div class="post-header ">
                  <div class="">
                    <router-link :to="`/15yan/${PostsListData[0].id}`"><h1>{{PostsListData[0].title}}</h1></router-link>
                    <p v-if="PostsListData[0].subtitle">---{{PostsListData[0].subtitle}}</p>
                    <h4 class="read-sta"><span>{{PostsListData[0].readers_count}}人阅读</span> <span>全文{{PostsListData[0].words_count}}字</span></h4>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div class="post-list container">
          <div class="post-box" v-for="item in PostsListData.slice(1,PostsListData.length)" :key="item.title">
              <router-link :to="`/15yan/${item.id}`">
                <div class="post-cover">
                <div class="cover-img" :style="`background-image:url(${item.image})`"></div>
                <div class="post-read">
                  <span>{{item.readers_count}}人阅读</span> <span>全文{{item.words_count}}字</span> <span v-if="item.subtitle">| {{item.subtitle}}</span>
                </div>
              </div>
              <div class="post-title">
                  <h2>{{item.title}}</h2>
                  
              </div>
              </router-link>
          </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import $ from '@/utils/common'
export default {
  computed: {
    ...mapGetters({
      PostsListData: 'PostsListData'
    })
  },
  title: '15言',
  isLoading: false,
  data() {
    return {
      page: 0

    }
  },
  preFetch({ store }) {
    return store.dispatch(`getPosts`)
  },
  created() {

  },
  mounted() {
    window.onscroll = $.throttle(() => {
      if ($.isScrollEnd()) {
        if (!this.isLoading) {
          this.isLoading = true
          this.$store.dispatch('getPosts', ++this.page).then(() => {
            this.isLoading = false
          })
        }
      }
    }, 500)
  }
}
</script>
<style lang="scss" scoped>
.cover-post {
  position: relative;
  height: 100%;
  color: #fff;
  min-height: 400px;
  h1 {
    margin: 0;
    font-size: 48px;
  }
  .read-sta {
    font-weight: 400;
  }
  .cover-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
  .post-header {
      position: absolute;
      top: 50%;
      transform: translate(0%,-50%);
      a {
        color: #fff;
      }
  }
}
.post-box {
  margin-top: 10px;
  .post-cover {    
    position: relative;
    height: 230px;
    .post-read{
      position: absolute;
      bottom: 0;
    }
    .cover-img{
      background-image: url('http://ob7zbqpa6.qnssl.com/ky6smjs8seywxmuyo3ehp2l1jy3pxbwy.jpg') ;
      display: block;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

    }
   .post-read{
     height: 30px;
     width: 100%;
     line-height: 30px;
     background: rgba(#fff, 0.6);
     color:#fff;
     text-indent:10px;
   }
  }
  .post-title {
    height: 50px;
    line-height: 50px;
    background: #fff;
   text-indent:10px;
    h2 {
      margin: 0;
      font-size: 16px;
      color: #333;
      font-weight: normal;
    }
  }
   box-shadow: 0px 0px 5px 0px #e8e8e8;
}
</style>

