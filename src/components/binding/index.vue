<template>
  <div>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/binding/user">用户</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/binding/tel">手机</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/binding/result">结果</router-link>
      </div>
    </div>

    <br/>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
      }
    },
    created () {
      console.log('binding user index created')
    },
    components: {
    }
  }

</script>

<style>

</style>
