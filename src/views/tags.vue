<template>
  <div class="tag">
    <h2>tag</h2>
    <p class="cloud">目前共计{{tagNumber}}个标签</p>
    <div class="cloud-tag">
      <template v-for="(item,idx) in list">
        <router-link :class="item.class" :to="item.to">{{item.name}}</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import {getTagsList} from '@/api/article';
export default {
  name: 'tag',
  data() {
    return {
      tagNumber:0,
      list:[]
    }
  },
  created(){
    this.getTagsData();
  },
  mounted() {},
  methods:{
    getTagsData() {
      if(this.tagsList && this.tagsList.length > 0) {
        this.list = this.dealData(this.tagsList);
        this.tagNumber = this.list.length;
      } else {
        getTagsList().then(res => {
          if(res.status == 200) {
            this._setTagsList(res.data.data);
            this.list = this.dealData(res.data.data);
            this.tagNumber = this.list.length;
          }
        })
      }
    },
    dealData(data) {
      return data.map(item => {
        let ran = parseInt(Math.random()*3)
        return {
          name:item.name,
          to:'/tag/'+item.name,
          class:ran == 1 ? 'cls2' : ran == 2 ? 'cls2' : 'cls3'
        }
      })
    },
    ...mapMutations({
      _setTagsList:'setTagsList'
    })
  },
  computed:{
    ...mapGetters([
      'tagsList'
    ])
  }
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
