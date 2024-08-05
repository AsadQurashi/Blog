export const API_NOTIFICATIONS_MSG = {
  loading: {
    title: "Loading....",
    message: "Data is being loaded, please wait.",
  },
  success: {
    isSuccess: {
      title: "Success",
      message: "Data is loaded successfully.",
    },
    responseFailure: {
      title: "Error",
      message:
        "An error occurred while fetching data from the server. Please try again.",
    },
    requestFailure: {
      title: "Error",
      message: "An error occurred while parsing request data.",
    },
    networkError: {
      title: "Error",
      message:
        "Unable to connect with the server. Please check your internet connection and try again later.",
    },
  },
};

// URLs / APIs for requests
export const Services_url = {
  UserSignup: { url: "/sign", method: "POST" },
  UserLogin: { url: "/login", method: "POST" },
  UploadFile: { url: "/file/upload", method: "POST" },
};
