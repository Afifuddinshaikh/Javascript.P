import React from "react";
function Note(props) {
    return(
        <div className="note">
        <h2>{props.title}</h2>
        <h2>${props.amount}</h2>
    </div>
    )
    
    
}
export default Note;