import React, { useState } from "react";
import './App.css';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



import Welcome from "./pages/home/Welcome";
import Home from "./pages/Home";


function App() {

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <AuthProvider >
          <Routes>
           
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Layout><Home /></Layout>} />
           
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
