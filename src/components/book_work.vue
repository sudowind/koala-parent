<!--书籍作业-->
<template>
  <div>

    <div class="book-tab">
      <div class="col-xs-6 index">未完成</div>
      <div class="col-xs-6">已完成</div>
    </div>

    <div>
      <div class="remind">
        <div>共13本书籍作业待完成，2本已逾期，赶快督促一下吧~</div>
        <!--<div>共完成14本书籍作业~</div>-->
      </div>

      <div class="unfinished">
        <div class="book-list">
          <div class="book-left">
            <div class="book-img"><img src="../assets/logo.png" alt=""></div>
            <div class="book-er">850ER</div>
          </div>

          <div class="book-right">

            <div>

              <div class="clear right-up">
                <div class="book-name">鸭子骑车记</div>
                <div class="book-status"><img src="../assets/img/task-overdue.png" alt=""></div>
              </div>
              <div class="book-font">字数：3.4万</div>
              <div class="book-time">作业时间：2017.03.05-2017.04.05</div>
              <div class="book-time">自主发布</div>
            </div>

          </div>
        </div>
      </div>

      <div class="finished">
        <div class="book-list">

          <div class="book-left">
            <div class="book-img"><img src="../assets/logo.png" alt=""></div>
            <div class="book-er">850ER</div>
          </div>

          <div class="book-right">
            <div>
              <div class="clear right-up">
                <div class="book-name">鸭子骑车记</div>
                <div class="book-status"><img src="../assets/img/task-overdue.png" alt=""></div>
              </div>
              <div class="right-middle clear">
                <div class="author">炎月</div>
                <div class="time">2017.01.01</div>
                <div class="font">11万字</div>
              </div>
              <!--<div class="book-font">字数：3.4万</div>-->
              <!--<div class="book-time">作业时间：2017.03.05-2017.04.05</div>-->
              <!--<div class="book-time">自主发布</div>-->
              <div class="describe">11111111111111</div>
            </div>
          </div>
        </div>
      </div>

    </div>


    <!--空白页-->
    <div class="no-book">
      <img src="../assets/img/no-book.png" alt="">
      <p>暂无待完成的书籍作业</p>
      <!--<p>暂无已完成的书籍作业</p>-->
    </div>

  </div>
</template>
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
  .book-list{
    width: 100%;
    height: 15em;
    padding: 1em;
    background: #fff;
  }
  .book-left{
    float: left;
    position: relative;
    top:0;
    width: 36%;
    max-width: 10em;
  }
  .book-img{
    height: 13em;
  }
  .book-img img{
    width: 100%;
    height: 100%;
  }
  .book-er{
    position: absolute;
    bottom: 0;
    right:0;
    color: #fff;
    background: #9bbfe8;
    padding: 0.2em 0.4em;
    height: 1.7em;
  }
  .book-right{
    float: right;
    padding: 0.4em;
    width: 60%;
    height: 100%;
  }
  .right-up{
    margin-top: 1em;
  }
  .book-name{
    float: left;
    font-size: 1.4em;
    font-weight: 600;
  }
  .book-status{
    float: right;
    width: 3.8em;
    height: 1.2em;
  }
  .book-status img{
    width: 100%;
    height: 100%;
  }
  .book-font{
    font-size: 1.2em;
    margin-top: 1em;
  }
  .book-time{
    margin-top:  0.5em;
    color: #969fa9;
  }
  .right-middle{
    margin-top: 1em;
  }
  .right-middle div{
    float: left;
  }
  .author{
    color:#999999;
    margin-right: 1em;
  }
  .time{
    color: #9bbfe8;
    margin-right: 0.6em;
    border:1px solid #9bbfe8;
    border-radius: 10px;
    padding:0 0.4em;
  }
  .font{
    color: #fd9855;
    border:1px solid #fd9855;
    border-radius: 10px;
    padding:0 0.4em;
  }
  .describe{
    width: 100%;
    height: 6em;
    word-wrap: break-word;
    margin-top: 1em;
    color: #969fa9;
    letter-spacing: 1px;

    /*overflow: hidden;*/
    /*-ms-text-overflow: ellipsis;*/
    /*text-overflow: ellipsis;*/
    /*display: -webkit-box;*/
    /*-webkit-box-orient: vertical;*/
    /*-webkit-line-clamp: 3;*/
    font-size: 1.1em;
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

</style>

