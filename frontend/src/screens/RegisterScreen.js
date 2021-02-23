import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPasword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPasword) {
      alert("Passwords are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>create Account</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="error">{error}</MessageBox>}
        <div>
          <label htmlFor="name">User name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            required
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">User Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPasword">Confirm Password</label>
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPasword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button type="submit" className="primary">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            Already has an account?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
