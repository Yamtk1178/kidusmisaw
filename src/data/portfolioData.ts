export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "network-sec" | "fullstack" | "qa" | "systems";
  categoryLabel: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: "completed" | "ongoing" | "documented";
  statusLabel?: string;
  architectureNotes?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}

export interface SecurityMilestone {
  title: string;
  category: string;
  period: string;
  description: string;
  focusAreas: string[];
  tools: string[];
}

export const PERSONAL_INFO = {
  name: "Kidus Misaw",
  role: "Software Engineering Student & Aspiring Security Engineer",
  university: "Debre Berhan University",
  degree: "B.Sc. in Software Engineering",
  academicYear: "4th Year Student (Expected 2026)",
  location: "Debre Birhan, Ethiopia",
  email: "kidusmisaw7@gmail.com",
  phone: "+251 915 597 913",
  github: "https://github.com/Yamtk1178",
  avatar: "/image/profile.jpg",
  summary:
    "Software engineering student and security practitioner bridging robust backend architecture with proactive application security, secure coding standards, and rigorous penetration testing.",
  careerGoal:
    "My objective is to develop deep practical expertise in ethical hacking, application security (AppSec), and penetration testing while maintaining the rigorous software engineering practices required to build production-grade applications.",
  languages: [
    { language: "Amharic", proficiency: "Native" },
    { language: "English", proficiency: "Professional Working" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used across academic and personal projects",
    icon: "Code2",
    skills: [
      { name: "Java", note: "Object-oriented programming, data structures, algorithms" },
      { name: "Kotlin", note: "Gradle builds, clean layered architecture, Android basics" },
      { name: "C#", note: "Object-oriented design and desktop applications" },
      { name: "JavaScript (ES6+)", note: "Asynchronous programming, DOM manipulation, modern syntax" },
      { name: "TypeScript", note: "Static typing, component contracts, type-safe development" },
      { name: "Python", note: "Scripting, security lab exploration, automation" },
      { name: "SQL", note: "Relational queries, schema design, constraints, and joins" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Modern, responsive, and accessible user interfaces",
    icon: "Layout",
    skills: [
      { name: "Next.js (App Router)", note: "SSR/SSG, layout composition, server components" },
      { name: "React.js", note: "Component lifecycle, state management, custom hooks" },
      { name: "Tailwind CSS", note: "Utility-first design systems, responsive layouts, dark themes" },
      { name: "Semantic HTML5", note: "Accessible structure, SEO best practices, microdata" },
      { name: "Modern CSS3", note: "Flexbox, CSS Grid, custom properties, micro-animations" },
    ],
  },
  {
    title: "Backend & Systems Architecture",
    description: "Application structure, separation of concerns, and clean logic",
    icon: "Server",
    skills: [
      { name: "Layered Architecture", note: "Clean separation: Presentation, Service, Repository, Model" },
      { name: "RESTful API Integration", note: "Endpoints consumption, HTTP verbs, JSON data contracts" },
      { name: "Object-Oriented Design", note: "SOLID principles, encapsulation, polymorphism, design patterns" },
      { name: "System Quality Assurance", note: "Automated regression testing, assertions, edge-case coverage" },
    ],
  },
  {
    title: "Database Engineering",
    description: "Data modeling, relational constraints, and query management",
    icon: "Database",
    skills: [
      { name: "Relational Schema Design", note: "ER modeling, entity relationships, normal forms (1NF-3NF)" },
      { name: "SQL Query Writing", note: "Complex joins, grouping, indexing principles, aggregates" },
      { name: "Data Integrity & Validation", note: "Foreign keys, unique constraints, transactional integrity" },
    ],
  },
  {
    title: "Networking & Infrastructure",
    description: "Protocol analysis, routing configurations, and network segregation",
    icon: "Network",
    skills: [
      { name: "Cisco Packet Tracer", note: "Comprehensive enterprise topology design and packet simulation" },
      { name: "VLAN & Trunking", note: "802.1Q encapsulation, department broadcast segregation" },
      { name: "Routing Protocols", note: "OSPF single-area routing, static routes, inter-VLAN routing" },
      { name: "IP Services & Hardening", note: "DHCP server pools, NAT/PAT address translation, SSH remote CLI" },
      { name: "Access Control Lists (ACL)", note: "Standard & extended IP filtering, traffic segmentation" },
      { name: "Protocol Diagnostics", note: "TCP/IP, UDP, DNS, ARP, ICMP, Wireshark packet capture" },
    ],
  },
  {
    title: "Cybersecurity & Security Practice",
    description: "Hands-on lab experience, vulnerability analysis, and defensive mindset",
    icon: "ShieldAlert",
    skills: [
      { name: "Web Application Security", note: "Studying OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF)" },
      { name: "Network Reconnaissance", note: "Active scanning with Nmap, port enumeration, service fingerprinting" },
      { name: "HTTP Traffic Inspection", note: "Interception proxies with Burp Suite, request tampering analysis" },
      { name: "Security Learning Labs", note: "PortSwigger Web Security Academy & Hack The Box challenges" },
      { name: "Defensive Principles", note: "Least privilege, input sanitization, parameterized SQL, password hashing" },
    ],
  },
  {
    title: "Developer & Testing Tools",
    description: "Version control, build pipelines, and testing environments",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", note: "Branching strategies, remote repositories, pull requests" },
      { name: "Cypress", note: "End-to-end browser automation, headless test runners, assertions" },
      { name: "Gradle", note: "JVM dependency management, multi-step builds, task execution" },
      { name: "Linux / Bash CLI", note: "File permissions, package managers, network troubleshooting" },
      { name: "VS Code & JetBrains", note: "Configured developer toolchains and debugging workflows" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "haile-hotels-network",
    title: "Haile Hotels & Resorts Enterprise Network Simulation",
    subtitle: "Hierarchical Enterprise Campus Network Simulation (500+ Users)",
    category: "network-sec",
    categoryLabel: "Network & Security",
    description:
      "A complete enterprise-grade network simulation designed in Cisco Packet Tracer 8.2.2. Modeled to support over 500 active users across hotel administrative departments, guest wings, and operational facilities using a scalable 3-tier hierarchical architecture.",
    highlights: [
      "VLAN Segmentation isolating Guest, Staff, Management, and Server traffic",
      "Dynamic OSPF routing ensuring redundant path selection and rapid convergence",
      "Dynamic DHCP service pools with IP reservation for key infrastructure",
      "PAT (Port Address Translation) configuration for secure Internet breakout",
      "Secured management plane with SSHv2 and role-restricted console passwords",
      "Extended Access Control Lists (ACLs) to block guest access to internal management VLANs",
    ],
    technologies: [
      "Cisco Packet Tracer",
      "VLAN / 802.1Q",
      "OSPF",
      "DHCP",
      "NAT / PAT",
      "SSH",
      "ACLs",
      "Hierarchical Network Design",
    ],
    githubUrl: "https://github.com/Yamtk1178/Networking-Project",
    status: "completed",
    statusLabel: "Verified Architecture",
    architectureNotes:
      "Core, Distribution, and Access layers designed with resilient uplink trunking and strict access policies.",
    featured: true,
  },
  {
    id: "qa-cypress-workspace",
    title: "Software QA Automation & E2E Testing Suite",
    subtitle: "Automated Regression & UI Assertion Workspace",
    category: "qa",
    categoryLabel: "Quality Assurance",
    description:
      "An automated end-to-end testing workspace built with Cypress and JavaScript. Engineered to validate critical web application workflows, user authentication paths, and DOM states with robust assertions and headless runner integration.",
    highlights: [
      "Modular test suites testing input validations, button states, and dynamic elements",
      "Fixture-driven data handling simulating various user roles and payloads",
      "Custom Cypress command aliases for reusable workflow steps",
      "Headless test execution optimized for continuous integration (CI) environments",
      "Robust failure logging with automated screenshot artifacts on failed assertions",
    ],
    technologies: ["JavaScript", "Cypress", "Node.js", "npm", "E2E Testing", "Mocha / Chai"],
    githubUrl: "https://github.com/Yamtk1178/Quality-Assurance-Project",
    status: "completed",
    statusLabel: "Verified Repository",
    architectureNotes: "Implements page-object patterns and clean test separation for high maintainability.",
    featured: true,
  },
  {
    id: "enterprise-license-intake",
    title: "Enterprise Company Profile & Cybersecurity License Intake System",
    subtitle: "Collaborative Team Engineering Project",
    category: "fullstack",
    categoryLabel: "Full-Stack & Security",
    description:
      "An ongoing collaborative enterprise application designed to streamline company onboarding, compliance profile tracking, and cybersecurity license intake verification. Focuses on secure intake pipelines and role-based workflows.",
    highlights: [
      "Multi-tenant company registration with strict form data sanitization and validation",
      "Cybersecurity license document intake workflow with status audit tracking",
      "Role-Based Access Control (RBAC) separating applicant and administrative reviewers",
      "Normalized relational database schema capturing legal entity records and verification states",
      "Collaborative team development adhering to version control and review standards",
    ],
    technologies: [
      "Full-Stack Architecture",
      "Role-Based Access Control (RBAC)",
      "Secure Data Intake",
      "Relational Database",
      "RESTful API",
      "Team Engineering",
    ],
    status: "ongoing",
    statusLabel: "Ongoing Team Project",
    architectureNotes:
      "Focuses on enterprise compliance workflows, strict data segregation, and audit trails.",
    featured: true,
  },
  {
    id: "library-management-system",
    title: "Layered Library Management System",
    subtitle: "Multi-Tier Console Application in Kotlin & Gradle",
    category: "systems",
    categoryLabel: "Systems & Architecture",
    description:
      "A clean object-oriented console application developed in Kotlin utilizing Gradle. Built strictly around multi-tier software design principles to separate presentation, business logic, data persistence, and domain models.",
    highlights: [
      "Strict separation of concerns: Model, Repository, Service, and CLI Presentation layers",
      "Patron registration, account state tracking, and borrow/return transaction records",
      "Inventory search with title, author, and availability status filtering",
      "Validation rules preventing overdue loans and duplicate checkouts",
      "Built with Gradle build automation on JVM",
    ],
    technologies: ["Kotlin", "Gradle", "OOP", "Layered Architecture", "Clean Code"],
    githubUrl: "https://github.com/Yamtk1178/kotlin__gradle_project",
    status: "completed",
    statusLabel: "Verified Repository",
    architectureNotes:
      "Designed as a benchmark for layered architecture patterns without external bloated frameworks.",
    featured: true,
  },
  {
    id: "taxi-booking-platform",
    title: "Responsive Taxi Ordering & Dispatch Interface",
    subtitle: "Interactive Frontend Web Application",
    category: "fullstack",
    categoryLabel: "Frontend Engineering",
    description:
      "A dynamic, responsive web interface engineered for urban taxi dispatch and ride booking. Features interactive route planning mockups, ride category selection, and transparent fare estimation calculations.",
    highlights: [
      "Mobile-responsive UI with smooth transitions and intuitive booking steps",
      "Dynamic fare calculator estimating costs based on vehicle tier and distance parameters",
      "Real-time form validation ensuring proper pickup/destination coordinate inputs",
      "Accessible interactive modal alerts and booking confirmation summaries",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Responsive UI", "DOM Manipulation"],
    status: "completed",
    statusLabel: "Frontend System",
    featured: false,
  },
  {
    id: "portfolio-rebuild-v2",
    title: "Engineering Portfolio & Security Showcase (V2)",
    subtitle: "High-Performance Next.js Portfolio Architecture",
    category: "fullstack",
    categoryLabel: "Next.js / TypeScript",
    description:
      "A completely rebuilt, modern developer portfolio crafted from scratch to present software engineering rigor alongside cybersecurity exploration. High performance, dark-first UI, accessible semantics, and clean modular code.",
    highlights: [
      "Next.js App Router with TypeScript type safety and Tailwind CSS styling",
      "Zero arbitrary skill percentages; honest technical capabilities with domain context",
      "Cybersecurity journey section detailing practical lab methodologies (PortSwigger, Nmap, Burp)",
      "Interactive project filtering, accessible modal dialogues, and print-ready digital resume",
      "Subtle micro-animations with Framer Motion adhering to prefers-reduced-motion",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    githubUrl: "https://github.com/Yamtk1178/portfolio-website",
    status: "completed",
    statusLabel: "Active Project",
    featured: false,
  },
];

export const SECURITY_JOURNEY: SecurityMilestone[] = [
  {
    title: "Web Application Security Labs",
    category: "Practical Application Security",
    period: "Ongoing Practice",
    description:
      "Actively training on PortSwigger Web Security Academy to understand web application vulnerabilities from both offensive identification and defensive remediation standpoints.",
    focusAreas: [
      "SQL Injection (Union-based, Error-based, Blind SQLi mechanics)",
      "Cross-Site Scripting (Reflected, Stored, and DOM-based XSS)",
      "Authentication flaws & Broken Access Control (IDOR, role bypass)",
      "Cross-Site Request Forgery (CSRF) & SameSite cookie mechanics",
    ],
    tools: ["PortSwigger Academy", "Burp Suite Community", "Browser DevTools", "OWASP Top 10"],
  },
  {
    title: "Network Reconnaissance & Protocol Inspection",
    category: "Network Defense & Exploration",
    period: "Academic & Self-Directed",
    description:
      "Combining university networking fundamentals with hands-on packet inspection to understand transport layers, handshake mechanics, and network reconnaissance vectors.",
    focusAreas: [
      "Deep packet inspection of ARP, DNS, TCP three-way handshake, and HTTP/TLS flows",
      "Active and passive network scanning, OS fingerprinting, and service discovery",
      "Hardening network devices with Access Control Lists (ACLs) and encrypted remote access (SSHv2)",
      "Understanding common network attacks: ARP spoofing, rogue DHCP, unauthorized VLAN hopping",
    ],
    tools: ["Wireshark", "Nmap", "Cisco Packet Tracer", "Linux iproute2 / iptables"],
  },
  {
    title: "Linux Environments & Security Tooling",
    category: "Systems & Security Toolchain",
    period: "Continuous Learning",
    description:
      "Working within Linux distributions (Debian/Ubuntu/Kali) to build proficiency in command-line administration, permission models, process inspection, and standard security utilities.",
    focusAreas: [
      "Linux user/group permissions, SUID binaries, and process monitoring",
      "Bash automation scripts for repetitive reconnaissance and log filtering",
      "Local service configuration and network interface manipulation",
      "Ethical testing methodologies adhering to authorized scope and responsible disclosure",
    ],
    tools: ["Linux CLI / Bash", "Kali Linux utilities", "Systemd / Netstat", "Git"],
  },
  {
    title: "Capture The Flag (CTF) & Challenge Practice",
    category: "Offensive Security Foundations",
    period: "Skills Development",
    description:
      "Tackling entry-level challenges on Hack The Box and foundational CTF platforms to sharpen analytical problem-solving and systematic vulnerability discovery.",
    focusAreas: [
      "Enumeration methodologies: identifying services, version lookup, and known vectors",
      "Basic privilege escalation concepts in sandbox virtual machines",
      "Documentation of vulnerability findings and proof-of-concept writeups",
      "Adhering to ethical conduct and legal boundaries in all security research",
    ],
    tools: ["Hack The Box", "Searchsploit", "Hashcat basics", "Netcat / Socat"],
  },
];

export const EDUCATION_HISTORY = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Debre Berhan University",
    location: "Debre Birhan, Ethiopia",
    period: "2022 – 2026",
    status: "4th Year Undergraduate (Senior)",
    overview:
      "Comprehensive four-year curriculum emphasizing foundational computer science, software design principles, systems architecture, network engineering, and quality assurance.",
    keyCoursework: [
      { name: "Fundamentals of Networking", description: "IP addressing, routing algorithms, OSI model, packet tracer labs" },
      { name: "Data Structures & Algorithms", description: "Asymptotic complexity, trees, graphs, sorting, searching algorithms" },
      { name: "Database Systems", description: "Relational algebra, normal forms, SQL transactions, concurrency" },
      { name: "Software Testing & QA", description: "E2E testing, black/white box methods, Cypress automation, test cases" },
      { name: "Object-Oriented Programming", description: "Polymorphism, abstraction, inheritance, design patterns in Java/C#" },
      { name: "Web Application Development", description: "Client-server architecture, DOM APIs, dynamic web systems" },
    ],
  },
];

