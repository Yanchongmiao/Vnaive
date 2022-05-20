import { defineComponent } from 'vue'
import { themeStore } from '@/pinia/theme'
import { NLayoutHeader } from 'naive-ui'
import { Fold } from './fold'
import { FunArea } from './right'
import { Logo } from '../logo'
export const LayoutHeader = defineComponent({
  name: 'LayoutHeader',
  setup() {
    const store = themeStore()
    return () => (
      <NLayoutHeader class={[`h-${store.headerHeight}px`, 'flex', 'flex-a-c']}>
        {store.layout > 1 ? <Logo class={'w-197px'} /> : <div></div>}
        {store.foldBtnPosition === 'top' ? <Fold /> : <div></div>}
        <div class={['flex-1']}></div>
        <FunArea />
      </NLayoutHeader>
    )
  },
})
