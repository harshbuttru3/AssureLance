import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";

function FreelancerHomePage() {
    const auth = getAuth();
    const navigate = useNavigate(); // Ensure this is called at the top level of the component

    function handleLogout() {
        auth.signOut()
            .then(() => {
                console.log("logged out");
                navigate("/"); // Correctly navigate after successful sign-out
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome, Freelancer!</h1>
            <button onClick={handleLogout}>Logout</button>
            <p>This is your dashboard where you can find projects, manage your work, and track your earnings.</p>

            <section>
                <h2>Available Projects</h2>
                {/* Here you could map over a list of projects */}
                <ul>
                    <li>Project 1 - Web Development</li>
                    <li>Project 2 - Graphic Design</li>
                    <li>Project 3 - Content Writing</li>
                </ul>
            </section>

            <section>
                <h2>My Projects</h2>
                {/* List of ongoing projects for this freelancer */}
                <ul>
                    <li>Project A - In Progress</li>
                    <li>Project B - Completed</li>
                </ul>
            </section>
        </div>
    );
}

export default FreelancerHomePage;
