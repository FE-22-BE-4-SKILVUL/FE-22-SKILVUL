import axios from "axios";

export const  postSignUp= (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://be4-skilvul-production.up.railway.app/user/register`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res)
    if(res && res.data && res.data.message === "success register"){
      localStorage.setItem("register", "success");
    }
  } catch (err) {
    console.log("ERORBTUHGTBOBO", err);
  }
};

export const postLogin = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://be4-skilvul-production.up.railway.app/user/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res)
    if(res && res.data && res.data.token){
      localStorage.setItem("token", res?.data?.token);
      const nama = res.data.nama_lengkap;
      localStorage.setItem("nama_lengkap", nama);
    }
  } catch (err) {
    console.log("ERORBTUHGTBOBO", err);
  }
};
