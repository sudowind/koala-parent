<!--学生ER值变化-->
<template>
  <div>{{msg}}</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'ER值测评报告'
      }
    },
    created: function () {
      document.getElementsByTagName('title')[0].innerHTML = 'ER值测评报告'
    }
  }
</script>
