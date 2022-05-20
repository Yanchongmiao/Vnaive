<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue'
import { FormInst, NButton, NForm, NFormItem, NInput } from 'naive-ui'
// import { rules } from './src/data'
// import register from './register.vue'
export default defineComponent({
  name: 'User',
  setup() {
    const formValue = reactive({
      userName: null,
      password: null,
    })
    const ElRef = ref<FormInst | null>(null)
    return () => (
      <>
        <h1 class="mb-12px text-size-30px">
          <b>登录</b>
        </h1>
        <NForm
          ref={ElRef}
          model={formValue}
          // rules={rules}
          label-placement="left"
        >
          <NFormItem path="userName">
            <NInput
              placeholder="请输入用户名"
              v-model:value={formValue.userName}
            />
          </NFormItem>
          <NFormItem path="password">
            <NInput
              type="password"
              v-model:value={formValue.password}
              show-password-on="click"
              placeholder="请输入密码"
            />
          </NFormItem>
        </NForm>
        <div class="flex justify-between">
          <router-link to="register">注册账号</router-link>
          <router-link to="reset">忘记密码</router-link>
        </div>
        <br />
        <NButton
          type="info"
          onClick={(e: MouseEvent) => {
            e.preventDefault()
            ElRef.value?.validate((errors) => {
              if (!errors) {
                console.log('ok')
                // message.success('验证成功')
              } else {
                console.log('errors')
                // message.error('验证失败')
              }
            })
          }}
        >
          登录
        </NButton>
      </>
    )
  },
})
</script>
