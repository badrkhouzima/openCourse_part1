import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exer={props.exercises1} />
      <Part name={props.part2} exer={props.exercises2} />
      <Part name={props.part3} exer={props.exercises3} />
    </div>
  );
};
export default Content;
