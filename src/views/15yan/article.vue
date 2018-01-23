<template>
<div>
    <div class="cover" >
        <div class="cover-img" :style="`background-image:url('${article.cover}')`"></div>
    </div>
  <div class="container">
       <breadcrumb :path="{link:'/15yan',name:'十五言'}" :title="article.title"></breadcrumb>
       
       <div class="">
           <div class="content-th">
               <h1>{{article.title}}</h1>
               <p>{{article.subtitle}}</p>
           </div>
           <div class="content" v-html="article.content"></div>
       </div>
  </div>
</div>
</template>
<script>
import breadcrumb from '@/components/breadcrumb'
import { mapGetters } from 'vuex'
export default {
  components: {
    breadcrumb
  },
  computed: {
    ...mapGetters({
      article: 'shiwuYanArticle'
    })
  },
  title() {
    return this.article.title
  },
  preFetch({ store, router }) {
    return store.dispatch(`get15yanArticle`, router.params.id)
  }
}
</script>
<style lang="scss" scoped>
.cover {
    height: 300px;
   position: relative;
   opacity: 0.8;
    .cover-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    }
}
</style>
