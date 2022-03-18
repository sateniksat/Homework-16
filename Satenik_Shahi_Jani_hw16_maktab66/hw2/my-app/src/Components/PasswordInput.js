import React, { useState ,memo} from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function PasswordInput({ inputpass }) {
  const [visiblity, setvisibility] = useState(false);
  const [showvalid, setshowvalid] = useState(false);
  // const eyeSlash=<span className="iconify" data-icon="bi:eye-slash-fill" data-width="25" data-height="25" style={{ color: "white" }}></span>;
  // const eye=<span className="iconify" data-icon="bi:eye-fill" data-width="25" data-height="25" style={{ color: "white" }}></span>;

  const handlevalidation = (e) => {
    let input = e.target.value;
    if (input.length < 6) {
      return setshowvalid(true);
    } else {
        inputpass(input)
      return setshowvalid(false);
    }
  };
  return (
    <div className="login-pass">
      <input
        //   onChange={input}
        onChange={(e) => handlevalidation(e)}
        className="login-pass"
        name="pass"
        type={visiblity ? "text" : "password"}
        // value
        required
        placeholder="&#8226; کلمه عبور"
      />
      <div className="pass-eye" onClick={() => setvisibility(!visiblity)}>
        {visiblity ? <IoMdEye /> : <IoMdEyeOff />}
      </div>
      {showvalid && (
        <span className="warning">
          کلمه عبور باید حداقل ۶ کاراکتر داشته باشد.
        </span>
      )}
    </div>
  );
}

export default memo(PasswordInput);
