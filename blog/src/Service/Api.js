import axios from 'axios';
import { API_NOTIFICATIONS_MSG, Services_url } from '../constant/config';


const API_url = 'http://localhost:8000';
const instances = axios.create({
  baseURL: API_url,
  timeout: 10000,
  headers: {
    "Content-Type": "User signup form/json",
  },
});

instances.interceptors.request.use(
  function (config) {
    return config;
  },

  function (error){
   return  Promise.reject(error);
  }
);

instances.interceptors.response.use(
  function (response) {
    //stop global loader
    return processResponse(response);
  },
  function (error) {
    //global loader
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data }
  } else {
    return {
      isFailure: true,
      status: response?.status,
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

const API = {};

for (const [key, value] of Object.entries(Services_url)){
  API[key] =(body, showUploadProgress, showDownloadProgress) =>{
      instances  ({
        url : value.url,
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

