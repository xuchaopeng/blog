<template>
  <div class="tag">
    <h2>tag</h2>
    <p class="cloud">目前共计15个标签</p>
    <div class="cloud-tag">
      <router-link class="cls3" to="/tag/CSS3">CSS3</router-link>
      <router-link class="cls2" to="/tag/FilePond">FilePond</router-link>
      <router-link class="cls1" to="/tag/Git">Git</router-link>
      <router-link class="cls3" to="/tag/HTML5">HTML5</router-link>
      <router-link class="cls1" to="/tag/Hexo">Hexo</router-link>
      <router-link class="cls2" to="/tag/Music">Music</router-link>
      <router-link class="cls1" to="/tag/Vue">Vue</router-link>
      <router-link class="cls3" to="/tag/Web存储">Web存储</router-link>
      <router-link class="cls1" to="/tag/javascript">javascript</router-link>
      <router-link class="cls1" to="/tag/webpack">webpack</router-link>
      <router-link class="cls2" to="/tag/性能优化">性能优化</router-link>
      <router-link class="cls1" to="/tag/旅游">旅游</router-link>
      <router-link class="cls3" to="/tag/生活">生活</router-link>
      <router-link class="cls1" to="/tag/算法">算法</router-link>
      <router-link class="cls1" to="/tag/设计模式">设计模式</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tag'
}
</script>

<style lang="less" scoped>
.tag {
  padding-top: 30px;
  h2 {
    margin: 20px 0 30px 0;
    font-size: 20px;
    text-align: center;
  }
  .cloud {
    text-align: center;
    font-size: 17px;
  }
  .cloud-tag {
    text-align: center;
    a {
      font-size: 12px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      background-color: transparent;
      color: #ccc;
      text-decoration: none;
      outline: none;
      border-bottom: 1px solid #999;
      cursor: pointer;
      display: inline-block;
      margin: 10px;

      &.cls2 {
        font-size: 16px;
        color: #9d9d9d;
      }
      &.cls3 {
        font-size: 20px;
        color: #404040;
      }
    }
  }
}
</style>
