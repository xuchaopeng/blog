import axios from "@/api/request";

export const getArticleList = param => {
  return axios.request({
    url: "/api/articleList",
    method: "post"
  });
};

export const getTagsList = param => {
  return axios.request({
    url: "/api/tagList",
    method: "post"
  });
}

export const getArticleDetail = artilceID => {
  return axios.request({
    method:'GET',
    url:'/api/articleDetail/'+artilceID
  })
}

export const getArticleZan = param => {
  let id = param.id;
  return axios.request({
    data:{
      _id:id
    },
    method:'post',
    url:'/api/article/zan'
  })
}
