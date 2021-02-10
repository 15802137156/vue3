<template>
  <div>
    父组件传参：{{ msg }}
    <div @click="send">子组件</div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'child',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },

  setup(props, ctx) {
    let msg = ref(props.msg)

    let childMsg = ref('子组件数据')

    let send = () => {
      // emit 第二个参数可以是数组，对象，只有2个参数
      ctx.emit('send', childMsg.value)
    }

    return {
      msg,
      send
    }
  }
})
</script>

<style scoped lang="scss">

</style>
