<template>
  <div class="about">
    {{num}}
    <ul v-if="this.$route.query.da != null">
      <li v-for="(val,index) in this.$route.query.da" :key="index">
        {{val}}
      </li>
    </ul>
  </div>
</template>

<!--页面脚本-->
<script>
  export default{
    name:'about',
    store,
    data(){
      return{
        msg:store.state.count
      };
    }
  };
</script>

<style scoped>

</style>
