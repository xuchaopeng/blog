<template>
  <div class="container">
    <div class="headband"></div>
    <div class="inner">
      <div class="side">
        <Nav></Nav>
        <Aside></Aside>
      </div>
      <div class="main">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './nav.vue'
import Aside from './aside.vue'
export default {
  name: 'Main',
  data() {
    return {}
  },
  components: {
    Nav,
    Aside
  }
}
</script>

<style lang="less" scoped>
.container {
  .headband {
    height: 3px;
    background: #222;
  }
  .inner {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .side {
    width: 220px;
    float: left;
  }
  .main {
    width: 960px;
    float: right;
    box-sizing: border-box;
    padding: 30px;
    background: #fff;
    min-height: 700px;
    box-shadow: initial;
    border-radius: initial;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
}
</style>
