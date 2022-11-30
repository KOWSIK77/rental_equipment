import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Homepage from "./Components/Homepage";
import Order from "./Components/Cart/Order";

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
 
width:100vw;
`;

export default App;
