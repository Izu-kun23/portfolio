//======================== FLOATING NAV ========================/
const floatingNavs = document.querySelectorAll('.floating_nav a');

floatingNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        // Remove 'active' class from all nav links
        floatingNavs.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked nav link
        nav.classList.add('active');
    });
});

//======================== RESUME ========================/
const resumeRight = document.querySelector('.resume_right');
const experienceBtn = document.querySelector('.experience_btn');
const educationBtn = document.querySelector('.education_btn');
const skillsBtn = document.querySelector('.skills_btn');
const aboutBtn = document.querySelector('.about_btn');

// Experience
const experienceContent = `  <h4>EXPERIENCE</h4>
          <p>
           Passionate software engineer with a commitment to crafting high-quality code. Experience in both small and large-scale projects.
          </p>
          <ul>
            <li>
              <h6>DECEMBER 2023</h6>
              <h5>3 DAY CHALLENGE EVENT</h5>
              <p>ACCESS GROUP</p>
            </li>
            <li>
              <h6>FEBRUARY 2024</h6>
              <h5>3 DAY HACKATHON</h5>
              <p>TRIAD GROUP</p>
            </li>
            <li>
              <h6>MARCH 2024</h6>
              <h5>3 DAY CHALLENGE EVENT</h5>
              <p>BARCLAY CARD</p>
            </li>
            <li>
              <h6>MAY 2024 - SEPT 2024</h6>
              <h5>SOFTWARE ENGINEERING INTERN</h5>
              <p>CALAYA ENGINEERING LTD</p>
            </li>
            <li>
              <h6>SEPT 2024 - FEB 2025</h6>
              <h5>IT PROFESSIONAL</h5>
              <p>NOVACROFT</p>
            </li>
            <li>
              <h6>OCT 2024 - MARCH 2025</h6>
              <h5>SOFTWARE DEVELOPMENT ASSISTANT</h5>
              <p>FOREVER SAKE</p>
            </li>

          </ul>
`;

// Function to display Experience content by default
function displayDefaultExperience() {
  resumeRight.innerHTML = experienceContent; // Set the default content
  updateActiveSection('experience'); // Update the section to 'experience'
  updateActiveButton(experienceBtn); // Set 'Experience' button as active
}

// Call this function immediately to show experience by default
displayDefaultExperience();

experienceBtn.addEventListener('click', () => {
  resumeRight.innerHTML = experienceContent;
  updateActiveSection('experience');
  updateActiveButton(experienceBtn);
});


// Education
const educationContent = `<h4>EDUCATION</h4>
          <p>
            Dedicated to continuous learning, with a formal education in software engineering.
          </p>
          <ul>
            <li>
              <h6>SEPT 2021 - NOV 2024</h6>
              <h5>UNIVERSITY OF NORTHAMPTON</h5>
              <p>BACHELOR OF SCIENCE IN COMPUTING, SOFTWARE ENGINEERING</p>
            </li>
            <li>
              <h6>JAN 2021 - JULY 2021</h6>
              <h5>UNIVERSITY OF NORTHAMPTON INTERNATIONAL COLLEGE</h5>
              <p>FOUNDATION YEAR</p>
            </li>
          </ul>
`;

educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    updateActiveSection('education');
    updateActiveButton(educationBtn);
});

// Skills
const skillsContent = `<h4>SKILLS</h4>
          <p>
            Proficient in a variety of technologies and tools for full-stack development.
          </p>
          <ul>
            <li><img src="./assets/html.jpeg" alt="html logo"></li>
            <li><img src="./assets/css_logo.jpeg" alt="css logo"></li>
            <li><img src="./assets/jslogo.jpeg" alt="JavaScript logo"></li>
            <li><img src="./assets/php.jpeg" alt="php logo"></li>
            <li><img src="./assets/react.jpeg" alt="ReactJs logo"></li>
            <li><img src="./assets/images.png" alt="MongoDB logo"></li>
            <li><img src="./assets/ps.jpeg" alt="Photoshop logo"></li>
            <li><img src="./assets/vite.jpeg" alt="Vite logo"></li>
            <li><img src="./assets/git.jpeg" alt="Git logo"></li>
            <li><img src="./assets/mongo.jpeg" alt="MongoDB logo"></li>
          </ul> 
`;

skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    updateActiveSection('skills');
    updateActiveButton(skillsBtn);
});

// About Me
const aboutContent = `<h4>ABOUT ME</h4>
          <p>
               Enthusiastic full-stack developer with 3 years of experience in creating dynamic and responsive web applications.
          </p>
          <ul>
            <li>
              <h6>NAME:</h6>
              <h5>IZUCHUKWU TONY ONUOHA-OSUGWU</h5>
            </li>
            <li>
              <h6>YEARS OF EXPERIENCE:</h6>
              <h5>3 YEARS</h5>
            </li>
            <li>
              <h6>NATIONALITY:</h6>
              <h5>NIGERIAN</h5>
            </li>
            <li>
              <h6>PHONE:</h6>
              <h5>+44 (0) 7763902623</h5>
            </li>
          </ul>`;

aboutBtn.addEventListener('click', () => {
  resumeRight.innerHTML = aboutContent;
  updateActiveSection('about');
  updateActiveButton(aboutBtn);
});

// Function to Update Active Section
function updateActiveSection(section) {
    // Remove specific section classes from resumeRight
    resumeRight.classList.remove('experience', 'education', 'skills', 'about');

    // Add the current section class
    resumeRight.classList.add(section);
}

// Function to Update Active Button
function updateActiveButton(activeButton) {
    // Remove 'primary' class from all buttons
    experienceBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
    aboutBtn.classList.remove('primary');

    // Add 'primary' class to the clicked button
    activeButton.classList.add('primary');
}


const containerEl = document.querySelector('.projects_container')
let mixer = mixitup(containerEl, {
  animation:{
    enable:false
  }
})

mixer.filter('*')


//======================== THEME ========================/
const themeToggler = document.querySelector('.nav_theme-btn'); // Corrected selector

// Check localStorage for saved theme on load
const savedTheme = window.localStorage.getItem('portfolio-theme');
if (savedTheme) {
    document.body.classList.add(savedTheme); // Apply saved theme if exists
    themeToggler.innerHTML = `<i class="uil uil-sun"></i>`; // Set sun icon for dark mode
} else {
    themeToggler.innerHTML = `<i class="uil uil-moon"></i>`; // Set moon icon for light mode
}

// Event listener for toggling theme
themeToggler.addEventListener('click', () => {
    // Toggle the class for dark theme
    document.body.classList.toggle('dark-theme-variables');

    // Check if the body has the class and update the icon accordingly
    if (document.body.classList.contains('dark-theme-variables')) {
        themeToggler.innerHTML = `<i class="uil uil-sun"></i>`; // Show sun icon in dark mode
        window.localStorage.setItem('portfolio-theme', 'dark-theme-variables'); // Save theme in localStorage
    } else {
        themeToggler.innerHTML = `<i class="uil uil-moon"></i>`; // Show moon icon in light mode
        window.localStorage.setItem('portfolio-theme', ''); // Clear theme from localStorage
    }
});


