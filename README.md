Project Kavach — A Web Experience by Team Lumora
This repository contains the source code for the "Project Kavach" website, a dynamic and immersive web experience created by Team Lumora for the Smart India Hackathon. The site is designed to present the project's mission, features, and team in a futuristic and engaging manner.

Features
Futuristic & Immersive Design: The website features a high-tech aesthetic with a "Matrix"-style digital rain background that persists throughout the user's journey.

Cinematic Startup Sequence: A custom "orb" animation provides a memorable and engaging transition from the start screen to the main content.

Full-Page Scroll Snapping: Each section of the website occupies the full viewport, and the page "snaps" between sections for a clean, focused, and intuitive navigation experience.

Advanced Animations: The site leverages the GreenSock Animation Platform (GSAP) to create a variety of animations, including:

A parallax effect in the hero section that responds to mouse movement.

Staggered "reveal" animations that make content appear gracefully as the user scrolls.

Modern UI/UX: The user interface includes translucent "frosted glass" cards, glowing design elements, and a clean, minimalist color palette.

Responsive Layout: The design is optimized to provide a seamless experience on a wide range of devices and screen sizes.

Technologies Used
HTML5: For the core structure and content of the website.

CSS3: For styling, layout, and animations. The design makes extensive use of Custom Properties (Variables) for easy theme management.

JavaScript (ES6+): For interactivity, animations, and dynamic content handling.

GSAP (GreenSock Animation Platform): A powerful JavaScript library used for all the sophisticated animations, parallax effects, and scroll-triggered events.

How to Run Locally
To view the website, you can simply open the index.html file in any modern web browser.

For the best experience during development (to avoid any potential browser restrictions with local files), it's recommended to use a simple local server.

Navigate to the project directory in your terminal.

Run a local server. If you have Python installed, you can use the following command:

python -m http.server

Open your browser and go to http://localhost:8000 (or the address provided by your local server).

File Structure
/
├── index.html          # The main HTML file
├── css/
│   └── styles.css      # All custom CSS styles
├── js/
│   └── app.js          # All custom JavaScript and animation logic
└── assets/
    ├── asfiya.jpg      # Team member images
    ├── asmita.jpg
    ├── ... (etc.)

Thank you for checking out Project Kavach!

Team Lumora