<script lang="tsx">
import login2Img from '@/assets/images/login2Img.png'
import logo from '@/assets/images/title.png'
export default defineComponent({
  name: 'Login2',
  setup() {
    console.log(1212)
    return () => (
      <div class="loginBox w-1/1 h-1/1 flex">
        <div
          class="leftBox w-2/3 bg-blue-400 flex items-center justify-center"
          style={{ backgroundColor: '#4393fa' }}
        >
          <div class="absolute left-0 top-0 h-76px max-w-1/1 w-800px titBox mt-100px pl-20 box-border flex items-center">
            <img src={logo} alt="" class="h-40px" />
          </div>
          <img src={login2Img} alt="" />
        </div>
        <div class="loginInfoBox w-1/3 flex items-center justify-center relative overflow-hidden">
          <div
            class="edition absolute top-3 -right-25px px-30px py-4px  text-cool-gray-50 transform rotate-45 select-none"
            style={{ backgroundColor: '#fec12f' }}
          >
            V 1.0.0
          </div>
          <div class="contentBox">11</div>
        </div>
      </div>
    )
  },
})
</script>
<style lang="less" scoped>
.titBox {
  background: linear-gradient(
    270deg,
    rgba(67, 147, 250, 0.5),
    rgba(133, 182, 252, 0.5)
  );
}
</style>
