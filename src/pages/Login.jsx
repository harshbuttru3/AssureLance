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
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/signup')}>
        Don't have an account? Sign Up
      </button>
    </div>
    {/* <div id='spline-container'>
          <Spline/>
      </div> */}
    </div>
  );
};

export default Login;
