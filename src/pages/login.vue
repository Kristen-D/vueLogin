<template>
 <div class="login-box">
    <div class="form">
      <p class="title-text">欢迎来到Control系统！</p>
      <el-form
        :label-position="labelPosition"
        status-icon
        :rules="rules"
        ref="formLabelAlign"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="formLabelAlign.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="formLabelAlign.password"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" class="login-btn" @click="submitForm('formLabelAlign')">登录</el-button>
          <el-button type="primary" class="login-btn" @click="resetForm('formLabelAlign')">立即重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        password: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
         if (valid) {
           this.$router.push("/index");
         }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
