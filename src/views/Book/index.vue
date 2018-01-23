<template>
  <div class="container nav-fixed-pd">
      <div class="header">
        <div class="ad">
           <img :src="'https://img3.doubanio.com/view/dale-online/dale_ad/public/c245281f7dd16e4.jpg'|imgBridge" alt="">
        </div>
      </div>
      <div class="books clearfix">
        <div class="books-col" v-for="col in BooksListData" :key="col.name">
            <div class="classify-title">{{col.name}}</div>
              <ul class="books-list">
                <li v-for="(book,i) in col.data" :key="book.title"><router-link :to="{path:'/book/'+(book.id||'130558')}">{{i+1}}.{{book.title}}</router-link></li>
              </ul>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  .ad {
    margin: 20px 0;
    height: 92px;
    img{
      width: 100%;
    }
  }
}
.books {
  .books-col {
    width: 316px;
    float: left;
    margin-bottom: 20px;
  }
  .classify-title {
    font-size: 20px;
  }
  .books-list{
    margin: 10px 10px;
    li{
      border-bottom: 1px solid #e8e8e8;
      line-height: 40px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  title: '读书',
  computed: {
    ...mapGetters({
      BooksListData: 'BooksListData'
    })
  },
  preFetch({ store }) {
    return store.dispatch(`getBooksListData`)
  }
}
</script>
