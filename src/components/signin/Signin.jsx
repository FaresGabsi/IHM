import "./Signin.css";
import { useState } from "react";
function Signin(props) {
  const handleSignupClick = () => {
    props.setIsSigned(false);
  };

  const initialValues = {
    email: "",
    pass: "",
  };
  const [formData, setFormData] = useState(initialValues);
  const changeEmail = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
  };
  const changePass = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      pass: event.target.value,
    }));
  };
  return (
    <div className="signin">
      <div className="formBox">
        <div className="entete">
          <div className="logo">TP1APP</div>
          <div className="goSignup">
            <span>Dont have account ?</span>
            <button className="signupBtn" onClick={handleSignupClick}>
              Sign up
            </button>
          </div>
        </div>
        <div className="body">
          <div className="title">Welcome Back</div>
          <div className="subtitle">Login into your account</div>
          <div className="signinForm">
            <input
              type="text"
              value={formData.email}
              onChange={changeEmail}
              placeholder="Email"
            />
            <input
              value={formData.pass}
              onChange={changePass}
              placeholder="Password"
              type="password"
            />
            <button>Login</button>
          </div>
        </div>
      </div>
      <div className="imageBox"></div>
    </div>
  );
}

export default Signin;
