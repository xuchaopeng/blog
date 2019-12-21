<template>
  <div class="home">
    <h2>
      <b>最近</b>更新
    </h2>
    <div class="blogs" v-for="item in list" :key="item.accid">
      <figure>
        <router-link :to="'/a/'+item._id">
          <img :src="item.img" alt />
        </router-link>
      </figure>
      <ul>
        <h3>
          <router-link :to="'/a/'+item._id">{{item.title}}</router-link>
        </h3>
        <p class="sum">
          <router-link :to="'/a/'+item._id">{{item.discription}}</router-link>
        </p>
        <p class="ino">
          <span class="icon iconfont icon-biaoqian lf">
            <i>{{item.tag}}</i>
          </span>
          <span class="icon iconfont icon-shijian lf">
            <i>{{item.date}}</i>
          </span>
          <span class="icon iconfont icon-nice rg">
            <i>{{item.zan}}</i>
          </span>
          <span class="icon iconfont icon-yuedu rg">
            <i>浏览({{item.read}})</i>
          </span>
          <span class="icon iconfont icon-biaoqing rg">
            <i>评论({{item.comtimes}})</i>
          </span>
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
import {getArticleList} from '@/api/article';
import {mapGetters,mapMutations} from 'vuex';
import defaultImg from '@/assets/images/tt.jpg';
export default {
  name: 'Home',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.showList();
  },
  methods:{
    showList(){
      getArticleList().then((res) => {
        if(res.status == 200 && res.data.length)  {
          this.list = this.dealData(res.data);
          this._setArticleNumbers(this.list.length);
        }
      })
    },
    dealData(data) {
      return data.map((item) => {
        return {
          title: item.title||'',
          tag: item.category[0],
          accid: item._id,
          date: item.date,
          discription:item.gist,
          read: item.read || 1,
          zan: item.zan || 0,
          comtimes: item.comments && item.comments[0]  || 0,
          img: item.img || defaultImg,
          _id:item._id
        }
      })
    },
    ...mapMutations({
      _setArticleNumbers:'setArticleNumbers'
    })
  },
  computed : {
    ...mapGetters([
      'articleNumbers'
    ])
  }
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
  .ino {
    .icon-nice {
      cursor: pointer;
    }
  }
}
</style>
