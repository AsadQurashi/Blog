import { Box, Button, TextField, Typography, keyframes, styled } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../Context/Dataprovider';
import { API } from '../../Service/Api';


const LoginBlock = styled(Box)`
  color: white;
`;
const SignUpBlock = styled(Box)`
  color: white;
`;

const shadowColorAnimation = keyframes`
    0% {
        box-shadow: 
            5px 6px 5px 12px rgba(10, 41, 116, 0.6), /* Original shadow */
            -5px -6px 5px 12px rgba(22, 8, 16, 0.6), /* Gradient shadow layer 1 */
            -5px -6px 10px 12px rgba(30, 18, 28, 0.6), /* Gradient shadow layer 2 */
            -5px -6px 15px 12px rgba(38, 25, 41, 0.6), /* Gradient shadow layer 3 */
            -5px -6px 20px 12px rgba(43, 33, 55, 0.6); /* Gradient shadow layer 4 */
    }
    50% {
        box-shadow: 
            5px 6px 5px 12px rgba(116, 41, 10, 0.6), /* Original shadow */
            -5px -6px 5px 12px rgba(16, 8, 22, 0.6), /* Gradient shadow layer 1 */
            -5px -6px 10px 12px rgba(28, 18, 30, 0.6), /* Gradient shadow layer 2 */
            -5px -6px 15px 12px rgba(41, 25, 38, 0.6), /* Gradient shadow layer 3 */
            -5px -6px 20px 12px rgba(55, 33, 43, 0.6); /* Gradient shadow layer 4 */
    }
    100% {
        box-shadow: 
            5px 6px 5px 12px rgba(10, 41, 116, 0.6), /* Original shadow */
            -5px -6px 5px 12px rgba(22, 8, 16, 0.6), /* Gradient shadow layer 1 */
            -5px -6px 10px 12px rgba(30, 18, 28, 0.6), /* Gradient shadow layer 2 */
            -5px -6px 15px 12px rgba(38, 25, 41, 0.6), /* Gradient shadow layer 3 */
            -5px -6px 20px 12px rgba(43, 33, 55, 0.6); /* Gradient shadow layer 4 */
    }
`;

const Component = styled(Box)`          
  padding: auto;
  width: 450px;
  margin: auto;
  animation: ${shadowColorAnimation} 3s infinite; /* Color animation for box-shadow */
`;

// const Component = styled(Box)`
//     width : 400px;
//     margin: auto;
//     margin-top: 7%;
//     box-shadow:
//         5px 6px 5px 12px rgba(10, 41, 116, 0.6), /* Original shadow */
//         -5px -6px 5px 12px rgba(22, 8, 16, 0.6), /* Gradient shadow layer 1 */
//         -5px -6px 10px 12px rgba(30, 18, 28, 0.6), /* Gradient shadow layer 2 */
//         -5px -6px 15px 12px rgba(38, 25, 41, 0.6), /* Gradient shadow layer 3 */
//         -5px -6px 20px 12px rgba(43, 33, 55, 0.6); /* Gradient shadow layer 4 */
//     `

const ImageContainer = styled(Box)`
  color: white;
`;
const Image = styled("img")({
  width: 400,
  margin: "auto",
  display: "flex",
  padding: "50px , 0 , 0",
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
  background-size: 100% 100%; /* Double the size to cover the whole button */
  transition: background-position 3s; /* Smooth transition for the animation */
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 225);

  &:hover {
    background-size: 200% 200%;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 225%);
    animation: ${LoginGradiantColor} 3s infinite;
    background-position: 100% 50%; /* Move the gradient to the end on hover */
  }
`;

const SigninGradiantColor = keyframes`
    0% {
        background-position : 0% 50%;
    }
    50% {
        background-position : 100% 50%;
    }
    100% {
        background-position : 0% 50%;
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
  transition: background-position 3sec;
  color: white;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 3px 4px 0px rgb(0 0 0/ 80%);
  &:hover {
    box-shadow: 0px 3px 4px 0px rgb(0 0 0/ 80%);
    background-size: 200% 200%;
    animation: ${SigninGradiantColor} 3s infinite;
    background-position: 100% 50%;
  }
`;

const StyledTextField = styled(TextField)`
  input {
    font-size: 16px; /* Change font size */
    font-family: Arial, sans-serif; /* Change font family */
    font-weight: bold; /* Change font weight */
  }
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const signupinititalvalue = {
  name: "",
  lastname: "",
  username : "",
  phone_no: "",
  email: "",
  password: "",
  confirm_password: "",
};

const logindata = {
  Username : "",
  Email: "",
  Password: "",
};

const Login = ({setUserAuthenticated}) => {
  const [account, setaccount] = useState("login");
  const [signin, setsignin] = useState(signupinititalvalue);
  const [login, setlogin] = useState(logindata);
  const [error, seterror] = useState('');

  const { set_account } = useContext(DataContext);

  // Navigation
  const navigate = useNavigate();
  
  const ToggleAccount = () => {
    account === "login" ? setaccount("Signup") : setaccount("login");
  };

  const imgurl = "./Picture/login-picture.jpg"; //Log in
  const signupimg = "./Picture/6159448.png"; //Sign up

  const handleinput = (e) => {
    setsignin({ ...signin, [e.target.name]: e.target.value });
  };

  // Signup

  const SingupUSer = async (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    try {
      const response = await API.UserSignup(signin);
      console.log("IsSuccess : ", response.isSucces);
      if (response.isSucces) {
        seterror('');
        setsignin(signupinititalvalue);
        setlogin('');
        ToggleAccount('login');
      }
      else {
        seterror('Something went wrong, please try again later');
      }
    }
    catch (error) {
      console.log("Error in signing up ", error)
      seterror("Something went wrong, please try again later");
    }
  };

  // Login

  const handleLoginInput = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) =>
  {
    e.preventDefault(e);
    console.log(e.target.name, e.target.value);
    try {
      const response = await API.UserLogin(login);
      if (response.isSucces)
      {
        seterror('');
        sessionStorage.setItem('accessToken', `Bearer${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer${response.data.refreshToken}`);
        set_account({
          Username: response.data.username,
          Email: response.data.email,
        });
        console.log("User Name :", response.data.username, "Email : ", response.data.email);

        console.log("Login successful");
        console.log("I am above navigation");
        setUserAuthenticated(true);
        navigate("/");
      }
      else
      {
        seterror("Login Failed");
        }
    }
    catch (error)
    {
      console.error("Error in login function", error);
      seterror("Error while logingin , please wait ");
    }

  }
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
              onChange={(e) => handleLoginInput(e)}
              name="email"
              value={login.email}
              variant="standard"
            />
            <StyledTextField
              id="standard-password"
              label="Password"
              type="password"
              onChange={(e) => handleLoginInput(e)}
              name="password"
              value={login.password}
              variant="standard"
            />
            <LoginButton variant="contained" onClick={(e) => handleLogin(e)}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SigninButton onClick={() => ToggleAccount()}>
              Create an account
            </SigninButton>
          </Wrapper>
        </LoginBlock>
      ) :
      (
        // Sign Up
        <SignUpBlock>
          <ImageContainer>
            <Image src={signupimg} alt="Login-Image" />
          </ImageContainer>
          <Wrapper>
            <StyledTextField
              id="standard-name"
              label="Name"
              name="name"
              value={signin.name}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-lastname"
              label="Last Name"
              name="lastname"
              value={signin.lastname}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-username"
              label="User Name"
              name="username"
              value={signin.username}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-contact no"
              label="Phone No"
              name="phone_no"
              value={signin.phone_no}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-sign in email"
              label="E-Mail"
              type="email"
              name="email"
              value={signin.email}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-sign in password"
              label="Password"
              type="password"
              name="password"
              value={signin.password}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-confirm password"
              label="Comfirm Password"
              type="password"
              name="confirm_password"
              value={signin.confirm_password}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            {seterror && <Text>{error}</Text>}
            <LoginButton variant="contained" onClick={(e) => SingupUSer(e)}>
              Register
            </LoginButton>{" "}
            {/* Sign in Button */}
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SigninButton onClick={() => ToggleAccount()}>
              Already have an account
            </SigninButton>
            {/* Login Button */}
          </Wrapper>
        </SignUpBlock>
      )}
    </Component>
  );
};

export default Login;