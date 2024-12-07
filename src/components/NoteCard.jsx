import React from "react";


function noteCard(props) {
    return(
        <h1>{props.name}</h1>
      <p>{props.content}</p>
    )
}
export default noteCard;
