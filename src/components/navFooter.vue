<template>
  <div class="nav-footer">
    <div>
      已完成{{ isComplete }} / 全部{{ list.length }}
    </div>
    <div v-if="isComplete">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'navFooter',
  props: {
    list: {
      type: Array,
      detault: [],
      required: true
    }
  },
  setup(props, ctx) {

    let list = ref(props.list)

    let isComplete = computed(() => {
      let arr = list.value.filter(item => {
        return item.complete
      })
      return arr.length
    })

    let clear = () => {
      let arr = props.list.filter(item => {
        return item.complete === false
      })
      ctx.emit('clear', arr)
    }

  return {
      list,
      clear,
      isComplete
    }
  }
})
</script>

<style scoped lang="scss">
  .nav-footer {
    display: flex;
    width: 200px;
    margin: 0 auto;
  }
</style>
