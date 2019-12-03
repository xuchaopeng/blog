<template>
  <article class="articleDetail">
    <h2 class="title">{{title}}</h2>
    <div class="meta">
      <span class="icon iconfont icon-shijian"></span>
      <span class="pl5">发表于</span>
      <time class="time ml5">{{date}}</time>
      <span class="ml5 mr5">|</span>
      <span class="icon iconfont icon-yuedu"></span>
      <span class="pl5">阅读次数 : {{read}}</span>
    </div>
    <div class="content">
      <mavon-editor
        v-model="content"
        default_open="preview"
        defaultOpen="preview"
        :toolbarsFlag="false"
        :subfield="false"
      ></mavon-editor>
    </div>
    <div class="comment">
      <div class="cmt-box">
        <div class="avatar" @click="login">
          <a>
            <img :src="avatar" alt />
          </a>
          <span class="nickname">{{user.name}}</span>
          <Login v-if="needLogin" type="1" @closeLogin="closeLogin"></Login>
        </div>
        <div class="wrapper">
          <textarea v-model="submitTxt" placeholder="来都来了，那就说点什么吧!"></textarea>
          <div class="bar">
            <a class="post-button" @click="replycom">发表</a>
            <span class="tisp">发表评论前请先登录</span>
          </div>
        </div>
      </div>
      <div class="cmt-top">
        <span>
          <b>{{comments.length}}</b>条评论
        </span>
      </div>
      <div class="cmt-con">
        <ul>
          <li class="cmt-comment" v-for="item in comments">
            <div class="cmt-item">
              <div class="cmt-avatar">
                <a>
                  <img :src="avatar" alt />
                </a>
              </div>
              <div class="cmt-body">
                <div class="cmt-header">
                  <a>{{item.from_uid}}</a>
                </div>
                <p>{{item.content}}</p>
                <div class="cmt-footer">
                  <span class="times">{{item.date}}</span>
                  <a @click="getReply">
                    <span class="cmt-reply iconfont icon-icon_reply"></span>
                    回复
                  </a>
                  <a @click="getZan">
                    <span class="cmt-like iconfont icon-xihuan"></span>
                    顶（{{item.zan || 0}}）
                  </a>
                </div>
              </div>
            </div>
          </li>
          <!-- <li class="cmt-comment">
            <div class="cmt-item">
              <div class="cmt-avatar">
                <a href="/">
                  <img :src="avatar" alt />
                </a>
              </div>
              <div class="cmt-body">
                <div class="cmt-header">
                  <a>上海网友</a>
                </div>
                <p>哈哈</p>
                <div class="cmt-footer">
                  <span class="times">12月1日</span>
                  <a href="/">
                    <span class="cmt-reply iconfont icon-icon_reply"></span>
                    回复
                  </a>
                  <a href="/">
                    <span class="cmt-like iconfont icon-xihuan"></span>顶（1）
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="cmt-comment">
            <div class="cmt-item">
              <div class="cmt-avatar">
                <a href="/">
                  <img :src="avatar" alt />
                </a>
              </div>
              <div class="cmt-body">
                <div class="cmt-header">
                  <a>上海网友</a>
                </div>
                <p>哈哈</p>
                <div class="cmt-footer">
                  <span class="times">12月1日</span>
                  <a href="/">
                    <span class="cmt-reply iconfont icon-icon_reply"></span>
                    回复
                  </a>
                  <a href="/">
                    <span class="cmt-like iconfont icon-xihuan"></span>顶（1）
                  </a>
                </div>
              </div>
            </div>
            <ul class="cmt-children">
              <li class="cmt-comment">
                <div class="cmt-item">
                  <div class="cmt-avatar">
                    <a href="/">
                      <img :src="avatar" alt />
                    </a>
                  </div>
                  <div class="cmt-body">
                    <div class="cmt-header">
                      <a>上海网友</a>
                    </div>
                    <p>哈哈</p>
                    <div class="cmt-footer">
                      <span class="times">12月1日</span>
                      <a href="/">
                        <span class="cmt-reply iconfont icon-icon_reply"></span>
                        回复
                      </a>
                      <a href="/">
                        <span class="cmt-like iconfont icon-xihuan"></span>顶（1）
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <li class="cmt-comment">
            <div class="cmt-item">
              <div class="cmt-avatar">
                <a href="/">
                  <img :src="avatar" alt />
                </a>
              </div>
              <div class="cmt-body">
                <div class="cmt-header">
                  <a>上海网友</a>
                </div>
                <p>哈哈</p>
                <div class="cmt-footer">
                  <span class="times">12月1日</span>
                  <a href="/">
                    <span class="cmt-reply iconfont icon-icon_reply"></span>
                    回复
                  </a>
                  <a href="/">
                    <span class="cmt-like iconfont icon-xihuan"></span>顶（1）
                  </a>
                </div>
              </div>
            </div>
            <ul class="cmt-children">
              <li class="cmt-comment">
                <div class="cmt-item">
                  <div class="cmt-avatar">
                    <a href="/">
                      <img :src="avatar" alt />
                    </a>
                  </div>
                  <div class="cmt-body">
                    <div class="cmt-header">
                      <a>上海网友</a>
                    </div>
                    <p>哈哈</p>
                    <div class="cmt-footer">
                      <span class="times">12月1日</span>
                      <a href="/">
                        <span class="cmt-reply iconfont icon-icon_reply"></span>
                        回复
                      </a>
                      <a href="/">
                        <span class="cmt-like iconfont icon-xihuan"></span>顶（1）
                      </a>
                    </div>
                  </div>
                </div>
                <ul class="cmt-children">
                  <li class="cmt-comment">
                    <div class="cmt-item">
                      <div class="cmt-avatar">
                        <a href="/">
                          <img :src="avatar" alt />
                        </a>
                      </div>
                      <div class="cmt-body">
                        <div class="cmt-header">
                          <a>上海网友</a>
                        </div>
                        <p>哈哈</p>
                        <div class="cmt-footer">
                          <span class="times">12月1日</span>
                          <a href="/">
                            <span class="cmt-reply iconfont icon-icon_reply"></span>
                            回复
                          </a>
                          <a href="/">
                            <span class="cmt-like iconfont icon-xihuan"></span>顶（1）
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>-->
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
import avatar from '@/assets/images/default_avatar.gif';
import Login from '@/components/login/login.vue';
import {mapGetters,mapMutations} from 'vuex';
import {getArticleDetail} from  '@/api/article';
import {newcomment,replycomment} from '@/api/comment';
import {checkUser} from '@/api/admin';
import {getDate,Guid} from '@/api/utils'
export default {
    data() {
        return {
            articleId:'',
            title:'',
            date:'',
            read:0,
            content:'',
            needLogin:false,
            comments:[],
            submitTxt:'',
            avatar,
            user:{
              name:'游客',
              nickname:'胡编一通',
              type:2
            }
        }
    },
    created() {
        this.articleId = this.$route.params.id;
        this.getArticleData();
        this.checkLogin();
    },
    methods:{
      getArticleData() {
        getArticleDetail(this.articleId).then(res => {
          if(res.status == 200 ) {
            const article = res.data;
            this.date = article.date;
            this.read = article.read;
            this.title = article.title;
            this.content = article.content;
            this.comments = article.comments.reverse();
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
              this.user.type = data.type;
              this._changeIsSignIn(2);
            }
          })
        }
      },
      closeLogin() {
        if(this.needLogin) this.needLogin = false;
      },
      login() {
        if(!this.isSignIn && !this.needLogin) this.needLogin = true;
      },
      replycom(){
        //优先检测是否登录
        if(!this.isSignIn && !this.needLogin)  {
          this.needLogin = true;
          return;
        }
        //简单检测是否存在评论内容
        if(!this.submitTxt) return;
        //发起评论
        newcomment({
          _id:this.articleId,
          id:Guid(),
          from_uid:this.user.name,
          from_uname:this.user.nickname,
          avatar:'null',
          content:this.submitTxt,
          date:getDate()
        }).then(res => {
          if(res.status == 200 && res.data && res.data.status == 1) {
            //评论发表成功

          }

        })
      },
      getReply(){
        //回复评论
      },
      getZan(){
        //点赞
      },
      ...mapMutations({
        _changeIsSignIn:'changeIsSignIn'
      })
    },
    computed:{
      ...mapGetters([
        'isSignIn'
      ])
    },
    watch:{
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
  .articleDetail {
    .title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      text-align: center;
      font-weight: 400;
      font-size:20px;
    }
    .meta {
        margin: 3px 0 60px 0;
        color: #999;
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 12px;
        text-align: center;
        margin-bottom:15px;
        span {
          font-size:12px;
        }
        .iconfont {
          font-size:16px;
          position: relative;
          top:2px;
          color:#4db3ff;
        }
        .time {
          border-bottom:1px dashed #999;
        }
    }
    .pl5 {
      padding-left:5px;
    }
    .ml5 {
      margin-left:5px;
    }
    .mr5 {
      margin-right: 5px;
    }
    .v-note-wrapper{
      &.shadow  {
        box-shadow:none !important;
        background-color: #fff;
      }
      .v-show-content {
        background-color: #fff !important;
        color: #555;
      }
    }
    .comment {
      .cmt-box {
        overflow: hidden;
        width:100%;
        .avatar {
          float:left;
          margin-right:20px;
          width: 58px;
          text-align: center;
          img {
            width:58px;
            height:58px;
            padding: 2px;
            border: 1px solid #eee;
          }
          span {
            margin-top:6px;
            text-align: center;
            color:#969696;
          }
        }
        .wrapper {
          width: 810px;
          float: right;
          border-bottom: none;
          textarea {
            display: block;
            box-shadow: none;
            -webkit-appearance: none;
            overflow: auto;
            padding: 10px;
            height: 75px;
            margin: 0;
            resize: none;
            color: #999;
            width: 100%;
            box-sizing:border-box;
            border: solid 1px #ccc;
            outline: 0;
            -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            font-size: 13px;
            color: #aaa;
          }
          .bar {
            position: relative;
            border: solid 1px #ccc;
            border-top: none;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            height: 33px;
            line-height: 33px;
            .post-button {
              float: right;
              height: 32px;
              width: 100px;
              text-align: center;
              text-shadow: 0 1px 0 #fff;
              color: #555;
              font-size: 14px;
              font-weight: 700;
              border-left: 1px solid #ccc;
              border-bottom-right-radius: 3px;
              background-color: #e6e6e6;
              background-repeat: no-repeat;
              cursor: pointer;
            }
            .tisp {
              float: right;
              margin-right: 10px;
              color: #999;
            }
          }
        }
      }
      .cmt-top {
        margin: 10px 0 4px 0;
        padding: 8px 0;
        span {
          border: 1px solid #ccc;
          background-color: rgba(0,0,0,.04);
          text-shadow: 0 1px 0 #fff;
          padding: 3px 5px;
          b {
            color:#ec4b4b;
            font-weight: normal;
          }
        }
      }
      .cmt-con {
        ul {
          border-bottom: 1px solid rgba(0,0,0,.13);
        }
        .cmt-comment {
          border-top: 1px solid rgba(0,0,0,.13);
          margin: 0;
          padding: 0;
          list-style: none;

        }
        .cmt-item{
          padding: 10px;
          border-top: 1px solid rgba(255,255,255,.7);
          box-sizing: border-box;
          .cmt-avatar {
            position: relative;
            float: left;
            img {
              width: 58px;
              height: 58px;
              -webkit-transition: .8s;
              transition: .8s;
              padding: 3px;
              border: 1px solid #ddd;
              background: #fff;
              box-shadow: 0 1px 3px rgba(0,0,0,.22);
              border-radius: 3px;
              box-sizing: border-box;
            }
          }
          .cmt-body {
            padding-left: 70px;
            .cmt-header {
              padding-top: 1px;
              a {
                color:#ec4b4b;
              }
            }
            p {
              font-size: 13px;
              line-height: 1.5em;
              margin: .5em 0;
              word-wrap: break-word;
              text-indent: 0;
              clear: none;
            }
            .cmt-footer {
              line-height: 18px;
              .times {
                font-size: 12px;
                margin-right: 8px;
                color: #999;
              }
              a {
                  margin: 0 6px 0 0;
                  padding: 0 6px 0 0;
                  font-size: 12px;
                  color: #999;
              }
              .cmt-reply {
                  width: 18px;
                  height: 13px;
                  margin-right: 2px;
              }

            }
          }
        }
        .cmt-children {
          margin-left: 38px;
          padding: 0;
          border-bottom:none;
        }
      }
    }
  }
</style>
