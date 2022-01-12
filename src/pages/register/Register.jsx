import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Network</h3>
          <span className="loginDesc">Connect with EveryOne</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="Username" className="loginInput" />
            <input type="Email" className="loginInput" />
            <input type="Password" className="loginInput" />
            <input type="PasswordAgain" className="loginInput" />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
