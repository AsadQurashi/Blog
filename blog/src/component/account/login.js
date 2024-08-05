import {
  Box,
  Button,
  TextField,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../Service/Api";

const LoginBlock = styled(Box)`
  color: white;
`;
const SignUpBlock = styled(Box)`
  color: white;
`;

const shadowColorAnimation = keyframes`
    0% {
        box-shadow: 
            5px 6px 5px 12px rgba(10, 41, 116, 0.6), 
            -5px -6px 5px 12px rgba(22, 8, 16, 0.6),
            -5px -6px 10px 12px rgba(30, 18, 28, 0.6),
            -5px -6px 15px 12px rgba(38, 25, 41, 0.6),
            -5px -6px 20px 12px rgba(43, 33, 55, 0.6);
    }
    50% {
        box-shadow: 
            5px 6px 5px 12px rgba(116, 41, 10, 0.6),
            -5px -6px 5px 12px rgba(16, 8, 22, 0.6),
            -5px -6px 10px 12px rgba(28, 18, 30, 0.6),
            -5px -6px 15px 12px rgba(41, 25, 38, 0.6),
            -5px -6px 20px 12px rgba(55, 33, 43, 0.6);
    }
    100% {
        box-shadow: 
            5px 6px 5px 12px rgba(10, 41, 116, 0.6),
            -5px -6px 5px 12px rgba(22, 8, 16, 0.6),
            -5px -6px 10px 12px rgba(30, 18, 28, 0.6),
            -5px -6px 15px 12px rgba(38, 25, 41, 0.6),
            -5px -6px 20px 12px rgba(43, 33, 55, 0.6);
    }
`;

const Component = styled(Box)`
  padding: auto;
  width: 450px;
  margin: auto;
  animation: ${shadowColorAnimation} 3s infinite;
`;

const ImageContainer = styled(Box)`
  color: white;
`;
const Image = styled("img")({
  width: 400,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  p {
    margin-top: 20px;
  }
`;

const LoginGradiantColor = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  height: 48px;
  border-radius: 2px;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #9c5b93,
    #6c4b79,
    #42395a,
    #232538,
    #232c3e,
    #233344,
    #243a48,
    #306579,
    #3694a7,
    #42c7d0,
    #5ffbf1
  );
  background-size: 100% 100%;
  transition: background-position 3s;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.225);

  &:hover {
    background-size: 200% 200%;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.225);
    animation: ${LoginGradiantColor} 3s infinite;
    background-position: 100% 50%;
  }
`;

const SigninGradiantColor = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const SigninButton = styled(Button)`
  text-transform: none;
  background-image: linear-gradient(
    to right top,
    #e8e4f4,
    #bcb8c7,
    #928f9b,
    #6a6772,
    #45424b,
    #3d3543,
    #36293a,
    #301c30,
    #491c38,
    #631937,
    #7b172f,
    #8e1e1e
  );
  background-size: 100% 100%;
  transition: background-position 3s;
  color: white;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 3px 4px 0px rgb(0 0 0 / 0.8);

  &:hover {
    box-shadow: 0px 3px 4px 0px rgb(0 0 0 / 0.8);
    background-size: 200% 200%;
    animation: ${SigninGradiantColor} 3s infinite;
    background-position: 100% 50%;
  }
`;

const CreateAccountButton = styled(Button)`
  text-transform: none;
  background-image: linear-gradient(
    to right top,
    #c2c2c2,
    #a2a2a2,
    #828282,
    #626262,
    #434343
  );
  background-size: 100% 100%;
  transition: background-position 3s;
  color: black;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 3px 4px 0px rgb(0 0 0 / 0.8);

  &:hover {
    background-size: 200% 200%;
    box-shadow: 0px 3px 4px 0px rgb(0 0 0 / 0.8);
    background-position: 100% 50%;
  }
`;

const StyledTextField = styled(TextField)`
  input {
    font-size: 16px;
    font-family: Arial, sans-serif;
    font-weight: bold;
  }
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const signupInitialValue = {
  name: "",
  lastname: "",
  username: "",
  phone_no: "",
  email: "",
  password: "",
  confirm_password: "",
};

const loginInitialValue = {
  Username: "",
  Email: "",
  Password: "",
};

const Login = ({ setUserAuthenticated }) => {
  const [account, setAccount] = useState("login");
  const [data, setData] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const ToggleAccount = () => {
    setAccount(account === "login" ? "Signup" : "login");
  };

  const imgurl = "./Picture/login-picture.jpg"; // Login image
  const signupimg = "./Picture/6159448.png"; // Sign up image

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SignupUser = async (e) => {
    e.preventDefault();
    try {
      const response = await API.UserSignup(data);
      if (response.isSuccess) {
        setError("");
        setData(signupInitialValue);
        ToggleAccount();
      } else {
        setError("Something went wrong, please try again later");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("Something went wrong, please try again later");
    }
  };

  const handleLoginInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.UserLogin(login);
      if (response.isSuccess) {
        setError("");
        sessionStorage.setItem(
          "accessToken",
          `Bearer ${response.data.accessToken}`
        );
        sessionStorage.setItem(
          "refreshToken",
          `Bearer ${response.data.refreshToken}`
        );
        console.log(
          "User Name :",
          response.data.username,
          "Email : ",
          response.data.email
        );
        setUserAuthenticated(true);
        navigate("/");
      } else {
        setError("Login Failed");
      }
    } catch (error) {
      console.error("Error in login function", error);
      setError("Error while logging in, please wait");
    }
  };

  return (
    <Component>
      {account === "login" ? (
        <LoginBlock>
          <ImageContainer>
            <Image src={imgurl} alt="Login-Image" />
          </ImageContainer>
          <Wrapper>
            <StyledTextField
              id="standard-email"
              label="Email"
              type="email"
              onChange={handleLoginInput}
              name="email"
              value={login.email}
              variant="standard"
            />
            <StyledTextField
              id="standard-password"
              label="Password"
              type="password"
              onChange={handleLoginInput}
              name="password"
              value={login.password}
              variant="standard"
            />
            {error && <Error>{error}</Error>}
            <LoginButton onClick={handleLogin}>Login</LoginButton>
            <Text> Don't have an account? Sign Up </Text>
            <CreateAccountButton onClick={ToggleAccount}>
              Create Account
            </CreateAccountButton>
          </Wrapper>
        </LoginBlock>
      ) : (
        <SignUpBlock>
          <ImageContainer>
            <Image src={signupimg} alt="Signup-Image" />
          </ImageContainer>
          <Wrapper>
            <StyledTextField
              id="standard-name"
              label="Name"
              onChange={handleInput}
              name="name"
              value={data.name}
              variant="standard"
            />
            <StyledTextField
              id="standard-lastname"
              label="Last Name"
              onChange={handleInput}
              name="lastname"
              value={data.lastname}
              variant="standard"
            />
            <StyledTextField
              id="standard-username"
              label="Username"
              onChange={handleInput}
              name="username"
              value={data.username}
              variant="standard"
            />
            <StyledTextField
              id="standard-phone_no"
              label="Phone No"
              onChange={handleInput}
              name="phone_no"
              value={data.phone_no}
              variant="standard"
            />
            <StyledTextField
              id="standard-email"
              label="Email"
              type="email"
              onChange={handleInput}
              name="email"
              value={data.email}
              variant="standard"
            />
            <StyledTextField
              id="standard-password"
              label="Password"
              type="password"
              onChange={handleInput}
              name="password"
              value={data.password}
              variant="standard"
            />
            <StyledTextField
              id="standard-confirm_password"
              label="Confirm Password"
              type="password"
              onChange={handleInput}
              name="confirm_password"
              value={data.confirm_password}
              variant="standard"
            />
            {error && <Error>{error}</Error>}
            <SigninButton onClick={SignupUser}>Signup</SigninButton>
            <Text onClick={ToggleAccount}>Already have an account? Login</Text>
            <CreateAccountButton onClick={ToggleAccount}>
              Signin
            </CreateAccountButton>
          </Wrapper>
        </SignUpBlock>
      )}
    </Component>
  );
};

export default Login;
