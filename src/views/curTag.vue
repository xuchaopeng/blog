<template>
  <div class="curtag">
    <section id="posts" class="posts_content">
      <div class="posts_item">
        <div class="item_title">
          <h2>{{currentTag}}</h2>
        </div>
      </div>
      <div class="posts_item" v-for="(item,index) in currentTagList">
        <div class="item_cnt">
          <time>{{item.date.split(' ')[0].slice(5)}}</time>
          <h3>
            <router-link :to="'/a/'+item._id">{{item.title}}</router-link>
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import {getTagsList} from '@/api/article';
export default {
  name: 'curTag',
  data() {
    return {
      currentTag: '',
      currentTagList:[]
    }
  },
  created() {

  },
  mounted() {
    this.currentTag = this.$route.params.id;
    this.getData();
  },
  computed:{
    ...mapGetters(['tagsList'])
  },
  methods:{
    ...mapMutations({
      _setTagsList:'setTagsList'
    }),
    getData() {
      if(this.tagsList && this.tagsList.length) {
        this.currentTagList = this.dealData(this.tagsList);
      } else {
        getTagsList().then(res => {
          if(res.status == 200) {
            this._setTagsList(res.data.data);
            this.currentTagList = this.dealData(res.data.data);
          }
        })
      }
    },
    dealData(data) {
      const tag = this.currentTag;
      const currentTags = data.filter(item => item.name == tag);
      return currentTags[0].articles || [];
    }
  }
}
</script>

<style lang="less" scoped>
.curtag {
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
