<template>
  <div class="nav">
    <div class="nav-inner">
      <div class="site-brand">
        <div class="site-meta">
          <div class="site-log">
            <a class="brand" href="/">
              <span class="site-title">慢下来，用心去看</span>
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
                <i class="icon iconfont icon-liuliangyunpingtaitubiao02"></i>首页
              </span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/archive">
              <span>
                <i class="icon iconfont icon-guidang"></i>归档
              </span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/tags">
              <span>
                <i class="icon iconfont icon-biaoqian"></i>标签
              </span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/">
              <span>
                <i class="icon iconfont icon-sousuo"></i>搜索
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
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
