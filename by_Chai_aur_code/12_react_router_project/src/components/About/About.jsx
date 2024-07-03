import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <div width={300} bg-gray-500>
        About
      </div>
      <Outlet />
    </>
  );
}

export default About;
