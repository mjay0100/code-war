import React from "react";
import { Link } from "react-router-dom";
import project4 from "../assets/images/project4.png";

const Error = () => {
  return (
    <section className="mx-auto  text-center">
      <h1 className="text-2xl text-center capitalize font-semibold p-5 bg-blue-200">
        About Me
      </h1>
      <img src={project4} className="mx-auto w-[200px] my-5" alt="Project" />
      <hr />
      <p className="text-center w-4/5 mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima illum
        repudiandae voluptates possimus, nam, suscipit tempora voluptatem libero
        dignissimos repellendus doloribus molestiae sapiente? Doloribus, minima
        nostrum ab aut adipisci magni praesentium totam! Soluta ut voluptatum
        ipsum numquam consequuntur fugiat quidem?
      </p>
      <h1 className="text-2xl text-center capitalize font-semibold p-5 ">
        My Tech Stack
      </h1>
      <ol>HTML</ol>
      <ol>CSS</ol>
      <ol>JAVASCRIPT</ol>
    </section>
  );
};

export default Error;
