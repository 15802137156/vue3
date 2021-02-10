<template>
  <div class="about">
    <h1>This is an about page</h1>
    <child :msg="msg" @send="send" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import child from '@/components/child'

export default defineComponent({
  name: 'About',
  props: {},
  components: {
    child
  },

  setup() {
    let route = useRoute()
    console.log(route.query)

    let msg = ref('父组件传值了了了')

    let send = (val) => {
      console.log('子组件传递：', val)
    }

    return {
      msg,
      send,
      route
    }
  }
})
</script>

<style scoped lang="scss">

</style>
