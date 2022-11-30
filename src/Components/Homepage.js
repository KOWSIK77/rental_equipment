import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Card from "./Card";
import "../bootstrap/dist/css/bootstrap.min.css";
const Homepage = () => {
  return (
    <Container>
      <Navbar></Navbar>

      <Banner>
        <img src="./banner.png" class="img-fluid" alt="..."></img>
      </Banner>
 
      <Card></Card>

    
      
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
`;

export default Homepage;
