import React, { useState, memo } from "react";
import PasswordInput from "./PasswordInput";

function LogIn() {
  const [data, setdata] = useState({});

  const handlepass = (item) => {
    setdata({ ...data, ["pass"]: item });
    // console.log(data)
  };

  const handleChangeInput = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert("Good Job!!!");
  };
  return (
    <form className="login-container">
      <h2>خوش آمدید</h2>
      <label className="username-login">پست الکترونیک</label>
      <input
        type="email"
        name="email"
        onChange={(e) => handleChangeInput(e)}
        // ref={refemail}
        required
        placeholder="&#8226; پست الکترونیک"
      />
      <label className="password-login">کلمه عبور</label>
      <PasswordInput inputpass={handlepass} />
      <div className="forgot-pass">فراموش کردید؟</div>
      <button
        onClick={(event) => handlesubmit(event)}
        className="submit-login"
        type="submit"
      >
        ورود
      </button>
    </form>
  );
}

export default memo(LogIn);
