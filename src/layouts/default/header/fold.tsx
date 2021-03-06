import { Icon } from '@/components/Icon'
import { themeStore } from '@/pinia/theme'
import { defineComponent } from 'vue'

export const Fold = defineComponent({
  name: 'Fold',
  setup() {
    const store = themeStore()
    return () => (
      <Icon
        name={'zhedie'}
        color={'#fff'}
        size={18}
        class={'px-10px cursor-pointer'}
        onClick={() => (store.siderFold = !store.siderFold)}
        style={{
          transform: store.siderFold ? 'rotate(180deg)' : '',
        }}
      />
    )
  },
})
