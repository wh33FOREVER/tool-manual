<template>
  <div class="main_container">
    <div class="title-zone">
      <van-button type="primary">主要按钮</van-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data(){
    return{

    }
  },
  components: {
    
  },
};
</script>

<style>
.title-zone{
  width: 100%;
  height: 20px;
}
.btn1{
  background-color: red;
}
@media only screen and (max-width: 500px) { 
  .btn1 {
    background-color: lightblue;
  }
}
</style>