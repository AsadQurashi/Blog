import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

// Style
const Component = styled(AppBar)`
background : #FFFFFF;
color : #000000;
`;

const Container = styled(Toolbar)`
justify-content : center;
& > a {
    padding : 20px;
    color : #000000;
    text-decoration : none;
}
`;
const Header = () =>
{
    return (
        <Component>
            <Container>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/faq'>FQA</Link>
            </Container>
        </Component>
    )
}

export default  Header ;