<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue'
import { FormInst, NButton, NForm, NFormItem, NInput } from 'naive-ui'
import { PhoneRules } from './src/data'
import { useGetCode } from './src/getCode'
import { userPhoneLogin } from '@/api'
export default defineComponent({
  name: 'Phone',
  emits: ['gx'],
  setup(props, { emit }) {
    const formValue = reactive({
      phone: null,
      smsCode: null,
    })
    const ElRef = ref<FormInst | null>(null)
    const { isGetPhone, getPhoneCode, codeTest } = useGetCode(10)
    return () => (
      <>
        <h1 class="mb-12px text-size-30px">
          <b>手机号登录</b>
        </h1>
        <NForm
          ref={ElRef}
          model={formValue}
          rules={PhoneRules}
          label-placement="left"
        >
          <NFormItem path="phone">
            <NInput
              placeholder="请输入手机号"
              v-model:value={formValue.phone}
            />
          </NFormItem>
          <NFormItem path="smsCode">
            <NInput
              v-model:value={formValue.smsCode}
              placeholder="请输入验证码"
            />
            <NButton disabled={isGetPhone.value} onClick={getPhoneCode}>
              {codeTest.value}
            </NButton>
          </NFormItem>
        </NForm>
        <NButton
          class="w-1/1"
          type="info"
          onClick={(e: MouseEvent) => {
            e.preventDefault()
            ElRef.value?.validate(async (errors) => {
              if (!errors) {
                console.log('ok')
                try {
                  let { success, msg } = await userPhoneLogin(formValue)
                  if (success) {
                    console.log('登录成功')
                  } else {
                    console.log(msg)
                  }
                } catch {
                  //
                }
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
        <NButton
          class="mt-10px w-1/1"
          onClick={() => {
            emit('gx', 'user')
          }}
        >
          返回
        </NButton>
      </>
    )
  },
})
</script>
