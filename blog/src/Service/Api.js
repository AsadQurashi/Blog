import axios from 'axios';
import { API_NOTIFICATIONS_MSG, Services_url } from '../constant/config';


const API_url = 'http://localhost:8000';
const AxiosInstance = axios.create({
  baseURL: API_url,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },

  function (error){
   return  Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  function (response) {
    //stop global loader
    console.log("response from ProcessResponse",response)
    return processResponse(response);
  },
  function (error) {
    //global loader
    return Promise.reject(processError(error));
  }
);

const processResponse =(response)=> {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
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


const API = {};

for (const [key, value] of Object.entries(Services_url)){
  API[key] =(body, showUploadProgress, showDownloadProgress) =>{
    return AxiosInstance({
        url: value.url,
        method: value.method,
        data : body,
        responseType : value.responseType,
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

