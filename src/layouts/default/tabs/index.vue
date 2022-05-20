<script lang="tsx">
import { NTabPane, NTabs } from 'naive-ui'
import { defineComponent } from 'vue'
import { Suffix } from './src/suffix'
import { Icon } from '@/components/Icon'
import { useRouter } from 'vue-router'
import useTabs from './src/utils'
import { routeStore } from '@/pinia/modules/routeStore'
// import { closeTabs } from './src/utils'
export default defineComponent({
  name: 'Tabs',
  setup() {
    const store = routeStore()
    const router = useRouter()
    const { closeTabs } = useTabs()
    return () => (
      <div class={'h-30px bg-light-100 relative py-4px'}>
        <div
          class={'absolute'}
          style={{
            width: ' calc(100% - (8px / 2))',
          }}
        >
          <NTabs
            value={store.selectMenu}
            type={'card'}
            v-slots={{
              suffix: () => <Suffix />,
            }}
          >
            {store.tabs.map((item) => {
              return (
                <NTabPane
                  key={item.name}
                  name={item.name}
                  v-slots={{
                    tab: () => (
                      <div onClick={() => router.push(item.path)}>
                        <span>{item.title}</span>
                        {item.isClose ? (
                          <Icon
                            name={'guanbi'}
                            size={14}
                            class="ml-10px mt-0px"
                            onClick={(e: Event | undefined) => {
                              closeTabs(item)
                              let ev: any = e || window.event
                              ev.stopPropagation()
                            }}
                          />
                        ) : (
                          <template></template>
                        )}
                      </div>
                    ),
                  }}
                ></NTabPane>
              )
            })}
          </NTabs>
        </div>
      </div>
    )
  },
})
</script>
<style lang="less" scoped>
@prefixCls: ~'@{prefix}';
::v-deep(.@{prefixCls}-tabs) {
  overflow: hidden;
  height: 30px;
  &-tab-wrapper {
    min-width: 60px;
    height: 28px !important;
    margin-right: 10px;
  }
  &-nav-scroll-wrapper {
    padding: 2px 0 !important;
  }
  &-tab {
    padding: 0;
    border: none !important;
    border-radius: 0px !important;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center !important;
    border: 1px solid #d9d9d9 !important;
    border-radius: 2px 2px 0 0 !important;
    &-pad {
      display: none !important;
    }
    &__label {
      width: 100%;
      display: inline-block !important;
      padding: 0 18px;
      div {
        display: flex !important;
        justify-content: center !important;
        align-items: center;

        svg {
          position: absolute;
          right: 4px;
          opacity: 0;
          &:hover {
            font-size: 16px;
          }
        }
      }
    }
    &:hover {
      svg {
        opacity: 1;
      }
    }
  }
  &-tab--active {
    color: #fff !important;
    background-color: #0960bd !important;
  }
}
</style>
