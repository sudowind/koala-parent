<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
    <router-link to="/hello">{{msg}}</router-link>
    <test></test>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import test from './test.vue'

export default {
  components: {
    Group,
    Cell,
    test
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    test: function () {
      console.log('123')
    }
  },
  created: function () {
    this.test()
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
