import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const userType = location.state?.userType || "Client"; // Default to "Client" if not specified
  const auth = getAuth();
  const db = getFirestore();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store usertype in Firestore or in the user's profile
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        userType: userType
      });

      // Redirect to the appropriate homepage
      if (userType === "Freelancer") {
        navigate("/freelancer-homepage")
      } else {
        navigate("/client-homepage")
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
