import React from "react";

function Card(props) {
  return (
    <div className="card" style=
    {{width: "50%", margin: "0 auto"}}>
    <img src={props.img} style=
    {{width: "50%", margin: "0 auto", borderRadius: "5px"}} className="card-img-top" alt="doggiestyle" />
  
   </div>

  );
}


export default Card;
