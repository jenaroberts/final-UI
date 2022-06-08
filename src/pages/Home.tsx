import React from "react";
import { useEffect, useState } from "react";
import { Card } from "@mui/material";

export const Home = () => {
  return (
    <div className="container">
      <img src="/weblogo.png" className="site-logo" />
      <Card className="card">
        <h1 className="title">Nuero Adulting</h1>
        <p>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah
        </p>

        <button className="button">Log In </button>
      </Card>
    </div>
  );
};
