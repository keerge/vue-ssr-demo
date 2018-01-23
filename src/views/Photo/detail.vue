<template>
   <div class="container nav-fixed-pd">
      <breadcrumb :path="{link:'/photo',name:'摄影'}" :title="photoDetail.title"></breadcrumb>
      <div class="photo-content" v-html="photoDetail.content"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import breadcrumb from '@/components/breadcrumb'
export default {
  components: {
    breadcrumb
  },
  computed: {
    ...mapGetters({
      photoDetail: 'photoDetail'
    })
  },
  preFetch({ store, router }) {
    return store.dispatch(`getPhotoDetail`, router.params.id)
  },
  title() {
    return this.photoDetail.title
  }
}
</script>
<style lang="scss" >
.photo-content {
  margin-top: 20px;
  img {
    width: 100% !important;
  }
}
</style>
