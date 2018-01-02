<template>
  <div class="nav-bar">
      <ul class="ul-inline nav-ul">
        <li> <router-link to="/" :class="{active:isActive('/')}">首页</router-link> </li>
         <!-- <li> <a href="/scientific" :class="{active:isActive('/scientific')}">科学</a></li> -->
        <li> <router-link to="/scientific" :class="{active:isActive('/scientific')}">科学</router-link> </li>
        <li> <router-link to="/book" :class="{active:isActive('/book')}">读书</router-link> </li>
        <li> <router-link to="/15yan" :class="{active:isActive('/15yan')}">十五言</router-link> </li>
        <li> <router-link to="/photo" :class="{active:isActive('/photo')}">摄影</router-link> </li>
      </ul>
  </div>
</template>
<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path === path
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>

.nav-bar {
  width: 100%;
  height: 41px;
  background: #555;
  border-bottom: 3px solid #85C155;
  .nav-ul {
    margin: 0 20px;
    li {
      float: left;
      color: #D0D0D0;
      a {
        font-size: 12px;
        display: block;
        padding: 10px;
        margin-right: 4px;
        position: relative;
        color: #fff;
        &.active {
          background: #393939;
          color: #fff;
          &::after{
            position: absolute;
            left: 50%;
            margin-left: -5px;
            bottom: -1px;
            content:'';
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 6px solid #85C155;
          }
        }
        &:hover {
          background: #393939;
          color: #fff; 
        }
      }
    }
  }
}
</style>

