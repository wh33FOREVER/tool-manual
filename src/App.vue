<template>
  <div ref="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components: {
    
  },
  mounted(){
    console.log(this.$refs.app.offsetWidth);
  }
}
</script>

<style scoped>
</style>
