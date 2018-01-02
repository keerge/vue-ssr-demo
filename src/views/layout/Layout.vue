<template>
  <div class="app-wrapper">
      <nav-bar></nav-bar>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
      <public-footer></public-footer>
  </div>
</template>

<script>
import navBar from './components/Navbar'
import publicFooter from './components/publicFooter'
export default {
  name: 'layout',
  components: {
    navBar,
    publicFooter
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
