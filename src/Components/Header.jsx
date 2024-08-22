import Logo from "../assets/logo2.png";
import "../CSS Files/Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="Logo">
          <img href="#" src={Logo} alt="logo"></img>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">
                <button className="nav-btn">Home</button>
              </Link>
            </li>
            <li>
              <Link to="/Course-content">
                <button className="nav-btn" onClick={() => {}}>
                  Course Content
                </button>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <button className="nav-btn">Forum</button>
              </Link>
            </li>
            <li>
              <Link to="/Admin-Content-Management">
                <button className="nav-btn">Cart</button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="Profile">
          {/* <img src={user} alt="profile" /> */}
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </header>
    </>
  );
}

export default Header;
