import React from "react";
import SingleButton from "./SingleButton";
import "./ColorButtons.css"

//destructuring here to remove the need to type 'props'
const ColorButtons = ({options, addCircle}) => {
    return(
        <div className="buttons">
            {options.map(color => (
                <SingleButton color={color} addCircle={addCircle} />
            ))}     
        </div>
    )
}

export default ColorButtons