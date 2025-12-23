import { Link } from "react-router-dom";
import LoginFields from "../components/login/loginFields";
import "../styles/Login.css";
import Logo from "../assets/Logo.png";
export default function Login() {
  return (
    <div className="login-container">
      <img src={Logo} alt="TabFood Logo" className="onboarding-logo" />

      <h1>Login to Your Account</h1>

      <LoginFields />

      <button className="login-button">Login</button>

      <p>
        New to TabFood? <Link to="/signup">Sign Up</Link>
      </p>

      <p>
        Go to <Link to="/home">Home</Link>
      </p>
    
    </div>
  );
}
