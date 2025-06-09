const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "We are committed to delivering high-quality results by maintaining strict attention to detail at every stage of the process. Our focus on excellence ensures that each outcome meets the highest standards and consistently exceeds expectations.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "We prioritize clear and consistent communication, keeping you informed at every stage of the project to ensure complete transparency, alignment, and confidence throughout the process.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "We are dedicated to completing every project within the agreed timeline while upholding the highest standards of quality and precision. Our disciplined approach to planning and execution ensures that deadlines are met without cutting corners, giving you the confidence that your project will be delivered on time, with careful attention to every detail from start to finish.",
  },
];

const techStackImgs = [
  {
    name: "React Development",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Development",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Development",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Development",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Development",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Development",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Development",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Development",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Their UIMS platform transformed how we operate. From student enrollment to transcript generation, every feature was thoughtfully designed and incredibly reliable. Their responsiveness and domain knowledge are unmatched.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "UIMS Development",
    date: "January 2021 - Present",
    responsibilities: [
      "Developed comprehensive University Information Management Systems for academic institutions, supporting modules such as admissions, academics, examinations.",
      "Enabled real-time reporting and analytics through dynamic dashboards tailored for administrative and academic decision-makers.",
      "Ensured high system uptime and data protection using robust role-based access controls and automated backup protocols.",
    ],
  },
  {
    review:
      "Their admin panel gave us complete control and visibility. From performance reports to daily operations, everything is now centralized and accessible in a few clicks.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Admin Panel Development",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Designed a unified admin interface for educational institutions, consolidating student, faculty, and department-level operations.",
      "Built role-specific dashboards for admins, registrars, exam controllers, and department heads.",
      "Implemented real-time activity tracking, notifications, and action logs to increase transparency and auditability.",
      "Seamlessly connected modules (e.g., attendance, results, leave requests) via a centralized access panel."
    ],
  },
  {
    review:
      "Their integration work saved us time and money. We were able to plug in third-party services without any disruption to our operations. The automation reduced manual effort drastically.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "API & Third-Party Integration",
    date: "March 2019 - May 2022",
    responsibilities: [
      "Integrated payment gateways (JazzCash, EasyPaisa, Stripe) for seamless student fee collection and invoice management.",
      "Linked the UIMS with biometric attendance systems and RFID-based library management tools.",
      "Connected SMS/email services for instant notifications regarding attendance, results, and announcements.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    mentions: "@rajeshkumar",
    review: "The college management system developed by Genkei Solutions has revolutionized our administrative processes. The seamless integration of attendance, examination, and fee management modules has significantly improved our operational efficiency. Their attention to detail and understanding of educational workflows is commendable.",
    imgPath: "/images/client1.png",
    rating: 5
  },
  {
    name: "Praful Sharma",
    mentions: "@prafulsharma",
    review: "As the IT Director of our university, I was impressed by the cloud infrastructure solutions provided by Genkei Solutions. Their migration strategy was flawless, and the new system has improved our data accessibility while maintaining robust security protocols. A truly professional team!",
    imgPath: "/images/client3.png",
    rating: 4
  },
  {
    name: "Arjun Mehta",
    mentions: "@arjunmehta",
    review: "The web development team at Genkei Solutions delivered an exceptional e-learning platform for our institution. The user interface is intuitive, and the backend architecture is scalable. Their regular updates and maintenance support have been invaluable to our digital transformation journey.",
    imgPath: "/images/client2.png",
    rating: 4
  },
  {
    name: "Rahul Verma",
    mentions: "@rahulverma",
    review: "Working with Genkei Solutions on our student portal was a game-changer. The system's ability to handle thousands of concurrent users during admission season is remarkable. Their understanding of educational technology needs is truly impressive.",
    imgPath: "/images/client5.png",
    rating: 5
  },
  {
    name: "Vikram Singh",
    mentions: "@vikramsingh",
    review: "The cloud-based ERP solution developed by Genkei Solutions has streamlined our entire college operations. From admission to alumni management, every module works seamlessly. Their team's expertise in educational technology is outstanding.",
    imgPath: "/images/client4.png",
    rating: 3.5
  },
  {
    name: "Dr. Sanjay Malhotra",
    mentions: "@sanjaymalhotra",
    review: "As the Dean of our engineering college, I can confidently say that Genkei Solutions has transformed our digital infrastructure. Their custom-built management system has improved our administrative efficiency by 60%. Their post-deployment support is exceptional.",
    imgPath: "/images/client6.png",
    rating: 4.5
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
