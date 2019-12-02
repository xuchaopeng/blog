<template>
  <article class="articleDetail">
    <h2 class="title">{{title}}</h2>
    <div class="meta">
      <span class="icon iconfont icon-shijian"></span>
      <span class="pl5">发表于</span>
      <time class="time ml5">2019-06-02</time>
      <span class="ml5 mr5">|</span>
      <span class="icon iconfont icon-yuedu"></span>
      <span class="pl5">阅读次数 : 18</span>
    </div>
    <div class="content">
      <mavon-editor
        v-model="content"
        default_open="preview"
        defaultOpen="preview"
        :toolbarsFlag="false"
        :subfield="false"
      ></mavon-editor>
    </div>
  </article>
</template>

<script>
import {getArticleDetail} from  '@/api/article'
export default {
    data() {
        return {
            articleId:'',
            title:'',
            content:''
        }
    },
    created() {
        this.articleId = this.$route.params.id;
        this.getArticleData()
    },
    methods:{
      getArticleData() {
        getArticleDetail(this.articleId).then(res => {
          if(res.status == 200 ) {
            const article = res.data;
            this.title = article.title;
            this.content = article.content
          }
        })
      }
    }
}
</script>

<style lang="less">
  .articleDetail {
    .title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      text-align: center;
      font-weight: 400;
      font-size:20px;
    }
    .meta {
        margin: 3px 0 60px 0;
        color: #999;
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 12px;
        text-align: center;
        margin-bottom:15px;
        span {
          font-size:12px;
        }
        .iconfont {
          font-size:16px;
          position: relative;
          top:2px;
          color:#4db3ff;
        }
        .time {
          border-bottom:1px dashed #999;
        }
    }
    .pl5 {
      padding-left:5px;
    }
    .ml5 {
      margin-left:5px;
    }
    .mr5 {
      margin-right: 5px;
    }
    .v-note-wrapper{
      &.shadow  {
        box-shadow:none !important;
        background-color: #fff;
      }
      .v-show-content {
        background-color: #fff !important;
        color: #555;
      }
    }
  }
</style>
