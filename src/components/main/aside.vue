<template>
  <div class="aside">
    <section>
      <div class="site_author">
        <img :src="logo" alt />
        <p class="site_author_name">XuchaoPeng</p>
        <p class="site_author_dis">胡编一通，乱写一气</p>
      </div>
      <nav class="site_nav">
        <div class="site_nav_item">
          <a href="/archive" target="_blank">
            <span class="nav_item_count">--</span>
            <span class="nav_item_name">Logs</span>
          </a>
        </div>
        <div class="site_nav_item">
          <a href="/article-class" target="_blank">
            <span class="nav_item_count">--</span>
            <span class="nav_item_name">Fenl</span>
          </a>
        </div>
        <div class="site_nav_item">
          <a href="/about" target="_blank">
            <span class="nav_item_count">--</span>
            <span class="nav_item_name">About</span>
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
import logo from '@/assets/images/tt.jpg'
export default {
  name: 'Aside',
  data() {
    return {
      logo
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
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
  padding: 20px 10px;
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
}
</style>
