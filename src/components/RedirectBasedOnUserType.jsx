import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function RedirectBasedOnUserType() {
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userType = userDoc.data().userType;
          if (userType === "Freelancer") {
            navigate("/freelancer-homepage");
          } else {
            navigate("/client-homepage");
          }
        }
      }
    });

    return () => unsubscribe();
  }, [auth, db, navigate]);

  return null;
}

export default RedirectBasedOnUserType;
