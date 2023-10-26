import React from "react";
import './SubPart1.css';


function SubPart1(props){

    return(
        <>
        <div className="SubPart1">
        <h1 className="SubPart_h1">
           {props.data_1}
            </h1>
        </div>
        </>
    )
}
export default SubPart1;