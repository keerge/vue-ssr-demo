<template>
  <div class="app-wrapper">
      <nav-bar></nav-bar>
      <router-view></router-view>
      <back-to-top></back-to-top>
      <public-footer></public-footer>
  </div>
</template>

<script>
import navBar from './components/Navbar'
import publicFooter from './components/publicFooter'
import backToTop from './components/backToTop'
export default {
  name: 'layout',
  components: {
    navBar,
    publicFooter,
    backToTop
  },
  computed: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

</style>
