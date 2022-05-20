<script lang="tsx">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Redirect',
  setup() {
    const router = useRouter()
    setTimeout(() => {
      router.go(-1)
    }, 300)
    return () => <div>刷新中</div>
  },
})
</script>
