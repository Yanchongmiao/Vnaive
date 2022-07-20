<script lang="tsx">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { FormInst, NButton, NForm, NFormItem, NInput, NSpin } from 'naive-ui'
import Register from './register.vue'
import Phone from './phone.vue'
import Reset from './reset.vue'
import { getPicValidateCode, userNameLogin } from '@/api'
import { useProfileStore } from '@/pinia/user'
import { baseHome } from '@/config'
import { userRules } from '../src/config'
import { TargetContext } from '../src/type'
import userName from '../src/conponents/userName.vue'
export default defineComponent({
  name: 'User',
  components: {
    userName,
  },
  setup() {
    const formValue = reactive({
      userName: 'Mm1212121',
      password: 'aA121212a!',
      pictureCode: 1111,
    })
    const picCode = ref<string>('')
    const getPicCode = async () => {
      picCode.value = ''
      let { data } = await getPicValidateCode()
      picCode.value = data.img
    }
    const ElRef = ref<FormInst | null>(null)
    const model = ref<TargetContext>('user')
    const router = useRouter()
    const useStore = useProfileStore()
    const form = () => (
      <>
        <h1 class="mb-12px text-size-30px">
          <b>登录</b>
          {formValue.userName}
        </h1>
        <NForm
          ref={ElRef}
          model={formValue}
          rules={userRules}
          label-placement="left"
        >
          <userName v-model:value={formValue.userName} />1
          {/*
           <NFormItem path="userName">
            <NInput
              placeholder="请输入用户名"
              v-model:value={formValue.userName}
            />
          </NFormItem>
          */}
          <NFormItem path="password">
            <NInput
              // type="password"
              v-model:value={formValue.password}
              show-password-on="click"
              placeholder="请输入密码"
            />
          </NFormItem>
          <NFormItem path="pictureCode">
            {/*
            <NInput
              v-model:value={formValue.pictureCode}
              show-password-on="click"
              placeholder="请输入验证码"
            />
            */}
            <div class={'flex items-center w-130px justify-center'}>
              {picCode.value ? (
                <img
                  src={picCode.value}
                  alt=""
                  class={'cursor-pointer'}
                  onClick={() => getPicCode()}
                />
              ) : (
                <NSpin></NSpin>
              )}
            </div>
          </NFormItem>
        </NForm>
        <div class="flex justify-between">
          <div></div>
          <a class={'cursor-pointer'} onClick={() => (model.value = 'reset')}>
            忘记密码
          </a>
        </div>
        <br />
        <NButton
          type="info"
          class={'w-1/1 mb-10px'}
          onClick={(e: MouseEvent) => {
            e.preventDefault()
            ElRef.value?.validate(async (errors) => {
              if (!errors) {
                console.log('ok')
                try {
                  let { success, msg } = await userNameLogin(formValue)
                  if (success) {
                    console.log('登录成功')
                    useStore.token = 'xxxx----xx-x-x-x-x-x-'
                    router.push(baseHome)
                    console.log(useRouter)
                  } else {
                    console.log(msg)
                  }
                } catch (error) {
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
        <div class={'flex justify-between'}>
          <NButton class={'w-1/3'} onClick={() => (model.value = 'phone')}>
            手机号登录
          </NButton>
          <NButton class={'w-1/3'} onClick={() => (model.value = 'register')}>
            注册
          </NButton>
        </div>
      </>
    )
    onMounted(() => {
      getPicCode()
    })
    return () => (
      <>
        {(() => {
          switch (model.value) {
            case 'user':
              return form()
            case 'phone':
              return (
                <Phone onGx={(val: TargetContext) => (model.value = val)} />
              )
            case 'reset':
              return (
                <Reset onGx={(val: TargetContext) => (model.value = val)} />
              )
            case 'register':
              return (
                <Register onGx={(val: TargetContext) => (model.value = val)} />
              )
            default:
              return null
          }
        })()}
      </>
    )
  },
})
</script>
