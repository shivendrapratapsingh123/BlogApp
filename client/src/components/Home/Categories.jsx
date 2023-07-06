import { Button, Table, TableBody, TableCell, TableHead, TableRow,styled } from "@mui/material"

import { categories } from "../../constants/data";
import { Link, useSearchParams } from "react-router-dom";

const StyledTable = styled(Table)`
border: 1px solid rgba(244, 244, 244, 1);`;

const StyledButton = styled(Button)`
margin:20px;
width:85%;
background:#6495ED;
color:#fff;`;

const StyledLink = styled(Link)`
text-decoration:none;
color:inherit;`

const Categories = () =>{

  const [seachParams] = useSearchParams();
  const category = seachParams.get("category");


  return (
<>
 <StyledLink to={`/create?category=${category || "" }`}>
  <StyledButton variant="contained">Create BLOG</StyledButton>
  </StyledLink>
  <StyledTable>
    <TableHead>
       <TableRow>
        <TableCell>
        <StyledLink to="/">
          All categories
          </StyledLink>
        </TableCell>
       </TableRow>
    </TableHead>
    
    <TableBody>
    {
      categories.map(category =>(
        <TableRow key={category.id}>
      <TableCell>
      <StyledLink to={`/?category=${category.type}`}>
        {category.type}
        </StyledLink>
      </TableCell>
    </TableRow>
      ))
    }
    </TableBody>
  </StyledTable>
</>
  )
}

export default Categories;