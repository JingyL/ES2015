import React from "react";


const Box = (props) => {
    const id = props.id
    const width = props.width;
    const height = props.height;
    const color = props.color;
    const remove =()=>{
        props.handleRemove(id);
    } 
    return (
        <>
        <div 
        style={{
            height: `${height}em`,
            width: `${width}em`,
            backgroundColor: `${color}`,
          }}
          >
        </div>
        <button onClick={remove}>Remove The Box!</button>
        </>
    )
}


export default Box;