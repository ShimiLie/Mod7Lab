import React from "react";
import Clock from "./components/Clock";
import Emoji from "./components/Emoji";
import Greetings from "./components/Greetings";

function App() {
  return (
    <>
       <Greetings />
        <Clock />
        <Emoji />
    </>
   
  );
}

export default App;
