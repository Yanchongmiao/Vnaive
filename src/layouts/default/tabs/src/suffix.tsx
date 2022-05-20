import { defineComponent } from 'vue'
import { Icon } from '@/components/Icon'
import { DropdownOption, NDropdown } from 'naive-ui'
import useTabs from './utils'

export const Suffix = defineComponent({
  name: 'Suffix',
  setup() {
    const { rightFun, options, refreshRoute } = useTabs()
    return () => (
      <div class={'h-1/1 flex'}>
        <div
          class="w-36px h-1/1 flex justify-center items-center"
          style={{ borderLeft: '1px solid #d9d9d9', marginTop: '-1px' }}
        >
          <Icon name={'shuaxin'} size={18} onClick={() => refreshRoute()} />
        </div>
        <div
          class="w-36px h-1/1 flex justify-center items-center"
          style={{ borderLeft: '1px solid #d9d9d9', marginTop: '-1px' }}
        >
          <NDropdown
            options={options.value}
            trigger={'click'}
            onSelect={(key: string | number, option: DropdownOption) => {
              rightFun(key, option)
            }}
          >
            <Icon
              name={'xiangyou1'}
              class={'cursor-pointer'}
              style={{ transform: 'rotateZ(90deg)' }}
            />
          </NDropdown>
        </div>
      </div>
    )
  },
})
