import { Box, Button, TextField, Typography, keyframes, styled } from '@mui/material';
import { useState } from 'react';
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
  phone_no: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Login = () => {
  const [account, setaccount] = useState("login");
  const [data, setdata] = useState(signupinititalvalue);
  const [error , seterror] = useState('');
  const ToggleAccount = () => {
    account === "login" ? setaccount("Signup") : setaccount("login");
  };

  const imgurl = "./Picture/login-picture.jpg"; //Log in
  const signupimg = "./Picture/6159448.png"; //Sign up

  const handleinput = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const SingupUSer = async (e) =>
  {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    const response = await  API.UserSignup(data);
    console.log("This is api",API.UserSignup);
    if(response.isSuccess)
    {
      seterror('');
      setdata(signupinititalvalue);
      ToggleAccount('login');
    }
    else
    {
      seterror('Something went wrong, please try again later');
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
              id="standard-basic"
              label="Email"
              type="email"
              onChange={(e) => handleinput(e)}
              name="email"
              value={data.email}
              variant="standard"
            />
            <StyledTextField
              id="standard-basic"
              label="Password"
              type="password"
              onChange={(e) => handleinput(e)}
              name="password"
              value={data.password}
              variant="standard"
            />
            <LoginButton variant="contained" onClick={(e)=> SingupUSer(e)}>Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SigninButton onClick={() => ToggleAccount()}>
              Create an account
            </SigninButton>
          </Wrapper>
        </LoginBlock>
      ) : (
        // Sign Up
        <SignUpBlock>
          <ImageContainer>
            <Image src={signupimg} alt="Login-Image" />
          </ImageContainer>
          <Wrapper>
            <StyledTextField
              id="standard-basic"
              label="Name"
              name="name"
              value={data.name}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-basic"
              label="Last Name"
              name="lastname"
              value={data.lastname}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-basic"
              label="Phone No"
              name="phone_no"
              value={data.phone_no}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-basic"
              label="E-Mail"
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            <StyledTextField
              id="standard-basic"
              label="Comfirm Password"
              type="password"
              name="confirm_password"
              value={data.confirm_password}
              onChange={(e) => handleinput(e)}
              variant="standard"
            />
            {error && <Typography>{error}</Typography> }
            <LoginButton variant="contained" onClick={(e) => SingupUSer(e)} >Register</LoginButton>{" "}
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