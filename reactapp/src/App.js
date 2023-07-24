import React, { useState } from "react";
import './App.css';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Welcome from "./pages/home/Welcome";
import Home from "./pages/Home";
import AdminHomePage from "./Admin/AdminHomePage";
import AddHotelHomePage from "./Admin/AddHotel/AddHotelHomePage";
import AddHotel from "./Admin/AddHotel/AddHotel";
import EditHotel from "./Admin/AddHotel/EditHotel";
import ViewHotel from "./Admin/AddHotel/ViewHotel";
import AddManagerHomePage from "./Admin/AddManager/AddManagerHomePage";
import AddManager from "./Admin/AddManager/AddManager";
import EditManager from "./Admin/AddManager/EditManager";
import ViewManager from "./Admin/AddManager/ViewManager";
import AddRoomHomePage from "./Admin/AddRoom/AddRoomHomePage";
import AddRoom from "./Admin/AddRoom/AddRoom";
import EditRoom from "./Admin/AddRoom/EditRoom";
import ViewRoom from "./Admin/AddRoom/ViewRoom";
import HotelManager from "./HotelManager/HotelManager";



function App() {

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <AuthProvider >
          <Routes>
           
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Layout><Home /></Layout>} />

            <Route exact path="/all-bookings" element={<Layout><AdminHomePage /></Layout>} />
            <Route exact path="/all-hotels" element={<Layout><AddHotelHomePage /></Layout>} />
            <Route exact path="/add-hotel" element={<Layout><AddHotel /></Layout>} />
            <Route exact path="/edit-hotel/:id" element={<Layout><EditHotel /></Layout>} />
            <Route exact path="/view-hotel/:id" element={<Layout><ViewHotel /></Layout>} />
            <Route exact path="/all-managers" element={<Layout><AddManagerHomePage /></Layout>} />
            <Route exact path="/add-manager" element={<Layout><AddManager /></Layout>} />
            <Route exact path="/edit-manager/:id" element={<Layout><EditManager /></Layout>} />
            <Route exact path="/view-manager/:id" element={<Layout><ViewManager /></Layout>} />
            <Route exact path="/all-rooms" element={<Layout><AddRoomHomePage /></Layout>} />
            <Route exact path="/add-room" element={<Layout><AddRoom /></Layout>} />
            <Route exact path="/edit-room/:id" element={<Layout><EditRoom /></Layout>} />
            <Route exact path="/view-room/:id" element={<Layout><ViewRoom /></Layout>} />

            <Route exact path="/hotelmanager" element={<Layout><HotelManager /></Layout>} />
           
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
