import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import CreateCharacter from "./components/CreateCharacter";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Profile from "./components/Profile";
import CharacterProfile from "./components/CharacterProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createcharacter" element={<CreateCharacter />} />
          <Route path="/characterprofile/:id" element={<CharacterProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
