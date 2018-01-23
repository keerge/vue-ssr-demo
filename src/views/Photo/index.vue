<template>
  <div class="container nav-fixed-pd">
      <div class="photo-list">
            <router-link  v-for="item in photoList" :key="item.id" :to="`photo/${item.id}`" class="photo-item-tag" :onmouseover="`this.style.color='${getRandomColor()}'`">{{item.title}}</router-link>
      </div>
  </div>
</template>
<script>
// getPhotoList
import { mapGetters } from 'vuex'
export default {
  title: '摄影',
  computed: {
    ...mapGetters({
      photoList: 'photoList'
    })
  },
  preFetch({ store }) {
    return store.dispatch(`getPhotoList`)
  },
  methods: {
    getRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

  }
}
</script>
<style lang="scss" scoped>
.photo-item-tag {
  display: inline-block;
  padding: 10px 20px;
  // border-bottom: 2px solid #b1d695;
  margin:0 10px;
}
</style>
