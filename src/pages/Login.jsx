import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./login.css";
import Navbar from '../components/Navbar';
import Spline from '../components/Spline';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //firebase db
  const db = getFirestore();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Logged in successfully
        console.log('User logged in:', userCredential.user);
        const user = userCredential.user;
  
        // Get the user type from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userType = userDoc.data().userType;
          
          if (userType === "Freelancer") {
            navigate('/freelancer-homepage');
          } else if (userType === "Client") {
            navigate('/client-homepage');
          } else {
            // Handle other types or default
            navigate('/');
          }
        }
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message);
      });
  };

  return (
    <div id='main-container'>
    <div className="login-container">
      <h2>Login</h2>
      {/* <img id="img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ug6aykyoWPXUNlsch1mJEQHaEo%26pid%3DApi&f=1&ipt=299eb4dcc5b915239c31f8a1c389369ec99cfce181303e0524392a494a466804&ipo=images" alt="" /> */}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input">
          {/* <label htmlFor="email"></label> */}
          <input
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input'>
          {/* <label htmlFor="password"></label> */}
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      <p id = "alternate" onClick={() => navigate('/signup')}>
        Don't have an account? <span id="cup">Sign Up</span>
      </p>
        <div id="button">
        <button type="submit">Login</button>
        </div>
        <hr />

      </form>
      <p id='direct'>continue with</p>
      <i className="ri-google-fill google"></i>
    </div>
    {/* <div id='spline-container'>
          <Spline/>
      </div> */}
    </div>
  );
};

export default Login;
