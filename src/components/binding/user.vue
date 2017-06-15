<template>
  <div class="binding-user-container">
    <Form :model="form" label-position="top">
      <Form-item label="请输入孩子的考拉账号和姓名">
        <Input v-model="form.account" placeholder="孩子考拉账号"></Input>
      </Form-item>
      <Form-item>
        <Input v-model="form.name" placeholder="孩子姓名"></Input>
      </Form-item>
      <Form-item>
        <Input v-model="form.parent" placeholder="您是孩子的..."></Input>
      </Form-item>

      <Form-item>
        <Button type="primary" long @click="handleSubmit()">下一步</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          account: '',
          name: '',
          parent: ''
        }
      }
    },
    created () {
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$parent.currentStep = 0
      })
    },
    methods: {
      handleSubmit () {
        const id = this.form.account.substr(1)
        const name = this.form.name

        this.axios.get(`/users/web/user/${id}/verifyName?name=${name}`)
          .then(resp => {
            if (resp.data) {
              this.$router.push({
                name: 'binding-tel',
                params: {
                  userId: id
                }
              })
            } else {
              // TODO
            }
          })
      }
    }
  }
</script>
<style>
  body {
    background-color: #fbf9fe;
  }
  a {
    color: #000;
  }
  .binding-user-container {
    margin-top: 30px;
  }
</style>
