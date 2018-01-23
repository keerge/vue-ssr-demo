<template>
  <div class="container nav-fixed-pd">
      <div class="content-th">
          
            <breadcrumb :path="{link:'/scientific',name:'科学'}" :title="article.title"></breadcrumb>
              
          <!-- <div class="label-wrap">
            <span class="label label-1">天文</span>
          </div> -->
           <h1>{{article.title}}</h1>
            <div class="th-date">
                {{article.date}}
            </div>
      </div>

      <div class="content" v-html="article.content"></div>
      
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import breadcrumb from '@/components/breadcrumb'
export default {
  computed: {
    ...mapGetters({
      article: 'scientificArticleDetail'
    })
  },
  title() {
    return this.article.title
  },
  preFetch({ store, router }) {
    return store.dispatch(`getScientificArticle`, router.params.id)
  },
  components: {
    breadcrumb
  }
}
</script>

<style lang="scss" scoped>
.content-th {
   margin-top: 50px;
  
    border-bottom: 1px solid #eee;
   h1{
        margin-top: 18px;
        color: #333;
        font-size: 24px;
        font-weight: 400;
   }
   .th-date{
            font-size: 14px;
    margin-top: 25px;
    padding-bottom: 25px;
        color: #b8b8b8;
     
   }
}
.content{
    margin-top: 20px;
    margin-bottom: 30px;
}
</style>
