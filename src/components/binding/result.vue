<template>
  <div class="binding-result-container">
    <Button type="primary" long @click="redirect()">立即查看阅读学情</Button>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    created () {
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$parent.currentStep = 2
      })
    },
    methods: {
      redirect () {

      }
    }
  }
</script>
<style>
  body {
    background-color: #fbf9fe;
  }
  a {
    color: #000;
  }
  .binding-result-container {
    margin-top: 30px;
  }
</style>
