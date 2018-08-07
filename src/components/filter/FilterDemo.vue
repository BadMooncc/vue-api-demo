<template>
  <div>
    <h2>vue过滤器:</h2>
    <!-- 局部过滤器 -->
    <p><b>{{ 1533527037000 | formatDate }}</b></p>
    <!-- 全局过滤器 -->
    <p><b>{{ 1533527037000 | formatTime }}</b></p>
  </div>
</template>
<script>
  export default {
    name: 'FilterDemo',
    /* 局部过滤器 */
    filters: {
      /* 格式化时间戳 */
      formatDate (val) {
        const date = new Date(val);
        const year = date.getFullYear();
        const month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
        const day = date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
        return `${year}-${month}-${day}`;
        console.log(val);
      }
    },
    data () {
      return {

      }
    }
    
  }
</script>
