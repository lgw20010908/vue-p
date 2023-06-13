import instance from "./axios";

export default {
  getList: (params) => {
    return instance.post("/mall/sms-flash-promotion/page", params);
  },
  addGoods: (params) => {
    return instance.post("/mall/sms-flash-promotion/add", params);
  },
  delGoods: (params) => {
    return instance.request({
      url: "/mall/sms-flash-promotion/del/" + params.id,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },
  editGoods: (params) => {
    return instance.post("/mall/sms-flash-promotion/edit", params);
  },
};
