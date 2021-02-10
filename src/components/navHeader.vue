<template>
  <div>
    <input
      v-model="input"
      placeholder="请输入任务名称"
      @keydown.enter="enter"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'navHeader',
  props: {},

  setup(props, ctx) {
    let input = ref('')

    let enter = () => {
      ctx.emit('add', input.value)
      input.value = ''
    }

    return {
      input,
      enter
    }
  }
})
</script>

<style scoped lang="scss">

</style>
