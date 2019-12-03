import axios from "@/api/request";

export const newcomment = param => {
  let { id, from_uid, from_uname, avatar, content, date, _id } = param;
  return axios.request({
    url: "/api/comment/new",
    method: "post",
    data: {
      _id,
      id,
      from_uid,
      from_uname,
      avatar,
      content,
      date
    }
  });
};

export const replycomment = param => {
  let {
    _id,
    id,
    from_uid,
    from_uname,
    avatar,
    to_uid,
    to_uname,
    content,
    date
  } = param;
  return axios.request({
    url: "/api/comment/reply",
    method: "post",
    data: {
      _id,
      id,
      from_uid,
      from_uname,
      avatar,
      to_uid,
      to_uname,
      content,
      date
    }
  });
};
