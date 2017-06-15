<template>
  <div>
    <div class="student-info">
      <student-info></student-info>
    </div>
    <div class="task">

    </div>
    <div>
      <div><router-link to="/rank">排行榜</router-link></div>
      <div><router-link to="/erScore">ER值测评报告</router-link></div>
      <div><router-link to="/report">学情分析</router-link></div>
      <!--<div><router-link to="/know_er">了解ER</router-link></div>-->
    </div>
  </div>
</template>
<script>
  import StudentInfo from './student_info.vue'
  export default {
    components: {
      'student-info': StudentInfo
    },
    data () {
      return {
        msg: 'hello my world',
        student: {
          name: 'xxx'
        }
      }
    }
  }
</script>
<style>

</style>
