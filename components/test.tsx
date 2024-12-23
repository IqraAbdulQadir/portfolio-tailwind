

.navbar {
    background-color:  #9b577a; /* Deep purple background */
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Playfair Display', serif;
  }
  
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  }
  
  .navbar li {
    margin: 0 15px;
  }
  
  .navbar button {
    background: none;
    border: none;
    color: white; /* White text color */
    font-weight: bold;
    cursor: pointer;
  }
  
  .navbar button:hover {
   text-decoration: underline;
    color: #660e60; /* Light pastel color on hover */
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .navbar ul {
      flex-direction: column; /* Stack items vertically on smaller screens */
      align-items: center;
    }
  
    .navbar li {
      margin: 10px 0; /* Add margin between items */
    }
  }

//   FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER

/* Footer */
/* Wrapper for the entire page */
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Main content area */
  .content-wrap {
    flex: 1; /* Allows content to grow and pushes footer down */
  }
  
  /* Footer */
  .footer {
    background-color: #9b577a;
    color: #fff;
    padding: 20px;
    width: 100%;
    text-align: center;
  }
  
  .social-media {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px; /* Add spacing below the social media buttons */
  }
  
  .social-button {
    display: flex; /* Use flex to align icon and text inside the button */
    align-items: center; /* Center icon and text vertically */
    justify-content: center; /* Center content horizontally */
    margin: 6px;
    padding: 10px 15px;
    border: solid  #660e60 3px;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;
    height: 50px;
    transition: background-color 0.2s ease-in-out; /* Add subtle hover effect */
  }
  
  .social-button:hover {
    background-color: #893f71; /* Change background color on hover */
  }
  
  .social-button img {
    width: 20px; /* Set width for icons */
    height: 20px; /* Set height for icons */
  }
  
  .social-button a {
    color: inherit; /* Inherit text color from button */
    text-decoration: none; /* Remove underline from links */
  }
  
  .rights {
    color: lightgrey;
    margin: 0; /* Remove default margin */
    padding-bottom: 0; /* Ensure no extra padding */
  }
  


//   HEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRROOOOOOOOOOOOOOO
  .hero {
    background: linear-gradient(135deg, #531e3e, #724956, #31092f); /* Subtle gradient background */
    color: white;
    text-align: center;
    padding: 50px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
  }
  
  .hero-content {
    max-width: 800px;
    margin: 0; /* Remove auto margin to align left */
    padding: 20px; /* Add padding if needed */
    text-align: center; /* Align text to the left */
    font-family: 'Playfair Display', serif;
  }
  
  .image {
    display: flex; /* Enable flexbox for the image container */
    border: 12px solid #460741;
    border-radius: 25px;
    filter: drop-shadow(1px 10px 20px rgb(119, 8, 119)); /* Add
    justify-content: flex-end; /* Align the image to the right */
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    text-align: center;
  }
  
  /* Style for the heading */
  .typing-animation {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    white-space: nowrap;       /* Keeps the text on a single line */
    overflow: hidden;          /* Hides the overflowed text */
    border-right: 2px solid black; /* Simulates the cursor */
    animation: typing 3s steps(30, end), blink-caret 0.5s step-end 5;
  }
  
  /* Typing animation */
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  
  /* Blinking caret */
  @keyframes blink-caret {
    50% { border-color: transparent; }
  }
  
  
  
  h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: center;
  }
  
  p {
    font-size: 1.2em;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .cta-buttons {
    margin-bottom: 30px;
    align-items: center;
  }
  
  .cta-button {
    position: relative; /* Position relative for the pseudo-element */
    background-color: #660e60; /* Button background color */
    color: white;
    padding: 10px 20px;
    border: none; /* Remove the default border */
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 10px;
    transition: background-color 0.3s;
    z-index: 1; /* Ensure the button text is above the pseudo-element */
    align-items: center;
    justify-content: center;
    filter: drop-shadow(2px 2px 20px rgba(198, 31, 240, 0.5));
  }
  
  .cta-button::before {
    content: ""; /* Required for the pseudo-element */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px; /* Match the button's border radius */
    background: linear-gradient(135deg, #91278a, #660e60); /* Gradient colors */
    z-index: -1; /* Place behind the button */
    padding: 2px; /* Adjust this to control the border thickness */
  }
  
  .cta-button:hover {
    background-color: #893f71; /* Hover background color */
  }