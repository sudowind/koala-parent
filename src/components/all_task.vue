<!--阅读任务-->
<template>
  <div>
    <div class="task-bg">
      <div class="title"><img src="../assets/img/task-icon.png" alt=""><span>作业任务</span></div>
    </div>
    <div class="task-main">
      <div class="task-time">5月18日&nbsp;&nbsp;周四发布</div>

      <!--阅读量任务-->
      <div class="task-list">
        <div class="all-task">
          <div class="task-header">
            <div>阅读量任务</div>
            <div class="header-index">待完成</div>
          </div>
          <div class="task-cont">
            <div>字数：<span>10万字</span></div>
            <div class="task-cont-right">时间：<span>2017.01.01</span>—<span>2017.02.02</span></div>
          </div>
          <div class="task-alr">已读：<span>0</span>字</div>
        </div>

        <!--书籍作业-->
        <div class="all-task">

          <div class="task-header">
            <div>书籍作业 &nbsp;(共<span>1</span>本)</div>
            <div class="header-index">待完成</div>
          </div>

          <div class="book-list">
            <div class="task-cont">
              <div>时间：<span>2017.01.01</span>—<span>2017.02.02</span></div>
              <div class="header-index">待完成</div>
            </div>
            <div class="task-alr">《<span>鸭子骑车记</span>》— <span>500</span>字</div>
            <div class="remind">请提醒孩子完成该任务</div>
          </div>


          <div class="book-list">
            <div class="task-cont">
              <div>时间：<span>2017.01.01</span>—<span>2017.02.02</span></div>
              <div class="header-index">待完成</div>
            </div>
            <div class="task-alr">《<span>鸭子骑车记</span>》— <span>500</span>字</div>
            <div class="remind">请提醒孩子完成该任务</div>
          </div>


        </div>

        <!--短文任务-->
        <div class="all-task">

          <div class="task-header">
            <div>短文作业 &nbsp;(共<span>1</span>本)</div>
            <div class="header-index">待完成</div>
          </div>

          <div class="book-list">
            <div class="task-cont">
              <div>时间：<span>2017.01.01</span>—<span>2017.02.02</span></div>
              <div class="header-index">待完成</div>
            </div>
            <div class="task-alr">《<span>鸭子骑车记</span>》— <span>500</span>字</div>
            <div class="remind">请提醒孩子完成该任务</div>
          </div>

          <div class="book-list">
            <div class="task-cont">
              <div>时间：<span>2017.01.01</span>—<span>2017.02.02</span></div>
              <div class="header-index">待完成</div>
            </div>
            <div class="task-alr">《<span>鸭子骑车记</span>》— <span>500</span>字</div>
            <div class="remind">请提醒孩子完成该任务</div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>
<script>

</script>
<style>
  .task-bg{
    background: url(../assets/img/task_bg.png) no-repeat;
    background-size: 100% 100%;
    height: 10em;
  }
  .task-bg div{
    float: left;
    margin-top: 2.5em;
    font-size: 1.6em;
    color: #FFF;
  }
  .title{
    text-align: center;
    width: 100%;
  }
  .title img{
    width: 1.2em;
    height: 1em;
    margin-right: 0.3em;
  }
  .task-main{
    width: 100%;
    background: #fff;
    margin-bottom: 1em;
  }
  .task-time{
    height: 4em;
    line-height: 4em;
    font-size: 1.3em;
    text-align: center;
  }
  .task-list{
    width: 100%;
  }
  .task-list .all-task{
    width: 100%;
    min-height: 8em;
    padding: 1em 1.4em;
    border-top:1px solid #f6f6f6;
  }
  .task-header{
    height: 2em;
    margin-bottom: 0.7em;
  }
  .task-header div{
    font-size: 1.3em;
    float: left;
  }
  .task-header div:nth-of-type(2){
    float: right;
    font-size: 1.1em;

  }
  .task-header .header-index ,.task-cont .header-index{
    color:#9bbfe8;
    float: right;
  }
  .task-cont{
    width: 100%;
    color: #999;
    height: 1.6em;
    font-size: 1.1em;
  }
  .task-cont div{
    float: left;
  }
  .task-cont .task-cont-right{
    float: right;
    margin-right: 3em;
  }
  .task-alr{
    width: 100%;
    /*float: left;*/
    color: #999;
    font-size: 1.1em;
  }
  .book-list{
    min-height: 4.4em;
  }
  .book-list .remind{
    color: red;
    height: 1.2em;
  }
</style>
