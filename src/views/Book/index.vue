<template>
  <div class="container">
      <div class="header">
        <div class="ad">
           <img :src="'https://img3.doubanio.com/view/dale-online/dale_ad/public/c245281f7dd16e4.jpg'|imgBridge" alt="">
        </div>
      </div>
      <div class="books clearfix">
        <div class="books-col">
            <div class="classify-title">畅销版</div>
              <ul class="books-list">
                <li><a href="">1.高效人士用超级笔记术s</a></li>
                <li><a href="">2.高效人士用超级笔记术s</a></li>
              </ul>
        </div>
        <div class="books-col">
            <div class="classify-title">畅销版</div>
              <ul class="books-list">
                <li><a href="">1.高效人士用超级笔记术s</a></li>
                <li><a href="">2.高效人士用超级笔记术s</a></li>
              </ul>
        </div>
        <div class="books-col">
            <div class="classify-title">畅销版</div>
              <ul class="books-list">
                <li><a href="">1.高效人士用超级笔记术s</a></li>
                <li><a href="">2.高效人士用超级笔记术s</a></li>
              </ul>
        </div>
        <div class="books-col">
            <div class="classify-title">畅销版</div>
              <ul class="books-list">
                <li><a href="">1.高效人士用超级笔记术s</a></li>
                <li><a href="">2.高效人士用超级笔记术s</a></li>
              </ul>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  .ad {
    margin: 20px 0;
    height: 92px;
    img{
      width: 100%;
    }
  }
}
.books {
  .books-col {
    width: 270px;
    float: left;
    margin-bottom: 20px;
  }
  .classify-title {
    font-size: 20px;
  }
  .books-list{
    margin: 10px 10px;
    li{
      border-bottom: 1px solid #e8e8e8;
      line-height: 40px;
    }
  }
}
</style>

<script>
export default {
  title: '读书'
}
</script>
