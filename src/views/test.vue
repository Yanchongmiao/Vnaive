<script lang="tsx">
import { oldbackpermissions } from '@/api'

export default defineComponent({
  name: 'Lo',
  setup() {
    oldbackpermissions({ age: 1 }, '第一个取消')
      .then()
      .catch((r) => {
        console.log(r)
      })
    oldbackpermissions({ age: 2 }, '第二个取消')
      .then()
      .catch((r) => {
        console.log(r)
      })
    setTimeout(() => {
      oldbackpermissions({ age: 2 }, '第四个取消')
        .then()
        .catch((r) => {
          console.log(r)
        })
    }, 1000)
    setTimeout(() => {
      oldbackpermissions({ age: 3 }, '第三个取消')
        .then()
        .catch((r) => {
          console.log(r)
        })
    }, 300)
    return () => <div>1212</div>
  },
})
</script>
