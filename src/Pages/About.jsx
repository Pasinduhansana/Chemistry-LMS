import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Click to go Home
      </button>
    </div>
  );
}
export default About;
