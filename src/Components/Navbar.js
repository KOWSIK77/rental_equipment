import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Navbar = () => {
  return (   
<Container>
<nav class="navbar " id="bar">
  <div class="container-fluid">
    <img class="navbar-brand" src="./rentazon.png" alt="..."></img>
    <form class="d-lg-inline-flex" id='form' role="search">
      <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" id='find' />
      <button class="btn btn-outline-success" id="btn_search" type="submit"><img src="./search_ico.png" id="cart" alt="..."></img></button>
      <Link to="/login"><button class="btn btn-outline-success ms-1 mt-1" id='btn_login' type="submit">Login</button></Link>
      <div id="combine">

       <Link to='/order'><Badge badgeContent={4} color="primary"><ShoppingCartIcon id="mat_cart"></ShoppingCartIcon></Badge></Link>

      </div>
      
    </form>
   
  </div>
</nav>
</Container>
   
  );
};

const Container=styled.div`
#bar{
    background-color:#ffe6e6;
}
.navbar-brand{
    width:150px;
}
.cart{
    width:60px;
    position:relative;

}

#cart{ 
    position:relative;
    width:40px;
    margin-left:4px;
}

#btn_search{
    width:50px;
    height:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
}

#btn_login{
    width:70px;
    height:40px;

    #form{
        felx-direction:column;
        align-items:center;
    }
}

#find{
  width:68rem;
}

.count{
    font-size:10px;
   position:absolute;
   margin-left:38px;
   margin-top:17px;
 
    

}

#combine{
  margin-left:4px;
  margin-right:20px;
  display:flex;
  flex-direction:row;
  align-items:center ;
  
}

#mat_cart{
  width:40px;
  height:40px;
}
`

export default Navbar;
