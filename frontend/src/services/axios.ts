import axios from 'axios';

// export default axios.create({
//   baseURL: "http://localhost:3001/",
// })

axios.defaults.baseURL = "http://localhost:3001/";

axios.interceptors.response.use(res => res, async error =>{
  if(error.response.status === 401) {
    const response  =  await axios.get("refresh/",{withCredentials:true});

    if(response.status === 200){
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data['accessToken']}`

      return axios(error.config);// contains all the info regarding the previous failed request
    }
  }
})