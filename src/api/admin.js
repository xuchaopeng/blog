import axios from "@/api/request";

export const getLogin = param => {
  return axios.request({
    url: "/api/admin/signIn",
    method: "post",
    data: {
      name: param.name,
      password: param.password
    }
  });
};

export const getRegist = param => {
  return axios.request({
    url: "/api/admin/signUp",
    method: "post",
    data: {
      name: param.name,
      password: param.password,
      nickName: param.nickname || ""
    }
  });
};

export const checkUser = param => {
    return axios.request({
        url:'/api/admin/checkUser',
        method:'post',
        data:{
            user_name:param.name,
            token:param.token
        }
    })
}
