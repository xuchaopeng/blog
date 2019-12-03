<template>
  <div class="login">
    <div class="pop"></div>
    <div class="box">
      <div class="box-title">
        请登录
        <span class="box-close" @click="closeBtn">关闭</span>
      </div>
      <div class="box-content">
        <transition name="error-fade">
          <p v-if="errortext" ref="errorProm" class="error">{{errortext}}</p>
        </transition>
        <div class="con-group">
          <label for="username">用户名</label>
          <input v-model="name" type="text" name="username" placeholder="用户名" />
          <span class="tips">*</span>
        </div>
        <div class="con-group">
          <label for="password">密码</label>
          <input v-model="password" type="text" name="password" placeholder="密码" />
          <span class="tips">*</span>
        </div>
        <template v-if="isRegist">
          <div class="con-group">
            <label for="nickname">昵称</label>
            <input v-model="nickname" type="text" name="nickname" placeholder="昵称" />
            <span class="tips">*</span>
          </div>
          <div class="con-group">
            <label for="useremail">邮箱</label>
            <input
              v-model="email"
              type="text"
              id="useremail"
              name="useremail"
              placeholder="仅评论收到回复邮件提醒"
            />
          </div>
          <div class="con-group">
            <label for="userpage">个人主页</label>
            <input
              v-model="personPage"
              type="text"
              id="userpage"
              name="userpage"
              placeholder="填写个人博主，仅为了互相学习交流"
            />
          </div>
          <div class="con-group">
            <input class="btn mr40" type="button" value="注册" @click="regist" />
          </div>
        </template>
        <template v-else>
          <div class="con-group">
            <input class="btn" type="button" value="登录" @click="login" />
            <input class="btn mr40" type="button" value="去注册" @click="goRegistBtn" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
import {getLogin,getRegist} from '@/api/admin';
export default {
    props:{
        type:{
            type:String, //1登录 2注册
            required:true
        }
    },
    data() {
        return {
            name:'',
            nickname:'',
            password:'',
            email:'',
            personPage:'',
            errortext:'',
            isClose:false,
            isRegist:false
        }
    },
    created() {
        this.isRegist = this.type == 2;
    },
    mounted() {},
    methods:{
        closeBtn() {
            this.$emit('closeLogin');
        },
        login() {
            const isLegal = this.isLegal();
            if(!isLegal) return;
            getLogin({
                name:this.name,
                nickname:this.nickname,
                password:this.password
            }).then(res => {
                console.log(res,'login')
                if(res.status == 200 && res.data && res.data.status == 1) {
                    this.loginSuccess(res.data);
                } else {
                    this.prom('用户名或密码错误');
                }
            })

        },
        regist() {
            const isLegal = this.isLegal();
            if(!isLegal) return;
            getRegist({
                name:this.name,
                nickname:this.nickname,
                password:this.password,
                email:this.this,
                personPage:this.personPage,
            }).then(res => {
                console.log(res,'regist')
                if(res.status == 200 && res.data && res.data.status == 1){
                    this.isRegist = false;
                }
            })

        },
        goRegistBtn(){
            if(!this.isRegist)this.isRegist = true;
        },
        prom(txt) {
            this.errortext = txt;
            setTimeout(() => {
                this.errortext = '';
            },1500);
        },
        isLegal() {
            if(this.nickname.length > 12) {
                this.prom('用户名、昵称不能超过12个字符');
                return false;
            }
            if(this.password.length > 12) {
                this.prom('密码不能超过12个字符');
                return false;
            }
            if(!this.name || !this.password) {
                this.prom('用户名、密码不能为空');
                return false;
            }
            if(this.isRegist) {
                if(this.email.length > 30) {
                    this.prom('输入邮箱格式有误');
                    return false;
                }
                if(this.personPage.length > 100) {
                    this.prom('输入博主格式有误');
                    return false;
                }
            }
            return true;
        },
        setStorage(data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user_name', data.user_name)
            localStorage.setItem('nickName', data.nickName)
            localStorage.setItem('avatar', data.avatar)
        },
        loginSuccess(data) {
            this.closeBtn();//自动关闭登录浮层
            this._changeIsSignIn(2);//登录状态更新
            this.setStorage(data); //文件处理
        },
        ...mapMutations({
            _changeIsSignIn:'changeIsSignIn'
        })
    },
    computed:{
        ...mapGetters([
            'isSignIn'
        ])
    }

}
</script>

<style lang="less">
.login {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 10000;
    .pop {
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color: #000;
        opacity: 0.6;
        z-index:1;
    }
    .box {
        position: absolute;
        top:50%;
        left:50%;
        z-index:2;
        width:540px;
        margin-left: -145px;
        margin-top: -270px;
        background-color: #fff;
        text-align: center;
        border-radius: 5px;
        .box-title {
            font-size:15px;
            background-color: #f4f5f6;
            border-bottom:1px solid #ddd;
            position: relative;
            line-height: 40px;
            text-align: left;
            text-indent: 1rem;
            border-radius:5px 5px 0 0 ;
            .box-close {
                position: absolute;
                right:15px;
                font-size:15px;
                cursor: pointer;
            }
        }
        .box-content {
            box-sizing: border-box;
            padding:20px 15px 15px 15px;
            font-size:15px;
            position: relative;
            .ts {
                b {
                    padding-right:10px;
                }
            }
            .con-group {
                text-align: left;
                margin:15px 0;
                label {
                    display: inline-block;
                    padding-right: 10px;
                    font-weight: 700;
                    text-align: center;
                    width: 70px;
                }
                input {
                    width:66%;
                    padding: 7px 10px;
                    border-radius: 4px;
                    border: solid 1px #ccc;
                    transition: all .2s;
                    width: 66%;
                    display: inline-block;
                }
                .btn {
                    width:100px;
                    background-color:#278bee;
                    border:1px solid #278bee;
                    color:#fff;
                    margin-left:80px;
                    &.mr40 {
                        margin-left: 40px;
                    }
                }
                .tips{
                    color: red;
                    font-weight: 700;
                    margin-left: 10px;
                }
            }
        }

    }
    .error-fade-enter-active {
     transition: all 0.3s ease;
    }
    .error {
        color:#ec4b4b;
        position: absolute;
        width:100%;
        text-align: center;
        top:0;
        left:0;
    }
    .error-fade-enter,
    .error-fade-leave-to {
        transform: translateY(10px);
        opacity: 0;
    }
}
</style>
