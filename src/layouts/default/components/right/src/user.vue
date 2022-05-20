<script lang="tsx">
import { NDropdown } from 'naive-ui'
import { defineComponent } from 'vue'
import useImg from '@/assets/images/user.png'
import { UserOptions } from './config'
export default defineComponent({
  name: 'User',
  setup() {
    const title = import.meta.env.VITE_APP_TITLE
    return () => (
      <>
        <div class={'mr-14px h-1/1 flex flex-a-c cursor-pointer'}>
          <NDropdown options={UserOptions} class={'inp-out'}>
            <div class={'flex flex-j-c flex-a-c  h-1/1'}>
              <img src={useImg} class={'w-26px h-26px rounded-1/1 mr-10px'} />
              <span class={'text-light-50'}>{title}</span>
            </div>
          </NDropdown>
        </div>
      </>
    )
  },
})
</script>
