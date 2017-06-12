<template>
  <div>
    <div class="student-info">
      <student-info></student-info>
    </div>
    <div class="task w-bg">
      查看全部作业<br/>
      查看所有老师发布的作业
      <div>
        <div class="col-xs-6">书籍作业<br/>
          <small>点击查看详情</small></div>
        <div class="col-xs-6">短文作业<br/>
          <small>点击查看详情</small></div>
      </div>
      <div class="clear"></div>
    </div>
    <div>
      <router-link to="/rank"><div class="w-bg tab-list">排行榜</div></router-link>
      <div class="w-bg tab-list"><router-link to="/erScore">ER值测评报告</router-link></div>
      <div class="w-bg tab-list"><router-link to="/report">学情分析</router-link></div>
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
  .student-info {
    background: url(../assets/img/student_bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .task {
    margin: 1em 0;
    padding: 1em;
  }
  .tab-list {
    margin-bottom: 0.5em;
    height: 4em;
    padding: 0.7em 1em;
  }
</style>
