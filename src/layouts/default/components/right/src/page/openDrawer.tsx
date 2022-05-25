import { NDivider, NDrawer, NDrawerContent, NSwitch, NButton } from 'naive-ui'
import { defineComponent, onMounted, ref } from 'vue'
import PageTheme from './PageTheme'
import PageFun from './PageFun'
import PageShow from './PageShow'
import PageAnimation from './PageAnimation'
import { themeStore } from '@/pinia/theme'
export default defineComponent({
  name: 'OpenDrawer',
  emits: ['refCallBack'],
  setup(_props, { emit }) {
    const active = ref<boolean>(false)
    const store = themeStore()
    onMounted(() => emit('refCallBack', { active }))
    return () => (
      <>
        <NDrawer v-model:show={active.value} width={'330px'}>
          <NDrawerContent
            closable={true}
            v-slots={{
              header: () => <div>项目配置</div>,
            }}
          >
            <NDivider title-placement="center">X主题</NDivider>
            <div class={'flex justify-center'}>
              <NSwitch
                size="medium"
                defaultValue={store.theme}
                onUpdateValue={(v) => (store.theme = v)}
                v-slots={{
                  icon: () => <div>🤔</div>,
                }}
              ></NSwitch>
            </div>
            {/* 导航模式 / 主题颜色 */}
            <PageTheme />
            {/* 界面功能 */}
            <PageFun />
            {/* 界面显示 */}
            <PageShow />
            {/* 动画 */}
            <PageAnimation />
            <NDivider title-placement="center"></NDivider>
            <div class={'flex flex-col'}>
              <NButton type="primary" class={'mb-10px'}>
                拷贝
              </NButton>
              <NButton type="warning" class={'mb-10px'}>
                重置
              </NButton>
              <NButton type="error" class={'mb-10px'}>
                清空并返回登录页
              </NButton>
            </div>
          </NDrawerContent>
        </NDrawer>
      </>
    )
  },
})
