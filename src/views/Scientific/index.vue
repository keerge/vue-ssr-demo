<template>
  <div class="nav-fixed-pd">
      <div class="header">
        <h1>科学</h1>
        <div class="desc">一个科学频道</div>
      </div>
      <div class="container">
        <div class="card-wrap">
            <div class="card" v-for="item in article.result" >
              <div class="img">
                <router-link :to="`/scientific/${item.id}`"><img :src="item.small_image|imgBridge" alt=""></router-link>
              </div>
            <div class="content">
                <div class="label-wrap">
                  <span :class="labelClasses(label)" v-for="label in item.channel_keys.length>0?item.channel_keys:['not-null']">{{label|labelFormat}}</span>
                </div>
                <div class="bottom">
                  <router-link :to="`/scientific/${item.id}`" class="title ellipsis">{{item.title}}</router-link>
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
      article: 'scientificArticle'
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
      if ($.isScrollEnd()) {
        if (!this.isLoading) {
          this.isLoading = true
          this.$store.dispatch('ADD_SCIENTIFIC', ++this.page).then(() => {
            this.isLoading = false
          })
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

