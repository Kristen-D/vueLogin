<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container" ref="info_container">
            <el-row class="info_row row" :gutter="10">
                <el-col :span="8">
                    <div class="area">
                      <p class="title">修改信息</p>
                      <el-form class="form" :model="infoForm" :rules="infoRules" ref="infoForm" label-width="80px">
                          <el-form-item label="姓名">
                            <el-input v-model="infoForm.username"  size="mini" disabled placeholder="请输入姓名">
                            </el-input>
                          </el-form-item>
                          <el-form-item label="昵称" prop="nickname">
                            <el-input v-model="infoForm.nickname" size="mini" placeholder="请输入昵称"></el-input>
                          </el-form-item>
                          <el-form-item label="投资年限" prop="touziyear">
                            <el-select v-model="infoForm.touziyear" size="mini" placeholder="请选择投资年限" >
                              <el-option label="1年" value="1"></el-option>
                              <el-option label="2年" value="2"></el-option>
                              <el-option label="3年" value="3"></el-option>
                              <el-option label="4年" value="4"></el-option>
                              <el-option label="5年" value="5"></el-option>
                              <el-option label="6年" value="6"></el-option>
                              <el-option label="7年" value="7"></el-option>
                              <el-option label="8年" value="8"></el-option>
                              <el-option label="9年" value="9"></el-option>
                              <el-option label="10年" value="10"></el-option>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="绑定邮箱" prop="email">
                            <el-input v-model="infoForm.email" size="mini" placeholder="请输入绑定邮箱"></el-input>
                          </el-form-item>
                          <el-form-item label="绑定手机" prop="telphone">
                            <el-input v-model="infoForm.telphone" size="mini" placeholder="请输入绑定手机"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" >提交</el-button>
                            <el-button >重置</el-button>
                          </el-form-item>

                        </el-form>
                    </div>
                </el-col>

                <el-col :span="8">
                  <div class="area">
                    <div class="pwdarea">
                      <p class="title">修改密码</p>
                      <el-form class="form"  :model="pwdForm" :rules="pwdRules" ref="pwdForm" label-width="100px">
                        <el-form-item label="原密码" prop="password">
                          <el-input type="password" v-model="pwdForm.password" auto-complete="off" size="mini" placeholder="请输入原密码"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="newpassword">
                          <el-input type="password" v-model="pwdForm.newpassword" auto-complete="off" size="mini" placeholder="请输入新密码"></el-input>
                        </el-form-item>
                        <el-form-item label="确认新密码" prop="surepassword">
                          <el-input type="password" v-model="pwdForm.surepassword" auto-complete="off" size="mini" placeholder="请输入确认新密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary">提交</el-button>
                          <el-button>重置</el-button>
                        </el-form-item>
                      </el-form>
                    </div>
                  </div>
                </el-col>

                <el-col :span="8">
                  <div class="area">
                    <div class="phonearea">
                      <p class="title">手机服务</p>
                      <el-form class="form"  :model="phoneForm" :rules="phoneRules" ref="phoneForm" label-width="110px">
                        <el-form-item label="当前绑定手机" prop="phone">
                          <el-input v-model="phoneForm.phone" size="mini" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="基础短信服务" prop="baseType">
                          <el-checkbox-group v-model="phoneForm.baseType" class="phoneGroup">
                            <el-checkbox label="网站密码找回"   name="baseType"></el-checkbox>
                            <el-checkbox label="提现申请短信验证"  name="baseType"></el-checkbox>
                            <el-checkbox label="提现申请提醒"   name="baseType"></el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="可选短信服务" prop="changeType">
                          <el-checkbox-group v-model="phoneForm.changeType" class="phoneGroup">
                            <el-checkbox label="投标通知" name="changeType"></el-checkbox>
                            <el-checkbox label="满标/流标/撤销通知" name="changeType"></el-checkbox>
                            <el-checkbox label="回款通知" name="changeType"></el-checkbox>
                            <el-checkbox label="本息保障通知" name="changeType"></el-checkbox>
                            <el-checkbox label="优质标提醒通知" name="changeType"></el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>

                        <el-form-item>
                          <el-button type="primary">提交</el-button>
                          <el-button>重置</el-button>
                        </el-form-item>
                      </el-form>
                    </div>
                  </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infoForm: {
                username:'',
                nickname:'',
                touziyear:'',
                email:'',
                telphone:''
            },
            infoRules: {
                    nickname: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                        { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
                    ],
                    touziyear: [
                        { required: true, message: '请选择投资年限', trigger: 'change' }
                    ],
                    email: [
                        {required: true, rigger: 'blur'}
                    ],
                    telphone: [
                        {required: true, trigger: 'blur' },
                    ],
            },
            pwdForm:{
              password:'',
              newpassword:'',
              surepassword:''
            },
            phoneForm:{
              phone:'',
              baseType:[],
              changeType:[]
            },
        }
    }
}
</script>

<style lang="less" scoped>
    .info_container{
       padding: 20px;
       background: #fff;
       box-sizing: border-box;
       overflow: auto;
    }
     .title{
        text-align:center;
        width:100%;
        height:30px;
        line-height:30px;
        cursor: pointer;
        background-color: #3bc5ff;
        border:1px solid #3bc5ff;
        color: white;
        display: block;
    }
   .info_row{
        .area{
           border:1px solid #dfdfdf;
           height:100%;
           font-size:14px;
           padding:10px;
           .form{
               width:90%;
               margin-top:20px;
           }
        }
   }
</style>
