<template>
  <header class="head-nav rflex " :style="{'width':headNavWidth+'px'}" id='header_container'>
    <div class="right-nav" ref="rightNav">
      <top-menu></top-menu>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from "vuex";
  import topMenu from './topMenu';


  export default {
    name: 'head-nav',
    components:{
      topMenu
    },
    computed:{
      ...mapGetters(['name','avatar','sidebar']),
      headNavWidth(){
        return document.body.clientWidth - this.sidebar.width
      }
    },
    created(){
    },
    mounted(){
    },
  }
</script>

<style scoped lang='less'>
  .right-nav{
    display: flex;
    flex: 1;
    width:calc(100% - 180px);
    padding-right: 15px;
    justify-content: space-between;
    box-shadow:0px 2px 5px 0px rgba(237,233,233,0.5);
  }
  .head-nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 29;
    transition: width .2s;
    justify-content: space-between;
    height: 60px;
    box-sizing: border-box;
    background: #fff;
    .logout {
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .middle{
    align-items: center;
    border:1px solid;
  }
  .userinfo-right{
    width:320px;
    padding: 0 10px;
    justify-content: space-between;
  }
  .userinfo {
    line-height: 60px;
    text-align:right;
  }
  .avatar{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  .langAvatar{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  .welcome{
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
    .name{
      line-height: 20px;
      text-align: center;
      font-size: 12px;
    }
    .avatarname{
      color:#a9d86e;
      font-weight:bolder;
      font-size: 13px;
    }
  }

  .username {
    cursor: pointer;
    margin-right: 5px;
  }
  .border{
    border:1px solid;
  }
  .notify-row{
    line-height:60px;
    flex:1;
    ul{
      display: flex;
      justify-content: space-around;
    }
  }

  ul.top-menu > li {
    position: relative;
  }
</style>
