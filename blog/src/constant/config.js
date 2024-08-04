export const API_NOTIFICATIONS_MSG =
{
    loading: {
        title: "Loadng....",
        message: "Data is being loading , Please wait",
    },
    success: {
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
export const Services_url = {
  UserSignup: { url: "/sign", method: "POST" },
  UserLogin: { url: "/login", method: "POST" },
  UploadFile: { url: "/file/upload", method: "POST" },
};
