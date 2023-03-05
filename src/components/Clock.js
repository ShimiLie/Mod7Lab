import React, {useState, useEffect} from "react";

const Clock = () => {
    const [clockState, setClockstate] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockstate(date.toLocaleTimeString());
        }, );
    }, []);


    return (
        <>
            <div>{clockState}</div>
        </>
    )
}


export default Clock;