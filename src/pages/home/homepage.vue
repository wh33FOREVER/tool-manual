<template>
  <div class="main_container">
    <top-menu></top-menu>
      <div class="home-image" ref="homeImage">
      <p class="welcome-container">WELCOME TO FIREWORK</p>
    </div>
  </div>
</template>

<script>
import topMenu from '@/components/topMenu';
export default {
  name: "HomePage",
  data(){
    return{

    }
  },
  components: {
    topMenu
  },
  mounted(){
			// onload监听，判断图片是否加载完成
			this.$refs.homeImage.onload = function() {
        console.log('图片加载成功');
        this.imgLoading = false;
      }
  },
  methods:{

  }
};
</script>

<style scoped>
.home-image{
  width: 100%;
  height: auto;
  background-image: url('../../assets/homeImage1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 67vw;
  position: relative;
}
.welcome-container{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 300px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  color: white;
  animation: welcome-keyframe 4s forwards;
  text-align: center;
}
@keyframes welcome-keyframe {
  from{
    color: rgba(1, 1, 1, 0.2);
  }
  to{
    color: rgba(255, 255, 255, 1);
  }
}
@media only screen and (max-width: 1000px) { 
  .home-image{
    height: 100vh;
  }

  .welcome-container{
    font-size: 35px;
  }
}
</style>