<template>
  <div class="book-detail container nav-fixed-pd">
      
      <breadcrumb :path="{link:'/book',name:'读书'}" :title="BookDetail.title"></breadcrumb>
        <div class="book-header">
          <div class="clearfix">
            <div class="clearfix"></div>
            <div class="book-pic">
              <img :src="BookDetail.img" alt="">
            </div>
            <div class="book-info">
              <h1>{{BookDetail.title}}</h1>
              <ul class="cnt">
                <li>作者：	{{BookDetail.desc.author}}</li>
                <li>版权：	{{BookDetail.desc.published}}</li>
                <li>出版：	{{BookDetail.desc.datePublished}}</li>
              </ul>
            </div>
          </div>
        </div>
     <div class="clearfix">
          <div class="bookdetail">
            <div class="nav-sep">
              <div class="sep-title">简介</div>
               <div class="content" v-html="BookDetail.content"></div>
            </div>
            <div class="nav-sep">
              <div class="sep-title">目录</div>
               <div class="content bookdetail-toc" v-html="BookDetail.toc"></div>
            </div>
        </div>
        <div class="more-books">
            <div class="taglist nav-sep ">
              <div class="tag-label sep-title">其他图书</div>
              <div class="content">
                  <ul>
                    <li class="clearfix item" v-for="item in BookDetail.more" :key="item.id">
                      <router-link :to="`/book/${item.id}`" class="book-pic" > <img :src="item.img" :alt="item.title"></router-link>
                      <div class="info">
                        <router-link :to="`/book/${item.id}`" class="book-name" :tilte="item.title"> 
                          {{item.title}}
                        </router-link>
                          <div class="author">
                              <span>{{item.author}}</span>
                          </div>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>
        </div>
     </div>
      
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import breadcrumb from '@/components/breadcrumb'
export default {
  computed: {
    ...mapGetters({
      BookDetail: 'BookDetail'
    })
  },
  title() { return this.BookDetail.title },
  preFetch({ store, router }) {
    return store.dispatch(`getBooksDetail`, router.params.id)
  },
  components: {
    breadcrumb
  }
}
</script>

<style lang="scss" scoped>

.book-header {
  padding: 20px;
  .book-pic{
    float: left;
    width: 180px;
    height: 240px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .book-info {
    float: left;
    padding-left: 30px;
    h1 {
      margin: 0;
      font-size: 18px;
    }
    .cnt {
        margin-top: 10px;
      font-size: 14px;
      li{
        line-height: 24px;
      }
    }
  }
  
}
.bookdetail {
  width: 650px;
  float: left;
  .content {
    padding: 10px;
    font-size: 14px;
    line-height: 30px;
   
  }
  
}
.bookdetail-toc {
   >ol {
      padding:0
    }
}
.more-books{
  width: 260px;
  float: right;
  .item {
    margin-top: 6px;
  }
  .book-pic {
    float: left;
    width: 80px;
    height: 118px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    float: right;
    width: 168px;
    
    .book-name {
      font-size: 16px;
      color: #000;
    }
    .author{
      font-size: 14px;
      color: #666;
    }
  }
}
.nav-sep {
    .sep-title{
      padding: 10px;
      border-bottom: 1px solid #e8e8e8;
    }
  }
</style>
