import React, {useState, useContext} from "react";


const Emojii = () => {
     const[toggle, setToggle] = useState(true)


    const handleClick = () => {
        setToggle(!toggle);
    }


    return(
                <>
                    <p>Press the button below to change the Emoji!</p>
                    <button onClick={handleClick} >Change Mood</button>    
                    {toggle ? "😍" : "😡"}
                </>
    )
}

export default Emojii;