<!--学生头像-->
<template>
  <div class="avatar">
    <div class="img-wrapper">
      <img src="../assets/img/student_avatar.png" alt="">
    </div>
    <div class="name">{{student.name}}</div>
    <div>{{student.schoolName}}&nbsp;&nbsp;&nbsp;&nbsp;{{student.className}}</div>
    <div>{{student.className}}</div>
    <div class="go-detail"></div>
  </div>
</template>
<script>
  export default {
    props: [],
    data () {
      return {
        student: {
          name: 'xxx',
          schoolName: 'xx小学',
          className: 'xx级x班',
          teacherName: 'xx老师'
        }
      }
    },
    created: function () {
      this.student.name = '123'
    }
  }
</script>
<style>
  .avatar {
    text-align: center;
    height: 13em;
    padding-top: 2em;
    color: #ffffff;
    position: relative;
  }
  .name {
    font-size: 1.2em;
  }
  .go-detail {
    position: absolute;
  }
  .img-wrapper {
    border-radius: 50%;
    overflow: hidden;
    width: 5em;
    height: 5em;
    margin: auto;
    border: 2px solid #ffffff;
  }
  .img-wrapper img {
    width: 100%;
    height: 100%;
  }
</style>
