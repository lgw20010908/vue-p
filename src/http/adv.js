import instance from "./axios";

export default {
  getData: (params) => {
    return instance.post("/mall/sms-home-advertise/page", params);
  },
  addAdv: (params) => {
    return instance.post("/mall/sms-home-advertise/add", params);
  },
  delAdv: (params) => {
    return instance.request({
      url: "/mall/sms-home-advertise/del/" + params.id,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },
  editAdv: (params) => {
    return instance.post("/mall/sms-home-advertise/edit", params);
  },
};