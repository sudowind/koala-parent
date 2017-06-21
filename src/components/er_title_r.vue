<!--学生头像-->
<template>
  <div class="er_test_title">
    <div class="circle"></div>
    <div class="time">{{time}}</div>
    <div class="marks">{{marks}}</div>
    <div class="detail">查看报告</div>
  </div>
</template>

<script>
  export default {
    props: [],
    data () {
      return {
        time: '05月',
        marks: 'XXXER',
        url: '/'
      }
    },
    created: function () {
    }
  }
</script>
<style scoped>
  .er_test_title {
    padding-top: 2em;
    position: relative;
    height: 4em;
    text-align: left;
  }
  .circle {
    margin-left: -0.75em;
    height: 1.5em;
    width: 1.5em;
    border: 1px solid #79afec;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    background-color: white;
  }
  .time {
    margin-left: 2rem;

    position: absolute;
    left: 50%;
    width: 5rem;

  }
  .marks {
    margin-left: 2rem;

    position: absolute;
    left: 50%;
    margin-top: 1.3em;
    font-size: 1.2em;
    font-weight: 400;
    width: 5rem;

  }
  .detail {
    margin-left: 7rem;

    position: absolute;
    left: 50%;
    font-size: 1.2em;
    margin-top: 1.3em;
    color: #79afec;
    border: 0.1em solid #79afec;
    padding: 0 0.1em;
    border-radius: 10%;
  }
</style>
