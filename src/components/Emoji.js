import React, {useState, useContext} from "react";
import { ThemeContext } from "../contexts/ThemedContext";

const Emoji = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const[toggle, setToggle] = useState(true)


    const handleClick = () => {
        setToggle(!toggle);
    }


    return(
                <>
                    <p style={{ background: theme.bg }}>Press the button below to change the Emoji!</p>
                    <button onClick={handleClick} >Change Mood</button>    
                    {toggle ? "😍" : "😡"}
                </>
    )
}

export default Emoji;