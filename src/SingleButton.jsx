import React from "react";


//destructuring here to remove the need to type 'props'
const SingleButton = ({color, addCircle}) => {
    return(
        <button 
            onClick={ ()=> addCircle(color) } 
            className="ColorButton-btn"
            style = {{backgroundColor: color}}>
                {color}
        </button>
        )
    }


export default SingleButton