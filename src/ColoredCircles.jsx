import React, {useState} from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

function getRandom(min=0, max=100){
    return Math.random() * (max-min) + min;
}

const ColoredCircles = () => {
    const [circles, setCircles] = useState([]);

    //This creates a new array, which will trigger the component to re-render and update the circle display
    const addCircle = (color) => {
        setCircles(circles => [...circles, {color, x: getRandom(), y: getRandom() }])
    }

    const changePosition = idx => {
        setCircles(circles => {
            const copy = [...circles]
            copy[idx].x = getRandom();
            copy[idx].y = getRandom();
            return copy;
        });
    }

    
//     const changePosition = idx => {
//         setCircles(circles => {
//             //using map to make a copy (only want to update copies of objects and elements)
//             circles.map((circle, i) => ( 
//             //is this the one circle object we want to update?
//                 i === idx 
//                     // yes, update
//                     ?  {...circle, x: getRandom(), y:getRandom()}
//                     //no, leave it
//                     : circle
//             )) 
//         }
//     )
// }


    return(
        <div>
            {/* adding addCircle as a prop allows us to call thid funtion in ColorButtons triggering a re-render */}
            <ColorButtons addCircle={addCircle} options={['paleturquoise', 'yellow', 'lightGreen']} />
            
            {circles.map(({color, x, y}, idx) => (
                <Circle 
                    changePosition={changePosition} 
                    color={color} 
                    idx={idx} 
                    key={idx} 
                    x={x} 
                    y={y}/>
            ))}
        </div>
    )
}

export default ColoredCircles;