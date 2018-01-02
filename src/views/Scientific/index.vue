<template>
  <div>
      <div class="header">
        <h1>科学</h1>
        <div class="desc">一个科学频道</div>
      </div>
      <div class="container">
        <div class="card-wrap">
            <div class="card" v-for="item in article.result">
              <div class="img">
                <img :src="item.small_image|imgBridge" alt="">
              </div>
            <div class="content">
                <div class="label-wrap">
                  <span :class="labelClasses(label)" v-for="label in item.channel_keys.length>0?item.channel_keys:['not-null']">{{label|labelFormat}}</span>
                </div>
                <div class="bottom">
                  <a class="title ellipsis">{{item.title}}</a>
                  <p class="date">{{item.date_created}} </p>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import $ from '@/utils/common'
export default {
  name: 'index',
  computed: {
    ...mapGetters({
      article: 'scientificArticle',
      isLoading: 'scientificArticle_isloading'
    })
  },
  preFetch({ store }) {
    return store.dispatch(`GET_SCIENTIFIC`, this.page)
  },
  title: '科学',
  preCache: true,
  data() {
    return {
      page: 0
    }
  },
  methods: {
    labelClasses(label) {
      const classes = {
        hot: 'label-hot',
        frontier: 'label-3',
        grzd: 'label-2'
      }
      return 'label ' + (classes[label] ? classes[label] : 'label-1')
    }
  },
  filters: {
    labelFormat(name) {
      const title = {
        hot: '热门',
        frontier: '前沿',
        review: '评论',
        medicine: '医学',
        grzd: '果然知道',
        fact: '谣言粉碎机'
      }
      return title[name] ? title[name] : '推荐'
    }
  },
  mounted() {
    window.onscroll = $.throttle(() => {
      if ($.getHeight() + $.getScrollTop() === $.getClientHeight()) {
        if (!this.isLoading) {
          this.$store.dispatch('ADD_SCIENTIFIC', ++this.page)
        }
      }
    }, 500)
  }
}
</script>
<style lang="scss" scoped>
@import '~scss_vars';
.header {
  height: 107px;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
  h1 {
    font-size: 26px;
    color: #888;
    margin: 0;
    padding: 24px 0 4px 0px;
  }
  .desc {
    font-size: 14px;
    &::before{
      content:'[';
      color:$primary-color
    }
    &::after {
       content:']';
      color:$primary-color
    }
  }
}

.card-wrap {
  width: 960px;
}
.card {
  width: 308px;
  float: left;
  margin-right: 12px;
  margin-top: 12px;
  .content {
    border: 1px solid #e8e8e8;
    border-top: none;
  }
  .img {
    height: 207px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .label-wrap{
    border-bottom: 1px solid #e8e8e8;
    padding: 6px 0;
    font-size: 0;
    .label {
      display: inline-block;
      font-size: 12px;
      color: #fff;  
      padding: 2px 10px; 
      margin-left: 4px;
    }
    .label-1 {
        background: #60BAF9;
    }
    .label-2 {
        background: #FF9536;
    }
    .label-3 {
        background: #85C199;
    }
    .label-hot {
      background: #f96860;
    }
  }
  .bottom{
    text-indent: 6px;
    .title {
        font-size: 16px;
        line-height: 28px;
        margin-top: 6px;
        display: block;
    }
    .date{
      margin: 0;
    margin-bottom: 10px;
    font-size: 14px;
    }
  }
}
</style>

