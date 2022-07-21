<script lang="tsx">
import { getPicValidateCode } from '@/api'
import { NFormItemRow, NInput } from 'naive-ui'

export default defineComponent({
  name: 'UsePictureCode',
  props: {
    value: {
      type: [String],
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const picCode = ref<string>('')
    const getPicCode = async () => {
      picCode.value = ''
      let { data } = await getPicValidateCode()
      picCode.value = data.img
    }
    onMounted(() => {
      getPicCode()
    })
    return () => (
      <NFormItemRow path="pictureCode">
        <NInput
          value={props.value}
          onInput={(ev) => emit('update:value', ev)}
          show-password-on="click"
          placeholder="图片验证码"
        />
        <img
          src={picCode.value}
          alt=""
          class={'cursor-pointer'}
          onClick={() => getPicCode()}
        />
      </NFormItemRow>
    )
  },
})
</script>

<style scoped></style>
