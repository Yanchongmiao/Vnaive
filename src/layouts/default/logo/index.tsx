import { SvgIcon } from '@/components/Icon'
import { themeStore } from '@/pinia/theme'
import { NGradientText } from 'naive-ui'
import { defineComponent } from 'vue'

export const Logo = defineComponent({
  name: 'Logo',
  setup() {
    const store = themeStore()
    return () =>
      store.showLogo ? (
        <div class={['h-48px', 'border-solid', 'border-green-500']}>
          <NGradientText
            gradient={{
              from: 'rgb(85, 85, 85)',
              to: 'rgb(170, 170, 170)',
            }}
          >
            logo
          </NGradientText>
          <SvgIcon name="资源1" style={{ fontSize: '40px' }} />
        </div>
      ) : (
        <div></div>
      )
  },
})
