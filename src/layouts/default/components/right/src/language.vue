<script lang="tsx">
import { defineComponent } from 'vue'
import { NDropdown } from 'naive-ui'
import { Icon } from '@/components/Icon'
import { themeStore } from '@/pinia/theme'
import { LangOptions } from './config'
import { useI18n } from '@/locales/useLocal'
export default defineComponent({
  name: 'Language',
  setup() {
    const store = themeStore()
    const { setLocal } = useI18n()
    return () => (
      <>
        <div class={'mr-14px h-1/1 flex flex-j-c flex-a-c cursor-pointer'}>
          <NDropdown
            trigger="click"
            v-model:value={store.language}
            options={LangOptions}
            onSelect={(k) => setLocal(k)}
          >
            <div class={'flex flex-j-c flex-a-c h-1/1'}>
              <Icon name="zhongwenyuyan" size={20} color={'#fff'} />
            </div>
          </NDropdown>
        </div>
      </>
    )
  },
})
</script>
