import React, { useState } from "react";
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
import CharacterProfileEdit from "./components/CharacterProfileEdit";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));
  const [userid, setUserid] = useState(null);

  return (
    <Router>
      <Navbar auth={auth} setAuth={setAuth} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login setAuth={setAuth} />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute setAuth={setAuth}>
                <Profile setUserid={setUserid} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createcharacter"
            element={
              <ProtectedRoute setAuth={setAuth}>
                <CreateCharacter userid={userid} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/characterprofile/:id"
            element={
              <ProtectedRoute setAuth={setAuth}>
                <CharacterProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/characterprofile/:id/edit"
            element={
              <ProtectedRoute setAuth={setAuth}>
                <CharacterProfileEdit />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
