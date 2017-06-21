<template>
  <div class="binding-container">
    <div class="steps">
      <div class="step index"></div>
      <div class="step"></div>
      <div class="step"></div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        currentStep: 0
      }
    },
    created () {
    },
    components: {
    }
  }

</script>

<style>
  .binding-container {
    padding: 40px 30px;
  }
  .steps{
    width: 90%;
    text-align: center;
    background: #fff;
    height: 0.4em;
    margin:0 auto;
  }
  .steps .index{
    background: #9bbfe8;
  }
  .step{
    width: 33%;
    height: 100%;
    float: left;
  }

</style>
