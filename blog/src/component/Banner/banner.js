import { Typography, Box, styled } from "@mui/material";
const Image = styled(Box)`
  background: url(/project_picture/nikita-kachanovsky-OVbeSXRk_9E-unsplash.jpg) center/75% repeat-x #000;
  background-size: cover;
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled(Typography)`
font-size : 70px;
color : white;
font-weight : bold;
`

const SubHeading = styled(Typography)`
font-size : 20px;
background-color : #ffff;
`
const Banner = () =>
{
  return (
    <Image>
      <Heading>Hello from banner</Heading>
      <SubHeading>Hello from banner</SubHeading>
    </Image>
  );
}

export default Banner;