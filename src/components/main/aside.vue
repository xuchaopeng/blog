<template>
  <div class="aside" ref="aside">
    <section class="aside_section" ref="asideSection">
      <div class="site_author">
        <img :src="logo" alt @click="login" />
        <p class="site_author_name">{{user.name}}</p>
        <p class="site_author_dis">{{user.nickname}}</p>
        <Login v-if="needLogin" type="1" @closeLogin="closeLogin"></Login>
      </div>
      <nav class="site_nav">
        <div class="site_nav_item">
          <router-link to="/archive">
            <span class="nav_item_count">{{logs}}</span>
            <span class="nav_item_name">日志</span>
          </router-link>
        </div>
        <div class="site_nav_item">
          <router-link to="/tags">
            <span class="nav_item_count">{{tags}}</span>
            <span class="nav_item_name">标签</span>
          </router-link>
        </div>
        <div class="site_nav_item">
          <a href="/about" target="_blank">
            <span class="nav_item_count">--</span>
            <span class="nav_item_name">关于</span>
          </a>
        </div>
      </nav>
      <div class="site_link clearfix">
        <a href="https://github.com/" target="_blank">
          <i></i>GitHub
        </a>
        <a href="https://gitee.com/xuchaopeng" target="_blank">
          <i></i>码云
        </a>
        <a href="https://www.zhihu.com/" target="_blank">
          <i></i>知乎
        </a>
        <a href="http://ueditor.baidu.com/website/onlinedemo.html" target="_blank">
          <i></i>Collect
        </a>
      </div>
    </section>
  </div>
</template>

<script>
//胡编一通，乱写一气
import logo from '@/assets/images/default_avatar.gif';
import {mapGetters,mapMutations} from 'vuex';
import Login from '@/components/login/login.vue';
import {checkUser} from '@/api/admin';
export default {
  name: 'Aside',
  data() {
    return {
      logo,
      logs:0,
      tags:0,
      needLogin:false,
      user:{
        name:'游客',
        nickname:'胡编一通'
      }
    }
  },
  created() {
    this.checkLogin();
  },
  mounted(){
    setTimeout(() => {
      this.initScroll();
    },500)
  },
  methods:{
    initScroll() {
      window.addEventListener('scroll',() => {
        const react = this.$refs.aside.getBoundingClientRect();
        if(react.top <= 0) {
          this.$refs.asideSection.classList.add('scroll_fixed')
        } else {
          this.$refs.asideSection.classList.remove('scroll_fixed')
        }
      })
    },
    checkLogin(){
      const token = localStorage.getItem('token');
      const usename = localStorage.getItem('user_name');
      if(token && usename) {
        checkUser({
          name:usename,
          token
        }).then(res => {
          if(res.status == 200) {
            const data = res.data
            this.user.nickname = data.nickName;
            this.user.name = data.name;
            this._changeIsSignIn(2);
          }
        })
      }
    },
    login() {
      if(!this.isSignIn && !this.needLogin) this.needLogin = true;
    },
    closeLogin() {
      if(this.needLogin) this.needLogin = false;
    },
    ...mapMutations({
      _changeIsSignIn:'changeIsSignIn'
    })
  },
  computed:{
    ...mapGetters([
      'tagsNumbers',
      'articleNumbers',
      'isSignIn'
    ])
  },
  watch: {
    tagsNumbers(num) {
      this.tags = num
    },
    articleNumbers(num) {
      this.logs = num
    },
    isSignIn(type) {
      if(type !== 0) this.checkLogin();
    }
  },
  components:{
    Login
  }
}
</script>

<style lang="less">
.aside {
  margin-top: 15px;
  background-color: #fff;
  box-sizing: border-box;
  width: 220px;
  height: 382px;
  color: #555;
  background: #fff;
  box-shadow: initial;
  border-radius: initial;
  position: relative;
  text-align: center;
  .site_author {
    .site_author_dis {
      margin: 0 0 25px 0;
      text-align: center;
      font-size: 14px;
      color: #999;
    }
    .site_author_name {
      margin: 0;
      text-align: center;
      color: #222;
      font-weight: 600;
    }
    img {
      display: block;
      margin: 0 auto;
      padding: 2px;
      max-width: 120px;
      height: auto;
      border: 1px solid #eee;
    }
  }
  .site_nav {
    padding-bottom: 15px;
    .site_nav_item:first-child {
      border-left: none;
    }
    .site_nav_item {
      display: inline-block;
      padding: 0 15px;
      border-left: 1px solid #eee;
      .nav_item_count {
        display: block;
        text-align: center;
        color: inherit;
        font-weight: 600;
        font-size: 14px;
      }
      .nav_item_name {
        font-size: 14px;
        color: #999;
      }
    }
  }
  .site_link {
    padding-top: 15px;
    border-top: 1px dotted #ccc;
    a {
      font-size: 15px;
      float: left;
      margin: 5px 0 0;
      width: 50%;
      &:hover {
        border-radius: 4px;
        background: #eee;
      }
    }
  }
  .aside_section {
    background-color: #fff;
    width:100%;
    padding:20px 10px;
    width: 200px;
    height: 342px;
  }
  .scroll_fixed {
    position: fixed;
    top:0;
  }
}
</style>
