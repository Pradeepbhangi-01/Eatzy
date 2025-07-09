import React from "react";
import User from "./User";
import UserClass from "./UserClass";

function About() {
  return (
    <div>
      About Page
      <p>
        This is a simple React application demonstrating routing with React
        Router.
      </p>
      <UserClass name={"Praz"} topic={"Class Component"} />
    </div>
  );
}

export default About;
