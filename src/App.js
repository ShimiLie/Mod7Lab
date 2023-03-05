import React from "react";
import Clock from "./components/Clock";
import Emoji from "./components/Emoji";
import Greetings from "./components/Greetings";
import ThemeContextProvider from "./contexts/ThemedContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Greetings />
        <Clock />
        <Emoji />
      </ThemeContextProvider>
       
    </>
   
  );
}

export default App;
