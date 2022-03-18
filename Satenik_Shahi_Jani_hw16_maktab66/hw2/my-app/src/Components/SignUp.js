import React, { useState, useEffect,memo } from "react";
import PasswordInput from "./PasswordInput";

function SignUp() {
  const [study, setStudy] = useState(false);
  const [datafetch, setdatafetch] = useState({});
  const [city, setcity] = useState([]);
  const [datasignUp, setdataUp] = useState({city:"",state:""});
  const [showvalid, setshowvalid] = useState(false);


  const handelChangeEDU = (event) => {
    const select = event.target.value;
    if (select === "0") {
      datasignUp.edulocation = "";
      datasignUp.edu = "";
       setStudy(false);
    } else {
      setdataUp({ ...datasignUp, [event.target.name]: event.target.value });
       setStudy(true);
    }
    // console.log(datasignUp);
  };
  const handlepass = (item) => {
    setdataUp({ ...datasignUp, ["pass"]: item });
    // console.log(datasignUp);
  };
  const handledata = (e) => {
    setdataUp({ ...datasignUp, [e.target.name]: e.target.value });
    // console.log(datasignUp);
  };
  const handlestate = (event) => {
    datasignUp.city = "";
    setdataUp({ ...datasignUp, [event.target.name]: event.target.value });
    setcity([]);
    const select = event.target.value;
    if (select === 0) {
      return setcity([]);
    } else {
      Object.keys(datafetch).map((item) => {
        if (item === select) {
          return setcity(datafetch[item]);
        }
      });
    }
    // console.log(datasignUp);
  };
  useEffect(() => {
    fetch("/json/iranstates.json")
      .then((response) => response.json())
      .then((res) => {
        setdatafetch(res);
      });
  }, []);
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(datasignUp)
    if(datasignUp.city==="" || datasignUp.city==="0" || datasignUp.state==="" || datasignUp.state==="0"){
        return setshowvalid(true);
    }else{
        setshowvalid(false);
        alert("Good Job!!!");
    }
  }
  return (
    <form className="signup-container" onSubmit={(event)=>handlesubmit(event)} >
      <h2>رایگان ثبت نام کنید</h2>
      <div className="container--inside">
        <div className="contain-1">
          <label>نام</label>
          <input
            onChange={(e) => handledata(e)}
            type="text"
            name="fname"
            // value={}
            placeholder="&#8226; نام"
            required
          />
        </div>
        <div className="contain-1">
          <label>نام خانوادگی</label>
          <input
            onChange={(e) => handledata(e)}
            type="text"
            name="lname"
            // value={}
            placeholder="&#8226; نام خانوادگی"
            required
          />
        </div>
      </div>
      <div className="container--inside">
        <div className="contain-1">
          <label>میزان تحصیلات</label>
          <select onChange={handelChangeEDU} required name="edu">
            <option value="0">&#8226;میزان تحصیلات</option>
            <option value="Degree">سیکل</option>
            <option value="Diploma">دیپلم</option>
            <option value="Adegree">فوق دیپلم</option>
            <option value="Bachelor">لیسانس</option>
            <option value="MA">فوق لیسانس</option>
            <option value="Doctorate">دکترا</option>
          </select>
        </div>
        {study && (
          <div className="contain-1">
            <label>محل تحصیل </label>
            <input
              onChange={(e) => handledata(e)}
              name="edulocation"
              type="text"
              placeholder="&#8226;محل تحصیل"
              required
              // value={}
            />
          </div>
        )}
      </div>
      <div className="container--inside">
        <div className="contain-1">
          <label>استان</label>
          <select required onChange={handlestate} name="state">
            <option value="0" >
              {" "}
              &#8226; استان محل تولد
            </option>
            {Object.keys(datafetch).map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {showvalid && <span className="warning">لطفا فیلد را پر کنید.</span>}
        </div>
        <div className="contain-1">
          <label>محل تولد</label>
          <select required name="city" onChange={(e) => handledata(e)}>
            <option value="0">
              &#8226;شهر محل تولد
            </option>
            {city.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {showvalid && <span className="warning">لطفا فیلد را پر کنید.</span>}
        </div>
      </div>
      <label className="username-login">پست الکترونیک</label>
      <input
        onChange={(e) => handledata(e)}
        name="email"
        type="email"
        // value={}
        // ref={refemail}
        required
        placeholder="&#8226; پست الکترونیک"
      />
      <label className="password-login">کلمه عبور</label>
      <PasswordInput inputpass={handlepass} />
      <button
        className="submit-login"
        type="submit"
      >
        ثبت نام
      </button>
    </form>
  );
}

export default memo(SignUp);
