import axios from "axios";

// const baseUrl = "http://127.0.0.1:8000/api/";
const baseUrl = "https://ohaouuu.000webhostapp.com/api/";

const highSchoolApi = axios.create({
  baseURL: baseUrl,
});

// highSchoolApi.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("token");

//       return highSchoolApi
//         .post(
//           "refresh",
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         )
//         .then(({ response }) => {
//           localStorage.setItem("token", response.data.data);
//           highSchoolApi.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${response.data.data}`;
//           originalRequest.headers[
//             "Authorization"
//           ] = `Bearer ${response.data.data}`;
//           console.log(response);
//           return highSchoolApi(originalRequest);
//         })
//         .catch((err) => {
//           localStorage.clear();
//         });
//     }
//     return Promise.reject(error);
//   }
// );

export default highSchoolApi;
