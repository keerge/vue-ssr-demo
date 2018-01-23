<template>
  <div class="nav-bar" :style="`background:rgba(85, 85, 85,${navCoverColor})`">
      <ul class="ul-inline nav-ul">
        <li> <router-link to="/" :class="{active:isActive('/')}">首页</router-link> </li>
         <!-- <li> <a href="/scientific" :class="{active:isActive('/scientific')}">科学</a></li> -->
        <li> <router-link to="/scientific" :class="{active:isActive('/scientific')}">科学</router-link> </li>
        <li> <router-link to="/book" :class="{active:isActive('/book')}">读书</router-link> </li>
        <li> <router-link to="/15yan" :class="{active:isActive('/15yan')}">十五言</router-link> </li>
        <li> <router-link to="/photo" :class="{active:isActive('/photo')}">摄影</router-link> </li>
      </ul>
      <div class="container" style="position: relative;">
        <a href="javascript:;" class="back-btn" v-if="navCoverColor!==1&&$route.path!=='/'" @click="$router.go(-1)" title="返回"></a>
      </div>
  </div>
</template>
<script>
import $ from '@/utils/common'
export default {
  methods: {
    isActive(path) {
      if (this.$route.path !== path && path === '/') {
        return false
      }
      return new RegExp(path).test(this.$route.path)
    }
  },
  data() {
    return {
      navCoverColor: 1
    }
  },
  mounted() {
    window.addEventListener('scroll', $.throttle(() => {
      if ($.getScrollTop() < 100) {
        this.navCoverColor = 1
      } else {
        this.navCoverColor = 0.6
      }
    }), false)
  }
}
</script>

<style lang="scss" scoped>

.nav-bar {
  width: 100%;
  height: 41px;
  // background: rgba(#555, 1);
  transition:background 0.5s;
  position: fixed;
  border-bottom: 3px solid #85C155;
  z-index: 2;
  .nav-ul {
    margin: 0 20px;
    position: absolute;
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
.back-btn {
   width: 30px;
   height: 30px;
  position: absolute;
      right: 12px;
    top: 4px;
  display: inline-block;
  background: url('~assets/left.png') no-repeat;
  background-size: 100%;
}
</style>

