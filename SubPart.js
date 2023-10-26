import React from "react";
import './SubPart.css';
function SubPart(props){

    return(
        <div className="object">
        <h1 className="Article">
            {props.data}
            </h1>
        </div>
    )
}
export default SubPart;