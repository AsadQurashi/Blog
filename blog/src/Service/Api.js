import axios from "axios";
import { API_NOTIFICATIONS_MSG, Services_url } from "../constant/config";

const API_url = "http://localhost:8000";
const instances = axios.create({
  baseURL: API_url,
  timeout: 10000,
});

instances.interceptors.request.use(
  function (config) {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instances.interceptors.response.use(
  function (response) {
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.data?.msg || "An error occurred during the request",
      code: response?.status,
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
      code: "",
    };
  } else {
    console.log("Error in Network:", error.message); // Log network error
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MSG.networkError,
      code: "",
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(Services_url)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    return instances({
      url: value.url,
      method: value.method,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          const percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          const percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
  };
}

export { API };
