<template>
  <div class="breadcrumb clearfix">
        <div class="link">
          <router-link :to="path.link">{{path.name}}</router-link>
          <span class="sep">></span>
          <em>{{title}}</em>
        </div>

        <div class="back">
          <a href="javascript:;" @click="$router.go(-1)">返回</a>
        </div>
      </div>
</template>
<script>
export default {
  props: ['path', 'title']
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  height: 40px;
  line-height: 40px;
  
   border-top: 1px solid #e8e8e8;
   border-bottom: 1px solid #e8e8e8;
  .link {
     float: left;
    .sep {
      color: #555;
    }
    em {
      color: #a4a4a4;
      font-size: 14px;
      font-style: normal;
    }
   
  }
  .back {
    float: right;
  }
}
</style>
