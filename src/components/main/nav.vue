<template>
  <div class="nav">
    <div class="nav-inner">
      <div class="site-brand">
        <div class="site-meta">
          <div class="site-log">
            <a class="brand" href="/">
              <span class="site-title">静觅</span>
            </a>
          </div>
          <p class="site-subtitle">Quick blog</p>
        </div>
      </div>
      <nav class="site-nav">
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/">
              <span>
                <i class="icon iconfont icon-shouye"></i>首页
              </span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/archive">
              <span>
                <i class="icon iconfont icon-guidang"></i>归档
                <b>{{logs}}</b>
              </span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/tags">
              <span>
                <i class="icon iconfont icon-biaoqian"></i>标签
                <b>{{tags}}</b>
              </span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/">
              <span>
                <i class="icon iconfont icon-icon_sousuo_x"></i>搜索
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
import {getArticleList,getTagsList} from '@/api/article';
export default {
  name: 'Nav',
  data() {
    return {
      tags:0,
      logs:0
    }
  },
  created() {
    this.initNumbers();
  },
  methods:{
    initNumbers() {
      getArticleList().then(res => {
        if(res.status == 200 && res.data) {
          this.logs = res.data.length;
          this._setArticleNumbers(this.logs)
        }
      });
      getTagsList().then(res => {
        if(res.status == 200 && res.data) {
          this.tags = res.data.data.length;
          this._setTagsNumbers(this.tags)
        }
      })
    },
    ...mapMutations({
      _setArticleNumbers:'setArticleNumbers',
      _setTagsNumbers:'setTagsNumbers'
    })
  }
}
</script>

<style lang="less" scoped>
.nav {
  width: 220px;
  .nav-inner {
    width: 100%;
    background: #fff;
    box-shadow: initial;
    border-radius: initial;
    .site-meta {
      background-color: #222;
      color: #fff;
      padding: 20px 0;
      color: #fff;
      margin: 0;
      text-align: center;
      .brand {
        display: inline-block;
        padding: 0;
        background: none;
        position: relative;
        color: #fff;
        border-bottom: none;
      }
      .site-title {
        display: inline-block;
        vertical-align: top;
        line-height: 36px;
        font-size: 18px;
        font-weight: normal;
        font-family: 'Rosario', 'Monda', 'PingFang SC', 'Microsoft YaHei',
          sans-serif;
      }
      .site-subtitle {
        color: #ddd;
        margin: 10px 10px 0;
        font-weight: initial;
        font-size: 13px;
      }
    }
    .site-nav {
      .menu {
        margin-top: 20px;
        padding-left: 0;
        text-align: center;
        .menu-item {
          display: block;
          margin: 0;
          a {
            display: block;
            font-size: 16px;
            border-bottom: 1px solid transparent;
            color: #555;
            position: relative;
            box-sizing: border-box;
            padding: 5px 20px;
            text-align: left;
            line-height: inherit;
            transition-property: background-color;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0s;
            &:hover {
              background-color: #f9f9f9;
            }
            span {
              position: relative;
              padding-left: 28px;
              i {
                position: absolute;
                display: block;
                left: 0;
                top: -5px;
                width: 22px;
                height: 15px;
                font-size: 18px;
              }
              b {
                font-size:14px;
                padding: 2px 5px;
                display: inline-block;
                font-weight: normal;
                line-height: 1;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                background-color: #e7e7e7;
                border-radius: 10px;
                float: right;
                margin: 0.35em 0 0 0;
                text-shadow: 1px 1px 0px rgba(0,0,0,0.1);
              }
            }
          }
          &.active a {
            background-color: #f9f9f9;
            &::after {
              content: ' ';
              position: absolute;
              top: 50%;
              margin-top: -3px;
              right: 15px;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #bbb;
            }
            &:hover {
              background-color: #f9f9f9;
            }
          }
        }
      }
    }
  }
}
</style>
