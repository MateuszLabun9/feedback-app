import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React App to leave feedback</p>
        <Link to='/'>Back To Home Page</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
