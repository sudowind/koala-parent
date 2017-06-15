<template>
  <div class="binding-container">
    <div>
      <Row>
        <Steps :current="currentStep" size="small">
          <Step title="账号绑定"></Step>
          <Step title="验证手机"></Step>
          <Step title="绑定成功"></Step>
        </Steps>
      </Row>
    </div>

    <br/>
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
  padding: 30px 20px;
}
</style>
