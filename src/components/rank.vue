<!--排行榜-->
<template>
  <div>{{msg}}</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: '排行榜'
      }
    },
    created: function () {
      document.getElementsByTagName('title')[0].innerHTML = '排行榜'
    }
  }
</script>
