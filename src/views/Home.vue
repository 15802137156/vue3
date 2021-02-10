<template>
  <div class="home">
    <div @click="clickNum1">ref：{{ num }}—{{ name }}—{{ obj.age }}</div>
    <div @click="addNum">reactive：{{ data.numB }}—{{ data.ageB }}—{{ data.objB.priceB }}</div>
    <div @click="clickNum2(100)">toRefs：{{ nameB }}—{{ ageB }}—{{ objB.priceB }}</div>
    <div>computed：{{ addMum }}</div>
    <button @click="goto">路由跳转</button>
    <div>
      <nav-header @add="add" />
      <nav-main :list="list" @del="del" />
      <nav-footer :list="list" @clear="clear" />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { defineComponent, ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import navHeader from '@/components/navHeader'
  import navMain from '@/components/navMain'
  import navFooter from '@/components/navFooter'

  export default defineComponent({
    name: 'Home',

    props: {},

    components: {
      navHeader,
      navMain,
      navFooter
    },

    // 组建创建的过程
    setup(props, ctx) {

      // 发请求，初始化数据
      onMounted(() => {
        console.log('组建挂载过程')
      })

      onUnmounted(() => {
        console.log('组建卸载')
      })

      let router = useRouter()
      let goto = () => {
        router.push({
          path: '/about',
          query: {
            name: 'jack',
            age: 20
          }
        })
      }

      let store = useStore()
      // store 必须通过computed获取
      let list = computed(() => {
        return store.state.list
      })


      let num = ref(10)

      let name = ref('Jack')

      let arr = ref(['A', 'B', 'C'])

      let obj = ref({
        age: 20
      })

      let data = reactive({
        numB: 10,
        nameB: 'Java',
        ageB: 12,
        objB: {
          priceB: 18
        }
      })

      let clickNum1 = () => {
        console.log(num.value)
      }

      let clickNum2 = (val) => {
        console.log(val, data.numB)
      }

      let addNum = () => {
        data.numB++
        data.ageB++
      }

      let addMum = computed(() => {
        return data.numB + data.ageB
      })

      let add = (val) => {
        let flag = true
        list.value.map(item => {
          if(item.title == val) {
            flag = false
            alert('任务重复')
          }
        })
        if (!flag) return
        store.commit('addTodo', {
          title: val,
          complete: false
        })
      }

      let del = (index) => {
        store.commit('delTodo', index)
      }

      let clear = (val) => {
        store.commit('clearTodo', val)
      }

      return {
        num,
        name,
        arr,
        obj,
        data,
        ...toRefs(data),
        clickNum1,
        clickNum2,
        addMum,
        addNum,
        goto,
        list,
        add,
        del,
        clear,
      }
    }

  })
</script>
<style lang="scss" scoped>

</style>