import React from "react";


const Header = (props) => {
  console.log("hi props");
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};


export default Header;
