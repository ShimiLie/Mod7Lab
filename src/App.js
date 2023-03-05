import React from "react";
import Clock from "./components/Clock";
import Emoji from "./components/Emoji";
import Greetings from "./components/Greetings";
import ThemeContextProvider from "./contexts/ThemedContext";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";



function App() {
  return (
    <>
      <BrowserRouter>
      <header>
      <h1>Assignment</h1>
        <nav>
         
          <Link to="/">Home</Link>
          <NavLink to="Dashboard">Dashboard</NavLink>
          <NavLink to="Posts">Posts</NavLink>
          <NavLink to="Profile">Profile</NavLink>
        </nav>
      </header>
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Posts" element={<Posts />} />
              <Route path="Profile" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>

      <h3>Acting as a divider</h3>


      <ThemeContextProvider>
        <Greetings />
        <Clock />
        <Emoji />
      </ThemeContextProvider>
       
    </>
   
  );
}

export default App;
