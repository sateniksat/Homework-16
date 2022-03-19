import React, { useState, memo } from "react";
import PasswordInput from "./PasswordInput";

function LogIn() {
  const [data, setdata] = useState({ email: "", pass: "" });
  const [showvalid, setshowvalid] = useState(false);

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
    if (data.pass === "" || data.email === "") {
      return setshowvalid(true);
    } else {
      setshowvalid(false);
      alert("Good Job!!!");
    }
  };


  return (
    <form className="login-container">
      <h2>خوش آمدید</h2>
      <label className="username-login">پست الکترونیک</label>
      <input
        type="email"
        name="email"
        onChange={(e) => handleChangeInput(e)}
        required
        placeholder="&#8226; پست الکترونیک"
      />
      {showvalid && <span className="warning">لطفا فیلد را پر کنید.</span>}
      <label className="password-login">کلمه عبور</label>
      <PasswordInput inputpass={handlepass} />
      {showvalid && <span className="warning">لطفا فیلد را پر کنید.</span>}
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
