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


function App() {
  return (
    <>
      <BrowserRouter>
      <header>
        <nav>
          <h1>Assignment</h1>
          <Link to="/">Home</Link>
          <NavLink to="Dashboard">Dashboard</NavLink>
          <NavLink to="Posts">Posts</NavLink>
        </nav>
      </header>
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Posts" element={<Posts />} />
          </Routes>
        </main>
      </BrowserRouter>

      <div>
        `Some 
        Placeholder
        Text
        to separate`
      </div>


      <ThemeContextProvider>
        <Greetings />
        <Clock />
        <Emoji />
      </ThemeContextProvider>
       
    </>
   
  );
}

export default App;
