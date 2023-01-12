import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Biswesh Dhungana",
  title: "Biswesh's Portfolio ",
  subTitle: emoji(
    "A passionate Computer Science student with a strong foundation in programming and problem solving, looking to expand my knowledge and skills in the field of software development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kSlEVp9SSQPqhpUdp0JZebEQnDxy4hss/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/bisweshd",
  linkedin: "https://www.linkedin.com/in/biswesh/",
  gmail: "biswesh2022@gmail.com",
  medium: "https://medium.com/@biswesh2022",
  display: true
};

const skillsSection = {
  title: "Skills",
  subTitle: "A selection of technical skills I have acquired:",
  skills: [
    "Object-Oriented Programming",
    "Testing/Debugging",
    "Python Advanced String Operation",
    "Unix Operating System",
    "Function Recursion",
    "Computational Thinking"
  ],
  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "George Mason University",
      logo: require("./assets/images/GMU.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2022 - December 2026",
      desc: "In-Major GPA: 4.0",
      descBullets: [
        "Participated in PatriotHacks",
        "Member of Nepalese Student Association"
      ]
    },
    {
      schoolName: "Osbourn Park High",
      logo: require("./assets/images/OPHS.png"),
      subHeader: "High School Diploma",
      duration: "August 2017 - May 2022",
      desc: "Ranked top 3% in the School. Took courses about Computer Science, VEX Robotics, Principles of Engineering, ...",
      descBullets: ["President of Code Club"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Search Engine Optimization Intern",
      company: "Comet",
      companyUrl: "www.applywithcomet.com",
      companylogo: require("./assets/images/Comet.jpg"),
      date: "May 2021 – August 2022",
      desc: "Intern",
      descBullets: [
        "Maintained ongoing optimization requirements for SEO clients, including backlinks, keyword research, and on-page optimization",
        "Recommended modifications to content, linking, and other factors to improve SEO rankings for target keywords."
      ]
    },
    {
      role: "K-12 Tutor",
      company: "Tutor Doctor",
      companyUrl: "www.tutordoctor.com",
      companylogo: require("./assets/images/TutorDoctor.png"),
      date: "March 2022 – August 2022",
      desc: "K-12 Tutor",
      descBullets: [
        "Provided one-on-one in-home personalized tutoring services to supplement K-12 students’ education",
        "Maintained student records and handled scheduling and parent communications."
      ]
    },
    {
      role: "Math Instructor",
      company: "Mathnasium",
      companylogo: require("./assets/images/Mathnasium.png"),
      date: "December 2019 – April 2022",
      desc: "Math Instructor",
      descBullets: [
        "Instructed fundamental mathematical concepts to students with varied mathematical backgrounds.",
        "Assessed each student's academic ability to customize individual learning"
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
  title: "Research & Volunteer",
  subtitle: "Experience",
  projects: [
    {
      image: require("./assets/images/VSGC.jpg"),
      projectName: "Virginia Space Grant Consortium - Space Research Scholar ",
      projectDesc: "Authored current missions of NASA Wallops flight facility through technical reports aimed at solving engineering problems. • Created a comprehensive Mars mission involving the implementation of Hydrogenated Boron Nanotubes to protect Mars's habitat from cosmic and galactic radiation",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.vsgc.odu.edu"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ANHS.jpg"),
      projectName: "America Nepal Helping Society - Nepalese Language Instructor (Volunteer) ",
      projectDesc: "Teach the Nepali Language to beginner and intermediate level students by offering effective lesson plans that utilize speaking, writing, and listening techniques.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://anhsdc.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Managing systems through Linux Essentials",
      subtitle: "Cisco Networking Academy",
      image: require("./assets/images/Cisco.png"),
      imageAlt: "Cisco Networking Academy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Flight Test Completition Certificate",
      subtitle: "Comet",
      image: require("./assets/images/Comet.jpg"),
      imageAlt: "Comet logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
