<template>
  <div>
    <div class="student-info">
      <student-info></student-info>
    </div>
    <div class="task w-bg">
      <router-link to="/all_task">
        <div class="check clear">
          <div class="check-all-img div-img"><img src="../../src/assets/img/check-all-work.png" alt=""></div>
          <div class="task-content">
            <p class="task-p">查看全部作业</p>
            <p class="see-all">查看所有老师发布的作业</p>
          </div>
          <div class="task-right"><img src="../../src/assets/img/task-right.png" alt=""></div>
        </div>
      </router-link>



      <div class="work">
        <router-link to="/book_work">
          <div class="col-xs-6">
            <div class="div-img book-work-img"><img src="../../src/assets/img/book-work.png" alt=""></div>
            <div class="work-right">
              <div>书籍作业</div>
              <small>点击查看详情</small>
            </div>
          </div>
        </router-link>


        <div class="col-xs-6">
          <div class="div-img book-work-img"><img src="../../src/assets/img/essay-work.png" alt=""></div>
          <div class="work-right">
            <div>短文作业</div>
            <small>点击查看详情</small>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div>
      <router-link to="/rank">
        <div class="w-bg tab-list">
          <div class="div-img"><img src="../../src/assets/img/top.png" alt=""></div>
          <div class="task-content">
            <p class="task-p">排行榜</p>
            <p class="see-all">查看孩子阅读量和ER值的排名情况</p>
          </div>
        </div>
      </router-link>
      <router-link to="/erscore">
        <div class="w-bg tab-list">
          <div class="div-img"><img src="../../src/assets/img/er-report.png" alt=""></div>
          <div class="task-content">
            <p class="task-p">ER测评报告</p>
            <p class="see-all">查看孩子ER测评各维度能力报告</p>
          </div>
        </div>
      </router-link>
      <router-link to="/report">
        <div class="w-bg tab-list">
          <div class="div-img"><img src="../../src/assets/img/analyze.png" alt=""></div>
          <div class="task-content">
            <p class="task-p">学情分析</p>
            <p class="see-all">查看孩子任务完成的进度以及正确率情况</p>
          </div>
        </div>
      </router-link>
      <router-link to="/know_er">
        <div class="w-bg tab-list">
          <div class="div-img"><img src="../../src/assets/img/know-er.png" alt=""></div>
          <div class="task-content">
            <p class="task-p">了解ER</p>
            <p class="see-all">轻松了解什么是ER以及分级阅读的概念</p>
          </div>
        </div>
      </router-link>
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
  .div-img{
    width: 3em;
    height: 3em;
    float: left;
  }
  .div-img img{
    width: 100%;
    height: 100%;
  }
  .task {
    margin: 1em 0;
  }
  .tab-list {
    margin-bottom: 0.5em;
    height: 5em;
    padding: 1em 1em;
  }
  .check-all-img{
    width: 3em;
    height: 3em;
    float: left;
    margin-top: 0.1em;
  }
  .check-all-img img{
    width: 100%;
    height: 100%;
  }
  .task-content{
    float: left;
    margin-left: 1em;
  }
  .task-p{
    font-size: 1.1em;
    margin:0;
  }
  .see-all{
    font-size: 0.9em;
    margin: 0;
    color: #999999;
  }
  .task-right{
    float: right;
    width: 0.6em;
    height: 1em;
    margin: 0.8em 1em 0 0;
  }
  .task-right img{
    width: 100%;
    height: 100%;
  }
  .check{
    width: 100%;
    height: 5em;
    border-bottom: 1px solid #f3f3f3;
    padding: 1em;
  }
  .work{
    width: 100%;
    text-align: center;
    height: 5em;
    border-bottom: 1px solid #dedede;
  }
  .book-work-img{
    width: 2em;
    height: 2em;
    margin-top: 1.5em;
    margin-right: 1em;
    margin-left: 1.8em;
  }
  .work-right{
    float: left;
    height: 5em;
    padding: 1em 0;
  }
  .work .col-xs-6:nth-of-type(1){
    border-right: 1px solid #dbdbdb;
  }
  small{
    color: #999999;
  }
  .work-right div:nth-of-type(1){
    font-size: 1.1em;
  }
</style>
