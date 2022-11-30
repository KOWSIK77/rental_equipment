import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <Container>
    <Link to="/"><Logo>  <img src="./rentazon.png" alt=""></img></Logo></Link>
      

      <Form>
        <h3>Create an account</h3>
        <Inputconatiner>
          <p>Name:</p>
          <input type="Name" placeholder="Username"></input>
        </Inputconatiner>    
    
    
        <Inputconatiner>
      <p>E-mail:</p>
          <input type="name" placeholder="Enter your mail"></input>
        </Inputconatiner>

        <Inputconatiner>
          <p>Password:</p>
          <input type="password" placeholder="********"></input>
        </Inputconatiner>

        <Buttonbox>
          <button>Sign-Up</button>
        </Buttonbox>

        <Terms>
          <p>
            By continuing, you agree to our <span>terms and condition</span>
          </p>
        </Terms>
      </Form>

      <Signed>

        <Link className="btn" to="/login">Back to login</Link>
      </Signed>

    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 600px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  margin-up: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 300px;
  img {
    width: 100%;
  }
`;

const Form = styled.form`
  border: 1px solid grey;
  border-radius: 10px;
  width: 60%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h3 {
    font-size: 30px;
    font-weight: 600;
    align-self: center;
    margin-bottom: 30px;
    margin-top: 60px;
    line-height: 33px;
  }
`;

const Inputconatiner = styled.div`
  width: 100%;
  padding: 10px;
  padding-top: 0px;
  margin-top: 0px;

  p {
    font-size: 22px;
  }
  input {
    width: 95%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid grey;

    &:hover {
      border: 1px solid red;
      padding: 15px;
    }
  }
`;
const Buttonbox = styled.div`
  width: 100%;
  height: 35px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  button {
    border:none;
    border-radius: 17px;
    width: 30%;
    padding: 8px;
    background-color: #ff5757;
    color: #f6f6f6;
    font-weight: 600;

    &:hover {
      border: 3px solid red;
      background-color: white;
      color: red;
      padding: 7px;
    }
  }
`;

const Terms = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  span {
    color: red;
  }
`;

const Signed = styled.div`
  width: 30%;
  text-align: center;
  margin-top: 20px;
&:hover{
  width:50%;
}

  .btn {
    border:none;
    width:100%;
    padding:10px;
    border-radius:20px;
    color: red;
font-size:25px;
    background-color: #ff5757;
    color: #f6f6f6;
    &:hover {
      color: #ff5757;
      background-color:white;
      border:2px solid red;
    }
  }
`;
export default Signup;
