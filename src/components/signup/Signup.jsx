import "./Signup.css";
function Signin(props) {
  const handleSigninClick = () => {
    props.setIsSigned(true);
  };
  return (
    <div className="signup">
      <div className="imageBox2"></div>
      <div className="formBox">
        <div className="entete">
          <div className="logo">TP1APP</div>
          <div className="goSignup">
            <span>Have an account ?</span>
            <button className="signupBtn" onClick={handleSigninClick}>
              Sign in
            </button>
          </div>
        </div>
        <div className="body">
          <div className="title2">GetStarted with TP1 App</div>
          <div className="subtitle2">Getting started is easy</div>
          <div className="signinForm">
            <input type="text" value="" onChange="" placeholder="Full Name" />
            <input type="text" value="" onChange="" placeholder="Enter Email" />
            <input
              value=""
              onChange=""
              placeholder="Password"
              type="password"
            />
            <input
              value=""
              onChange=""
              placeholder="Confirm Password"
              type="password"
            />
            <button>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
