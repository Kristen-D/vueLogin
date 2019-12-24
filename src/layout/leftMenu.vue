<template>
  <div class="menu_left cflex" :style="{width:sidebar.width+'px'}">
      <div class="menu_page_top rflex">
        <img :class='["logo",{"closeLogo":!sidebar.opened}]' :src="logo" alt="小爱admin" >
        <span class='title' v-show="sidebar.opened">{{$t('commons.xiaoai')}}<i>Admin</i></span>
      </div>
      <div class="menu_page_bottom is-scroll-left">
        <el-menu
          mode="vertical"
          theme="dark">
          <template v-for="(item,index) in permission_routers" >
              <el-menu-item class="dropItem">
                <span>{{ $t(`commons.${item.name}`)}}</span>
              </el-menu-item>
          </template>
        </el-menu>
      </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import logoImg from "@/assets/img/logo.png";
  export default {
    name: "left-Menu",
    data() {
      return {
        menuObj:{
          bgColor:'#fff',
          textColor:'#666',
          activeTextColor:'#ff6428',
        },
        logo:logoImg
      };
    },
    computed:{
      ...mapGetters([
        'permission_routers',
        'sidebar',
      ]),

    },
    created(){
    },
    mounted(){
    },
    methods: {
      getIindex(citem,item,cindex){
        return (citem.meta.titleList)?item.path+'/'+citem.path+'/'+citem.meta.titleList[0].path:item.path+'/'+citem.path;
      }
    }
  }
</script>

<style lang="less" scoped>
  @left-bgColor:#fff;  // 左侧菜单背景颜色;
  @icon-link:#FF6C60;
  .menu_left{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
  }
  .menu_page_top{
    width:100%;
    height: 60px;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    box-sizing: border-box;
    box-shadow:0px 2px 5px 0px rgba(230,224,224,0.5);
    .logo {
      height: 36px;
      width: 36px;
      vertical-align: middle;
      display: inline-block;
    }
    .closeLogo{
      width:30px;
      height:30px;
    }
    .title{
      font-size: 22px;
      i{
        color:#FF6C60;
      }
    }
  }
  .menu_page_bottom {
    width:100%;
    overflow-y: scroll;
    overflow-x: hidden;
    flex:1;
    margin-top:3px;
    z-index: 10;
    box-shadow: 0 0 10px 0 rgba(230, 224, 224, 0.5)
  }
</style>
