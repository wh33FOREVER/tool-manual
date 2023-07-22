<template>
    <header class="top-menu-container top-menu-container-background">
        <div class="menu-icon-container second-container" @click="menuClick">
            <div :class="line_1"></div>
            <div :class="line_2" ref="line_2"></div>
            <div :class="line_3" ref="line_3"></div>
        </div>
        <div class="title-container second-container">
            FIREWORK
        </div>
        <div class="menu-container second-container show-view-1000">
            <div class="menu-item" v-for="(item,index) in menu_list" :key="index">
                <p>{{ item }}</p>
                <!-- <div class="icon-down-out">
                    <div class="icon-down-in"></div>
                </div> -->
                <img src="../assets/down.png" class="down-img"/>
            </div>
        </div>
        <div class="icon-container second-container show-view-1000">

        </div>
    </header>
  </template>
  
  <script>
  
  export default {
    name: "TopMenu",
    data(){
      return{
        menu_open:false,
        line_1:{
            'line':true,
            'line-1':true
        },
        line_2:{
            'line':true,
            'line-2':true
        },
        line_3:{
            'line':true,
            'line-3':true
        }
        ,menu_list:['Home','Pages','About','Donate']
      }
    },
    components: {
      
    },
    methods:{
        menuClick:function(){
            this.menu_open=!this.menu_open;
            if(this.menu_open){
                this.line_1={
                    'line':true,
                    'line-1':true,
                    'line-open-1':true
                },
                this.line_2={
                    'line':true,
                    'line-2':true,
                    'line-open-2':true
                },
                this.line_3={
                    'line':true,
                    'line-3':true,
                    'line-open-3':true
                }
            }
            else{
                this.line_1={
                    'line':true,
                    'line-1':true,
                    'line-close-1':true
                },
                this.line_2={
                    'line':true,
                    'line-2':true,
                    'line-close-2':true
                },
                this.line_3={
                    'line':true,
                    'line-3':true,
                    'line-close-3':true
                }
            }
        }
    }
  };
  </script>
  
  <style scoped>

  .show-view-1000{
    display: block;
  }
  .top-menu-container{
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    z-index: 100;
  }

  .top-menu-container-background{
    background-color:rgba(0,0, 0, 0);
  }

  .title-container{
    left: 60px;
    height: 100%;
    font-size: 20px;
    line-height: 80px;
  }

  .menu-container{
    position: absolute;
    width: 620px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    right: 140px;
    align-items: center;
  }

  .icon-container{
    width: 80px;
    height: 100%;
    right: 60px;
  }
  .menu-item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second-container{
    position: absolute;
    background-color:rgba(0,0, 0, 0);
  }

  .menu-icon-container{
        display: none;
  }

  .line{
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: rgba(1,1, 1, 0.8);
    border-radius: 2px;
  }

  .line-1{
    top: 10px;

  }

  .line-2{
    top: 19px;
  }

  .line-3{
    bottom: 10px;
  }

  .line-open-1{
        animation-name: line-open-1-animation;
        animation-duration: 0.3s;
        animation-fill-mode:both;
    }
    .line-open-2{
        animation-name: line-open-2-animation;
        animation-duration: 0.3s;
        animation-fill-mode:both;
    }
    .line-open-3{
        animation-name: line-open-3-animation;
        animation-duration: 0.3s;
        animation-fill-mode:both;
    }
    @keyframes line-open-1-animation {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(9px);
        }
    }
    @keyframes line-open-2-animation {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(90deg);
        }
    }
    @keyframes line-open-3-animation {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(-9px);
        }
    }
    .line-close-1{
        animation-name: line-close-1-animation;
        animation-duration: 0.3s;
        animation-fill-mode:both;
    }
    .line-close-2{
        animation-name: line-close-2-animation;
        animation-duration: 0.3s;
        animation-fill-mode:both;
    }
    .line-close-3{
        animation-name: line-close-3-animation;
        animation-duration: 0.3s;
        animation-fill-mode:both;
    }
    @keyframes line-close-1-animation {
        from{
            transform: translateY(9px);
        }
        to{
            transform: translateY(0);
        }
    }
    @keyframes line-close-2-animation {
        from{
            transform: rotate(90deg);
        }
        to{
            transform: rotate(0deg);
        }
    }
    @keyframes line-close-3-animation {
        from{
            transform: translateY(-9px);
        }
        to{
            transform: translateY(0);
        }
    }

    .icon-down-out{
        position: relative;
        top:2px;
        left:5px;
        border-top: solid 6px;
        border-left: solid 6px white;
        border-right: solid 6px white;
    }
    .icon-down-in{
        position: absolute;
        top:-6px;
        left: 50%;
        transform: translateX(-50%);
        border-top: solid 5px white;
        border-left: solid 5px rgba(0, 0, 0, 0);
        border-right: solid 5px rgba(0, 0, 0, 0);
    }
    .down-img{
        width: 20px;
    }
  @media only screen and (max-width: 1000px) { 
    .top-menu-container {
        width: 100%;
        height: 100px;
    }
    .top-menu-container-background{
        background-color:white;
    }

    .show-view-1000{
        display: none;
    }

    .title-container{
        font-size: 25px;
        line-height: 100px;
        left: 50%;
        transform: translateX(-50%);
    }

    .menu-icon-container{
        display: block;
        width: 30px;
        left: 60px;
        top:30px;
        height: 40px;
    }
  }
  </style>