import React from 'react';

function ClientHomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome, Client!</h1>
      <p>This is your dashboard where you can post projects, review bids, and manage your freelancers.</p>
      
      <section>
        <h2>Post a New Project</h2>
        <button>Post Project</button>
        {/* This button could open a form to post a new project */}
      </section>

      <section>
        <h2>My Posted Projects</h2>
        {/* List of projects posted by this client */}
        <ul>
          <li>Project X - Bidding</li>
          <li>Project Y - In Progress</li>
          <li>Project Z - Completed</li>
        </ul>
      </section>

      <section>
        <h2>Freelancers I'm Working With</h2>
        {/* List of freelancers the client is currently working with */}
        <ul>
          <li>Freelancer A - Web Developer</li>
          <li>Freelancer B - Graphic Designer</li>
        </ul>
      </section>
    </div>
  );
}

export default ClientHomePage;
