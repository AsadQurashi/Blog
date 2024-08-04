import axios from 'axios';
import { API_NOTIFICATIONS_MSG, Services_url } from '../constant/config';


const API_url = 'http://localhost:8000';
<<<<<<< HEAD
const instances = axios.create({
  baseURL: API_url,
  timeout: 10000,
  // Static way to define data type is ending as like json
  // headers: {
  //   "Content-Type": "application/json",
  //   // "Content-Type": "multipart/form-data",
  // },
});

instances.interceptors.request.use(
  // Dynamic way to send data when jason file then application json and when image then multer will be used FormData
  function (config) {
    if (config.data instanceof FormData)
    {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    else
    {
      config.headers['Content-Type'] = 'application/json';
    }
=======
const AxiosInstance = axios.create({
  baseURL: API_url,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  function (config) {
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
    return config;
  },

  function (error){
   return  Promise.reject(error);
  }
);

<<<<<<< HEAD
instances.interceptors.response.use(
  function (response) {
    //stop global loader
=======
AxiosInstance.interceptors.response.use(
  function (response) {
    //stop global loader
    console.log("response from ProcessResponse",response)
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
    return processResponse(response);
  },
  function (error) {
    //global loader
    return Promise.reject(processError(error));
  }
);

<<<<<<< HEAD
const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSucces: true, data: response.data }
=======
const processResponse =(response)=> {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
  } else {
    return {
      isFailure: true,
      status: response?.status,
<<<<<<< HEAD
      msg: response?.msg,
      code: response?.code,
    }
  }
};

const processError = (error) =>
{
    if (error.response) {
        // request made and server responed with a status other than 200 
        console.log("Error in response", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATIONS_MSG.responseFailure,
            code: error.response.status
        };
    }
    else if (error.request) {
        // request made bur not responsed
        console.log("Error in Request", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATIONS_MSG.requestFailure,
            code: ''
        };
    }
    else {
        // something happend in frontend
        console.log("Error in Network", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATIONS_MSG.networkError,
            code: ''
        };
    };
};

=======
      msg: response?.msg || "An error occurred during the request",
      code: response?.code,
    };
  }
};

const processError = (error) => {
  if (error.response) {
    console.log("Error in response:", error.response); // Log detailed error response
    return {
      isError: true,
      msg: error.response.data.msg || API_NOTIFICATIONS_MSG.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    console.log("Error in Request:", error.request); // Log request error
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MSG.requestFailure,
      code: '',
    };
  } else {
    console.log("Error in Network:", error.message); // Log network error
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MSG.networkError,
      code: '',
    };
  }
};


>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
const API = {};

for (const [key, value] of Object.entries(Services_url)){
  API[key] =(body, showUploadProgress, showDownloadProgress) =>{
<<<<<<< HEAD
      return instances({
        url: value.url,
        method: value.method,
        data : body,
        responseType: value.responseType,
=======
    return AxiosInstance({
        url: value.url,
        method: value.method,
        data : body,
        responseType : value.responseType,
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
        onUploadProgress : function (progessEvent) 
        {
          if(showUploadProgress)
          {
            const percentagecompleted = Math.round((progessEvent.loaded * 100)/progessEvent.total);
            showUploadProgress(percentagecompleted);
          }
        },
        onDownloadProgress : function (progessEvent){
          if(showDownloadProgress)
          {
            const percentagecompleted = Math.round((progessEvent.loaded * 100) / progessEvent.total);
            showDownloadProgress(percentagecompleted);
          }
        }
      });
  };
}
export { API };

