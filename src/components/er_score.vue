<!--学生ER值变化-->
<template>
  <div id="container">
    <div class="student-info">
      <student-info></student-info>
    </div>
    <div>
      <div class="circle">{{year}}</div>
      <div class="content">
        <er-title-l></er-title-l>
        <er-title-r></er-title-r>
        <er-title-l></er-title-l>
        <er-title-r></er-title-r>
        <er-title-l></er-title-l>
        <er-title-r></er-title-r>
        <er-title-l></er-title-l>
        <er-title-l></er-title-l>
        <er-title-l></er-title-l>
        <er-title-r></er-title-r>
      </div>
    </div>
  </div>

</template>
<script>
  import StudentInfo from './student_info_simple.vue'
  import ErTitleL from './er_title_l.vue'
  import ErTitleR from './er_title_r.vue'
  export default {
    components: {
      'student-info': StudentInfo,
      'er-title-l': ErTitleL,
      'er-title-r': ErTitleR
    },
    data () {
      return {
        student: {
          name: 'xxx'
        },
        year: 2017
      }
    }
  }
</script>
<style scoped>
  #container {
    text-align: center;
  }
  .student-info {
    background: url(../assets/img/student_info_simple_bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .circle {
    text-align: center;
    line-height: 3em;
    color: white;
    margin-top: 1em;
    display: inline-block;
    width: 3em;
    height:3em;
    font-size: 1.3em;
    border-radius: 50%;
    background-color: #79afec;
  }
  .content {
    width: 100%;
    min-height: 25em;
    position: relative;
  }
  .content:before {
    content: '';
    position: absolute;
    left: 50%;
    margin: -0.2em;
    height: 130%;
    width: 0.4em;
    background: linear-gradient( #79afec, #79afec, #79afec , #79afec, #79afec ,RGBA(255,255,255,0));
  }
</style>
