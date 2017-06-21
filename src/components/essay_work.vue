<!--短文作业-->
<template>
  <div>

    <div class="book-tab">
      <div class="col-xs-6 index">未完成</div>
      <div class="col-xs-6">已完成</div>
    </div>

    <div>
      <div class="remind">
        <div>共13本短文作业待完成，2本已逾期，赶快督促一下吧~</div>
        <!--<div>共完成14本书籍作业~</div>-->
      </div>

      <div class="unfinished">
        <div class="essay">
          <div class="essay-content">

            <div class="essay-up clear">
              <div class="essay-name">鸭子骑车记</div>
              <div class="essay-status"><img src="../assets/img/essay-overdue.png" alt=""></div>
            </div>
            <div class="essay-font">字数：3.4万字</div>
            <div class="essay-down">
              <div class="book-time">作业时间：2017.03.05-2017.04.05</div>
              <div class="essay-er">640ER</div>
            </div>
          </div>
        </div>
      </div>

      <div class="finished">

      </div>

    </div>


    <!--空白页-->
    <!--<div class="no-book">-->
      <!--<img src="../assets/img/no-book.png" alt="">-->
      <!--<p>暂无待完成的书籍作业</p>-->
      <!--&lt;!&ndash;<p>暂无已完成的书籍作业</p>&ndash;&gt;-->
    <!--</div>-->

  </div>
</template>

<script>
  export default {
    data () {
      return {
        bg: ''
      }
    },
    methods: {
      essay_bg () {

      }
    },
    created () {

    }
  }
</script>

<style scoped>
  .book-tab{
    width: 100%;
    height: 4.6em;
    border-bottom: 1px solid #dcdcdc;
    background: #fff;
    color: #333333;
  }
  .book-tab .index{
    color: #9bbfe8;
  }
  .book-tab div{
    text-align: center;
    margin: 0.5em 0;
    height: 2.5em;
    line-height: 2.5em;
    font-size: 1.3em;
  }
  .book-tab div:nth-of-type(1){
    border-right: 1px solid #dcdcdc;
  }

  .remind{
    width: 100%;
    height: 3.8em;
    line-height: 3.8em;
    text-align: center;
    font-size: 1.2em;
    color: #b7b7b7;
  }
  .book-img img{
    width: 100%;
    height: 100%;
  }
  .book-status img{
    width: 100%;
    height: 100%;
  }
  .right-middle div{
    float: left;
  }
  .no-book{
    width: 100%;
    height: 100%;
    background: #fff;
    margin-top: 1em;
    text-align: center;
  }
  .no-book img{
    margin-top: 12em;
    width: 12em;
    height: 13em;
  }
  .no-book p{
    margin-top: 1.2em;
    font-size: 1.3em;
    color: #b2b2b2;
    margin-bottom: 20em;
  }

  .essay{
    width: 100%;
    height: 12em;
    background: #fff;
    padding: 0.8em;
  }
  .essay-content{
    width: 100%;
    height: 100%;
    background: #926348;
    padding: 1.4em 0.8em 0.8em;
    color: #fff;
  }
  .essay-up div{
    float: left;
  }
  .essay-name{
    font-size: 1.6em;
  }
  .essay-up .essay-status{
    float: right;
    width: 3.8em;
    height: 1.2em;
    margin-top: 0.4em;
  }
  .essay-status img{
    width: 100%;
    height: 100%;
  }
  .essay-down div{
    float: left;
  }
  .essay-font{
    margin-top: 2em;
    margin-bottom: 0.6em;
  }
  .essay-down .essay-er{
    float: right;
    border:1px solid #fff;
    border-radius: 4px;
    padding:  0.04em 0.4em;
  }
</style>
