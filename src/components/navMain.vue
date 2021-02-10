<template>
  <div class="nav-main">
    <div v-for="(item, index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complete" />
     <div class="title"> {{ item.title }}</div>
      <button class="delete" @click="del(item, index)">删除</button>
    </div>
  </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'navMain',

  props: {
    list: {
      type: Array,
      detault: [],
      required: true
    }
  },

  emits: ['del'],

  setup(props, ctx) {

    let list = ref(props.list)

    let del = (item, index) => {
      ctx.emit('del', index)
    }

    return {
      list,
      del,
    }
  }
})
</script>

<style scoped lang="scss">
  .delete {
    display: none;
  }
  .item {
    display: flex;
    align-items: center;
    height: 35px;
    cursor: pointer;
    &:hover {
      background: #ccc;
      .delete {
        display: block;
      }
    }
    .title {
      margin: 0 20px;
    }
  }
  .nav-main {
    width: 150px;
    margin: 10px auto;
  }
</style>