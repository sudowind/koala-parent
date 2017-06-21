<!--学生头像-->
<template>
  <div class="avatar">
    <div class="img-wrapper">
      <img src="../assets/img/student_avatar.png" alt="">
    </div>
    <div class="name">{{student.name}}</div>
  </div>
</template>
<script>
  export default {
    props: [],
    data () {
      return {
        student: {
          name: 'xxx'
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
    padding-top: 3em;
    color: #ffffff;
    position: relative;
  }
  .name {
    font-size: 1.2em;
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
