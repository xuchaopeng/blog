<template>
  <div class="archives">
    <section id="posts" class="posts_content">
      <template v-for="(curItem,key) in archiveList">
        <div class="posts_item">
          <div class="item_title">
            <h2>{{key}}</h2>
          </div>
        </div>
        <div class="posts_item" v-for="(item,index) in curItem">
          <div class="item_cnt">
            <time>{{item.date}}</time>
            <h3>
              <router-link :to="'/a/'+item._id">{{item.title}}</router-link>
            </h3>
          </div>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import {getArticleList} from '@/api/article';
export default {
  name: 'Archives',
  data() {
    return {
      archiveList:{
        2019:[
          {
            title:'',
            date:''
          }
        ]
      }
    }
  },
  created() {
    this.getArchive();
  },
  methods:{
    getArchive() {
      getArticleList().then((res) => {
        if(res.status == 200 && res.data.length) {
          this.archiveList = this.dealData(res.data);
        }
      })
    },
    dealData(data) {
      let o =  {};
      let key = '';
      data.reverse();
      data.map((item) => {
        key = item.date.slice(0,4);
        if(!o[key]) {
          o[key] = [
            {
              title:item.title,
              date: item.date.split(' ')[0].slice(5),
              _id:item._id
            }
          ]
        } else {
          o[key].push({
            title:item.title,
            date:item.date.split(' ')[0].slice(5),
             _id:item._id
          });
        }
      });
      return o;
    }
  }
}
</script>

<style lang="less" scoped>
.archives {
  .posts_content {
    position: relative;
    z-index: 1010;
    &::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 0;
      margin-left: -2px;
      width: 4px;
      height: 100%;
      background: #f5f5f5;
      z-index: -1;
    }
    .posts_item {
      margin: 30px 0;
      .item_cnt {
        border-bottom: 1px dashed #ccc;
        position: relative;
        cursor: pointer;
        &:hover {
          border-bottom-color: #666;
          &::before {
            background: #262a30;
          }
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 12px;
          width: 6px;
          height: 6px;
          margin-left: -4px;
          background: #bbb;
          border-radius: 50%;
          border: 1px solid #fff;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          transition-delay: 0s;
          transition-property: background;
        }
        h3 {
          margin-left: 80px;
          font-size: 18px;
          font-weight: normal;
          line-height: inherit;
        }
        time {
          position: absolute;
          font-size: 18px;
          left: 16px;
          top: 0;
          display: block;
          width: auto;
          text-align: left;
        }
      }
      .item_title {
        border-bottom: 1px dashed #ccc;
        position: relative;
        &::before {
          content: ' ';
          position: absolute;
          left: 0;
          top: 50%;
          margin-left: -4px;
          margin-top: -4px;
          width: 8px;
          height: 8px;
          background: #bbb;
          border-radius: 50%;
        }
        h2 {
          padding-left: 20px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
