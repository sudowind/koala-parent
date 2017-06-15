<template>
  <div class="binding-tel-container">
    <Form :model="form" label-position="top">
      <Form-item label="请在下方输入孩子账号绑定的手机号码及验证码">
        <Input v-model="form.tel" placeholder="手机号"></Input>
      </Form-item>
      <Form-item>
        <Row>
          <Col span="16">
          <Input v-model="form.code" placeholder="验证码"></Input>
          </Col>
          <Col span="6" offset="1">
          <Button type="primary" @click="sendTelCode(form.tel)">获取验证码</Button>
          </Col>
        </Row>
      </Form-item>

      <Form-item>
        <Button type="primary" long @click="handleSubmit()">绑定</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          tel: '',
          code: ''
        },
        userId: null,
        authId: null
      }
    },
    created () {
    },
    beforeRouteEnter (to, from, next) {
      if (to.params && to.params['userId']) {
        next(vm => {
          vm.userId = to.params['userId']
          vm.$parent.currentStep = 1
        })
      } else {
        next('/binding/user')
      }
    },
    methods: {
      sendTelCode (tel) {
        const userId = this.userId
        this.axios.post(`/users/wechat/bindTelAuthCode?tel=${tel}&userId=${userId}`)
          .then(resp => {
            if (resp.data) {
              this.authId = resp.data
            } else {
              // TODO
            }
          })
      },
      handleSubmit () {
        const tel = this.form.tel
        const code = this.form.code
        const openId = this.$store.state.openId

        this.axios.post(`/users/wechat/bindTel?tel=${tel}&authId=${this.authId}&authCode=${code}&userId=${this.userId}&openId=${openId}`)
          .then(resp => {
            if (resp.data) {
              this.$router.push({
                name: 'binding-result'
              })
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

  .binding-tel-container {
    margin-top: 30px;
  }
</style>
