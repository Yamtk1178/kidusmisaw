export const personal = {
  name:       "Kidus Misaw",
  title:      "Software Engineering Student",
  tagline:    "Building Software That Solves Real Problems",
  subtagline: "4th Year Software Engineering Student at Debre Birhan University — I build for the web, design networks, and write tests that catch what others miss.",
  email:      "kidusmisaw7@gmail.com",
  phone:      "+251 915 597 913",
  github:     "https://github.com/Yamtk1178",
  location:   "Debre Birhan, Ethiopia",
  university: "Debre Birhan University",
  degree:     "BSc Software Engineering, 4th Year",
  photo:      "/image/profile.jpg",
  about: "I'm a 4th year Software Engineering student at Debre Birhan University. I started coding because I wanted to build things — real things that work and that people use. Over the past few years I've worked on enterprise network design with Cisco Packet Tracer, built web projects from scratch, written automated tests with Cypress, and developed a Library Management System in Kotlin. I enjoy the full process — from designing the architecture to writing the last line of code. I'm currently looking for internships and collaboration opportunities where I can contribute and keep learning.",
  cvLink:     "/resume.html",
};

export const stats = [
  { icon: "fas fa-code",          label: "Engineering",    value: "Software Design"   },
  { icon: "fas fa-map-marker-alt",label: "Ethiopia",       value: "East Africa"       },
  { icon: "fas fa-users",         label: "Collaborate",    value: "Team Player"       },
  { icon: "fas fa-star",          label: "Style",          value: "Full-Stack Mindset"},
];

export const skills = {
  languages: [
    { name: "Java" },
    { name: "C#" },
    { name: "Kotlin" },
    { name: "Python" },
    { name: "SQL" },
  ],
  web: [
    { name: "React.js" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
  ],
  infrastructure: [
    { name: "Networking" },
    { name: "VLAN / OSPF" },
    { name: "DHCP / NAT" },
    { name: "SSH / ACL" },
    { name: "TCP/IP Protocols" },
  ],
  tools: [
    { name: "Git",          icon: "fab fa-git-alt"   },
    { name: "GitHub",       icon: "fab fa-github"    },
    { name: "VS Code",      icon: "fas fa-code"      },
    { name: "Gradle",       icon: "fas fa-cube"      },
    { name: "Linux",        icon: "fab fa-linux"     },
    { name: "npm",          icon: "fab fa-npm"       },
    { name: "Cypress",      icon: "fas fa-vial"      },
    { name: "Cisco PT",     icon: "fas fa-network-wired" },
  ],
};

export const experience = [
  {
    role:     "Full-Stack Intern",
    company:  "Local Tech Startup",
    period:   "2024",
    type:     "Internship",
    desc:     "Collaborated on a web application using React and REST APIs. Contributed to frontend UI improvements and participated in code reviews for team development.",
    tags:     ["React", "JavaScript", "REST API"],
  },
  {
    role:     "Academic Project Lead",
    company:  "Debre Birhan University",
    period:   "2022 – 2025",
    type:     "Academic",
    desc:     "Led multiple academic projects including a Library Management System in Kotlin, a Hotel Network Design with Cisco Packet Tracer, and a QA Automation suite using Cypress.",
    tags:     ["Kotlin", "Cisco", "Cypress"],
  },
];

export const education = [
  {
    degree:  "BSc in Software Engineering",
    school:  "Debre Birhan University",
    period:  "2022 – 2026",
    desc:    "4th Year student. Key coursework: Data Structures, Algorithms, Database Systems, Fundamentals of Networking, Software Testing, OOP.",
    cert:    null,
  },
];

export const projects = [
  {
    title:   "Haile Hotels Network Design",
    desc:    "Designed and simulated a full enterprise network for Haile Hotels & Resorts supporting 500+ users. Hierarchical architecture with VLANs, OSPF, DHCP, NAT, SSH, and ACLs in Cisco Packet Tracer 8.2.2.",
    tags:    ["Cisco Packet Tracer", "VLAN", "OSPF", "DHCP", "NAT", "SSH", "ACL"],
    github:  "https://github.com/Yamtk1178/Networking-Project",
    color:   "blue",
    icon:    "fas fa-network-wired",
  },
  {
    title:   "QA Automation — Cypress",
    desc:    "End-to-end UI test automation workspace built with Cypress and JavaScript. Covers element interaction, fixture-based data, and headless test execution.",
    tags:    ["JavaScript", "Cypress", "E2E Testing", "npm"],
    github:  "https://github.com/Yamtk1178/Quality-Assurance-Project",
    color:   "purple",
    icon:    "fas fa-vial",
  },
  {
    title:   "Library Management System",
    desc:    "Console-based Library Management System in Kotlin + Gradle with patron registration, book borrowing/returning, search, and a clean layered architecture.",
    tags:    ["Kotlin", "Gradle", "OOP", "CLI"],
    github:  "https://github.com/Yamtk1178/kotlin__gradle_project",
    color:   "blue",
    icon:    "fas fa-book",
  },
  {
    title:   "Taxi Booking Website",
    desc:    "Responsive taxi booking website with a modern, interactive UI built with HTML, CSS and vanilla JavaScript.",
    tags:    ["HTML", "CSS", "JavaScript"],
    github:  null,
    color:   "purple",
    icon:    "fas fa-taxi",
  },
];
