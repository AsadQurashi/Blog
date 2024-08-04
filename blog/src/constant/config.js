export const API_NOTIFICATIONS_MSG =
{
    loading: {
        title: "Loadng....",
        message: "Data is being loading , Please wait",
    },
<<<<<<< HEAD
    success: {
=======
    isSuccess: {
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
        title: "success",
        message: "Data is loaded successfully",
    },
    responseFailure: {
        title: "Error",
        message:
            "An error occurred while fetching an error from server , please try again",
    },
    requestFailure: {
        title: "Error",
        message: "An error occurred while parsing request data",
    },
    networkError: {
        title: "Error",
        message:
            "Unable to connect with server , please check you internet connection and try again later",
    },
};

// url / api for requested or link
<<<<<<< HEAD
export const Services_url = {
  UserSignup: { url: "/sign", method: "POST" },
  UserLogin: { url: "/login", method: "POST" },
  UploadFile: { url: "/file/upload", method: "POST" },
};
=======
export const Services_url = ({ UserSignup : { url : '/sign' , method : 'POST' }
});
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4
