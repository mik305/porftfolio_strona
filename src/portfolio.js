/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mikołaj Turek",
  title: "Hi, I'm Mikołaj",
  subTitle: emoji(
    "A passionate Robotics & Embedded Systems Engineer 🚀 specializing in ESP32/STM32 microcontrollers, electronic circuit design."
  ),
  resumeLink: "./assets/CV.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mik305",
  linkedin: "https://www.linkedin.com/in/miko%C5%82aj-turek/",
  gmail: "mikolaj.turek.gd@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ROBOTICS, ELECTRONICS & EMBEDDED SYSTEMS ENGINEER",
  skills: [
    emoji("⚡ Programming of ESP32 and STM32 microcontrollers in C/C++ using FreeRTOS"),
    emoji("⚡ Electronic circuit design using Altium Designer and LTSpice simulations"),
    emoji("⚡ Building and soldering custom PCBs and operating laboratory equipment (multimeter, oscilloscope)"),
    emoji("⚡ 3D design (Autodesk Inventor, AutoCAD) and 3D printing for robotics applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Microcontrollers",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Circuit Design",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "3D Design",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "IoT Protocols",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Industry protocols",
      fontAwesomeClassname: "fa-regular fa-industry"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gdańsk University of Technology",
      logo: require("./assets/images/pg.jpg"), // Zmień na logo PG
      subHeader: "Science in Automation, Cybernetics, and Robotics (Bachelor)",
      duration: "October 2022 - January 2026",
      desc: "Engineering Thesis: Audio recorder interference device.",
      descBullets: []
    },
    /*{
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }*/
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Design Engineer",
      company: "OBR Centrum Techniki Morskiej S.A.",
      companylogo: require("./assets/images/ctm.jpg"), // Zmień logo
      date: "January 2026 – Present",
      desc: "Working full-time in the underwater weapons design department. Modernization of the ECA project, implementing solutions for existing and future units.",
      descBullets: [
        "Electronic circuit design in Altium Designer and LTSpice circuit simulations.",
        "Test support software development in LabView and STM32 programming based on FreeRTOS.",
        "Assembly and testing of developed solutions."
      ]
    },
    {
      role: "Product Consulting & R&D",
      company: "VTS Sp. z.o.o.",
      companylogo: require("./assets/images/vts.png"), // Zmień logo
      date: "August 2024 – Present",
      desc: "Working on the 'Wing' and Recuperator 'Homer' projects. Developing ESP32-based software enabling communication between a smartphone and an STM32 microcontroller.",
      descBullets: [
        "Developing software for ESP32 and PC (Python) for automated product testing.",
        "Programming in C using FreeRTOS and implementing IoT protocols (SPI, Ethernet, WiFi, BLE, I2C, Modbus).",
        "Independent development of ESP32-side solutions and testing with mobile applications."
      ]
    },
    {
      role: "Participant and Mentor",
      company: "Roboilo",
      companylogo: require("./assets/images/roboilo_white.png"), // Zmień logo
      date: "october 2018 – Present",
      desc: "Active participant and mentor in the Robotics Scientific Club at the 1st High School in Gdańsk, gaining extensive experience in robotics, electronics, 3D design, 3D printing, circuit design, and microcontroller programming.",
      descBullets: [
        "PCB design projects based on STM32 and ESP32",
        "Soldering and building robots using both custom PCBs and ready-made solutions"
      ]
    },
    {
      role: "Freelance Programmer",
      company: "Suprima Electronics Brokering Sp. z.o.o.",
      companylogo: require("./assets/images/solidity.jpg"), // Zmień logo
      date: "January 2022 – January 2024",
      desc: "Freelance collaboration on various projects involving blockchain-based solutions.",
      descBullets: [
        "Creation of a DAO for residents.",
        "Developed a Supabase database as a backup layer for blockchain data.",
        "User frontend and administrative panel development for blockchain management."
      ]
    },
    {
      role: "Internship – Helpdesk/IT Support",
      company: "Międzynarodowe Targi Gdańskie S.A.",
      companylogo: require("./assets/images/mtgsa.jpg"), // Zmień logo
      date: "June 2021 – August 2021",
      desc: "Internship in the IT department at MTG S.A., where I was responsible for resolving technical issues in the office, receiving and setting up new equipment, as well as administering and maintaining the company’s computer resources.",
      descBullets: [

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECT MADE FOR COMPANIES AND BIG PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/tral.jpg"),
      projectName: "Modernizacja MLM",
      projectDesc: "projekt modernizacji MLM realizowany dla CTM"
    },
    {
      image: require("./assets/images/jammer.jpg"),
      projectName: "Audio Jammer",
      projectDesc: "praca inżynierska - audio jammer"
    },
    {
      image: require("./assets/images/rekuperator.jpg"),
      projectName: "Recuperator",
      projectDesc: "rekuperator tworzony wraz z vts"
    },
    {
      image: require("./assets/images/caravan.png"),
      projectName: "Self leveling system",
      projectDesc: "projekt grupowy realizowany na studiach, sampoziomująca się platforma"
    },
    {
      image: require("./assets/images/sumo.jpg"),
      projectName: "Sumo robot",
      projectDesc: "jeden ze zbudowanych robotów - sumo"
    },
    {
      image: require("./assets/images/minisumo.jpg"),
      projectName: "MiniSumo robot",
      projectDesc: "jeden ze zbudowanych robotów - minisumo"
    },
    {
      image: require("./assets/images/followLiner.jpg"),
      projectName: "LinieFollower robot",
      projectDesc: "jeden ze zbudowanych robotów - linefollower"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Awards and successes from national and international robotics competitions.",
  achievementsCards: [
    {
      title: "1st Place - RoboRAVE World Championship 2025",
      subtitle: "Achieved 1st place in the World Championships in China (2025).",
      image: require("./assets/images/roboraveChin.png"), // Dodaj grafikę/logo zawodów
      imageAlt: "RoboRAVE Logo",
      footerLink: []
    },
    {
      title: "1st Place - RoboRAVE World Championship 2024",
      subtitle: "Achieved 1st place in the World Championships Australia (2024).",
      image: require("./assets/images/roboraveAust.png"), // Dodaj logo zawodów
      imageAlt: "RoboRAVE Logo",
      footerLink: []
    },
    {
      title: "Multiple Podiums in National Competitions as a Part of Roboilo",
      subtitle: "More details on our website:",
      image: require("./assets/images/roboilo_white.png"), // Dodaj grafikę
      imageAlt: "Robotics Competitions",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  number: "+48 600 231 550",
  email_address: "mikolaj.turek.gd@gmail.com" 
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
