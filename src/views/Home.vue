<template>
  <div class="home">
    <h2>
      <b>最近</b>更新
    </h2>
    <div class="blogs" v-for="item in list" :key="item.accid">
      <figure>
        <a href="/">
          <img :src="item.img[0].url" alt />
        </a>
      </figure>
      <ul>
        <h3>
          <a href="/">{{item.title}}</a>
        </h3>
        <p class="sum">
          <a href="/">{{item.discription}}</a>
        </p>
        <p class="ino">
          <span class="icon iconfont icon-biaoqian lf">
            <i>{{item.tag}}</i>
          </span>
          <span class="icon iconfont icon-shijian lf">
            <i>{{item.date}}</i>
          </span>
          <span class="icon iconfont icon-zan rg">
            <i>{{item.zan}}</i>
          </span>
          <span class="icon iconfont icon-yuedu rg">
            <i>浏览({{item.read}})</i>
          </span>
          <a class="icon iconfont icon-biaoqing rg">
            <i>评论({{item.comtimes}})</i>
          </a>
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [
        {
          title: '叶子飘落的小插件分享',
          tag: 'Javascript',
          accid: '12312',
          date: '2019-11-14',
          discription:
            '之前有博友说，喜欢首页那个叶子落的效果，今天就把那个小插件分享出去。分享地址是在github上呢，可以自己下载应用到自己的网站上。',
          read: 20,
          zan: 80,
          comtimes: 20,
          img: [
            {
              width: 300,
              height: 250,
              url:
                'https://static.yezismile.com/data/photo/day_20170919/201709191440459223_s.jpg'
            }
          ]
        },
        {
          title: '叶子飘落的小插件分享',
          tag: 'Javascript',
          accid: '123123',
          date: '2019-11-14',
          discription:
            '之前有博友说，喜欢首页那个叶子落的效果，今天就把那个小插件分享出去。分享地址是在github上呢，可以自己下载应用到自己的网站上。',
          readtimes: 20,
          zan: 80,
          comtimes: 20,
          img: [
            {
              width: 300,
              height: 250,
              url:
                'https://static.yezismile.com/data/photo/day_20170919/201709191440459223_s.jpg'
            }
          ]
        }
      ]
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.home {
  font-size: 16px;
  h2 {
    border-bottom: #db6d4c 4px solid;
  }
  .lf {
    float: left;
  }
  .rg {
    float: right;
  }
  .blogs {
    overflow: hidden;
    border-bottom: 1px solid #bfab86;
    padding: 25px 0;
    figure {
      float: left;
      width: 160px;
      height: 120px;
      margin: 0;
      padding: 0;
      img {
        width: 100%;
      }
    }
    ul {
      float: right;
      line-height: 22px;
      width: 710px;
      color: #777;
      h3 {
        font-weight: bold;
        transition: all 0.5s;
        margin-bottom: 10px;
        font-size: 18px;
        a {
          color: #555;
        }
      }
      .sum {
        font-size: 15px;
        line-height: 22px;
      }
      .ino {
        padding-top: 5px;
        overflow: hidden;
        .icon {
          font-size: 20px;
          margin-right: 15px;
          i {
            padding-left: 5px;
            font-style: normal;
            font-size: 12px;
            position: relative;
            top: -3px;
            &:hover {
              color: #000;
            }
          }
        }
        .icon-shijian {
          color: #4db3ff;
          i {
            color: #555;
          }
        }
        .icon-biaoqian {
          color: pink;
          i {
            color: #555;
          }
        }
        .icon-biaoqing {
          cursor: pointer;
          &:hover i {
            text-decoration: underline;
          }
        }
        .icon-zan {
          cursor: pointer;
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
}
</style>
