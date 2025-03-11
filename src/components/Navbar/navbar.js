import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"; 

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signOutHandler = async () => {
    if (user) {
      await signOut(auth);
      console.log("User is logged out");
      navigate("/signin");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User:", currentUser.email);
        setUser(currentUser.email);
      } else {
        console.log("No user logged in");
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to='/' className="compy-name"><h2>MobileCovers</h2></Link>
      </div>

      <div className="navbar-right">
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/shop">Shop</Link>
        {user ? (
          <>
            <span className="user-email">{user}</span>
            <button onClick={signOutHandler} className="signout-btn">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
