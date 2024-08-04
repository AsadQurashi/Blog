import { Button, styled, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { cetegories } from "../../constant/data";

const StyledTable = styled(Table)`
border :1px solid rgba(224, 224 , 224 ,1);
`
const StyledButton = styled(Button)`
  margin: 5%;
  width: 85%;
  background: #6495ed;
  background-color: rgb(12 , 89 ,122 , 44);
  color: #fff;

  // &:hover {
  //   background: #6495ed;
  //   color: #fff;
  // }
`;

const StyledLink = styled(Link)`
text-decoration : none;
color : inherit;
`

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category'); 
    return (
      <>
        <StyledLink
          style={{ textDecoration: "none" }}
          to={`/createpost?category=${category || ''}`}
        >
          <StyledButton variant="contained">Create Blog</StyledButton>
        </StyledLink>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <StyledLink to="/">
                  All Categories
                </StyledLink>
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cetegories.map((category, id) => (
              <TableRow key={id}>
                <TableCell>
                  <StyledLink to={`/?category=${category.type}`}>
                    {category.type}
                  </StyledLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </>
    );
};

export default Categories;