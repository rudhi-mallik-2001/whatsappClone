import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import  Contacts  from "./Component/Contacts/Contacts"
import styled from "styled-components";
import Chat from './Component/Chat/chat';
import  Login  from "./Component/Login/Login";
const Container=styled.div`display:flex;flex-direction:raw;height:100vh;width:100vw;background:#f0f2f5;`;
function App() {
  return (
    <Container >
      <Router>
        <Fragment>
          <Routes>
            <Route path="/chat" element={<Chat/>}></Route>
            <Route path="/Contacts" element={<Contacts/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </Container>
  );
}

export default App;
