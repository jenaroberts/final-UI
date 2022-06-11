import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import { Card } from "@mui/material";
import { UserContext } from "../context/UserContext";

export const Home = () => {
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/taskPage");
      })
      .catch((error) => alert(error.message));
  };

  const onClick = async () => {
    if (!user) {
      await login();
    }
  };
  return (
    <div className="home-container">
      <img src="/weblogo.png" className="site-logo" />
      <Card className="hero-card">
        <h1 className="title">Nuero Adulting</h1>
        <p>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah
        </p>

        <button className="button" onClick={() => onClick()}>
          Get Started
        </button>
      </Card>
    </div>
  );
};
