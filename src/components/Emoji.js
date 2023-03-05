import React, {useState} from "react";

const Emoji = () => {
    const[toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle);
    }


    return(
        <>
              
            <button onClick={handleClick} >Change Mood</button>    
            {toggle ? "😍" : "😡"}
        </>
    )
}

export default Emoji;