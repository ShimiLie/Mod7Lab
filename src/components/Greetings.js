import React, { useState } from "react";

const Greetings = () => {

    const [greeting, setGreeting] = useState("world")




    return (
        <>
            <p>Hello {greeting}! </p>
            <button onClick={() => {setGreeting("Anthony")}}>Change World to Anthony!</button>
            
        </>
    )
}


export default Greetings;

