<template>
  <a href="javascript:;" class="backtotop-btn" v-backToTop></a>
</template>
<style lang="scss" scoped>
.backtotop-btn {
    display: none;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 20px;
  right: 50px;
  background: rgba(#000, 0.2);
  background-image: url('~assets/top.png');
  background-size:cover;
  border-radius: 2px;
  &:active {
    background: rgba(#000, 0.4);
    background-image: url('~assets/top.png');
    background-size:cover;
  }
}
</style>
<script>
import $ from '@/utils/common'
export default {
  directives: {
    backToTop(el) {
      el.style.display = 'none'
      window.addEventListener('scroll', $.throttle(() => {
        if ($.getClientHeight() - ($.getHeight() + $.getScrollTop()) < 600) {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      }), false)
      el.addEventListener('click', () => {
        window.scroll(0, 0)
      })
    }
  }
}
</script>
