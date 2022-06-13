import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import { Card } from "@mui/material";
import { UserContext } from "../context/UserContext";
import { getPlan } from "../service/plan";

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
    } else {
      const plan = await getPlan();
      if (plan) {
        navigate("/dashboard");
      } else {
        navigate("/taskPage");
      }
    }
  };

  return (
    <div className="home-container">
      <img src="/weblogo.png" className="site-logo" />
      <Card className="hero-card">
        <h1 className="title">Neuro Adulting</h1>
        <p>
          1 in 7 adults are considered Neurodivergent. Meaning their brain is
          wired a little different than adults who are considered Neurotypical
          or "average". Having ADHD falls under the umbrella of Neurodivergence.
          Weekly chores and basic self care routines are a STRUGGLE to maintain
          when your brian functionality is wired to process 100 different things
          all at once. The longer your list of things to accomplish gets, the
          more your brain is working overtime. This app segments your weekly
          accomplishments into manageable daily tasks and habits to be tracked.
        </p>

        <button className="button" onClick={() => onClick()}>
          Get Started
        </button>
      </Card>
    </div>
  );
};
