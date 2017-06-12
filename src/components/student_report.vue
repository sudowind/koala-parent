<!--学情分析-->
<template>
  <div>{{msg}}</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: '学情分析'
      }
    },
    created: function () {
      document.getElementsByTagName('title')[0].innerHTML = '学情分析'
    }
  }
</script>
