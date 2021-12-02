import React from "react";


export default function Note(props){

  function handleClick() {
    props.onDelete(props.id);
  }

  return(
    <div className="note" style={props.color}>
        <h1 className="key">{props.id}</h1> 
        <h1>{props.titel}</h1>
        <p>{props.notep}</p>
        <button onClick={handleClick}>✂ </button>
    </div>
);
}


