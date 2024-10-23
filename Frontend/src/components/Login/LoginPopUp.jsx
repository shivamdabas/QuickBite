import React, { useState } from "react";
import style from "./loginPopUp.module.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className={style.LoginPopUp}>
      <form className={style.LoginPopUpContainer}>
        <div className={style.LoginPopUpTitle}>
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => {
              setShowLogin(false);
            }}
          />
        </div>
        <div className={style.LoginPopUpInputs}>
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className={style.LoginPopUpConditon}>
          <input type="Checkbox" required />
          <p>I agree to the terms and conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            If you don't have an account, <span onClick={()=>setCurrState("Sign Up")}>Click Here To Create</span>
          </p>
        ) : (
          <p>
            Already Have an Account? <span onClick={()=>setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
