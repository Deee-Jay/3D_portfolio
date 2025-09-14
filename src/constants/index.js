export const myProjects = [
  {
    id: 1,
    title: "VacationStay",
    description: "Node.js, Express.js, MongoDB, EJS",
    subDescription: [
      "Architected a full-stack hotel booking platform with role-based access, granting hosts complete CRUD control over property listings while offering a seamless browsing experience for users.",
      "Implemented secure user authentication and authorization with session management to deliver a tailored user experience for both hosts and regular users.",
      "Developed personalized data models in MongoDB, enabling users to curate unique lists of favorite properties and track their personal booking history.",
    ],
    href: "https://vacation-stay-liveeee.vercel.app/",
    image: "/assets/projects/vacationStay.png", // Make sure to add your image to the public/assets/projects folder
    tags: [
      { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "EJS", path: "/assets/logos/ejs.svg" },
    ],
  },
  {
    id: 2,
    title: "Movies-Hub",
    description: "React.js, TMDB API, CSS",
    subDescription: [
      "Developed a dynamic front-end application using React.js to fetch and display data across 3+ categories (Movies, TV Series, etc.) from the TMDB API.",
      "Integrated a comprehensive search functionality allowing users to find specific titles and view detailed information, including cast, crew, and ratings.",
      "Integrated a seamless video playback feature using YouTube's embedding functionality, allowing users to watch official trailers.",
    ],
    href: "https://movie-hub007.netlify.app",
    image: "/assets/projects/moviesHub.png", // Make sure to add your image to the public/assets/projects folder
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      // You may need to add a logo for TMDB API if you have one
    ],
  },
];
export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Cybersecurity Intern",
    job: "CDAC NOIDA",
    date: "June 2023 -- July 2023",
    contents: [
      "Utilized Nmap and Wireshark for network scanning and packet analysis in a simulated lab environment to identify potential misconfigurations.",
      "Independently set up a virtual testing environment to practice Active Directory enumeration techniques using PowerShell.",
      "Learned security principles from senior professionals and documented my process and findings in a detailed technical report.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
