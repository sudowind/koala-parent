<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">

  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
  /*@import '~bootstrap/dist/css/bootstrap.css';*/
  /*@import '~bootstrap/dist/css/bootstrap-theme.css';*/
  @import '~vux/src/styles/reset.less';

  body {
    font-size: 14px;
    /*letter-spacing: 0.03em;*/
    background-color: #f6f6f6;
  }
  a, a:active, a:hover {
    color: #000;
    text-decoration:none
  }
  .w-bg {
    background: #ffffff;
  }
  .clear {
    clear: both;
  }
  .clear:after {
    content: "";
    display: block;
    clear: both;
    zoom:1;
  }
</style>
