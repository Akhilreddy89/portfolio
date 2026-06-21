
export const profile = {
  name: 'Akhil Reddy',
  fullName: 'Manda Akhil Reddy',
  title: 'Full-Stack Developer | MERN Stack Developer',
  tagline:
    'I build scalable and user-centric web applications using React, Node.js, Express, and MongoDB.',
  location: 'Hyderabad, India',
  email: 'akhilreddymanda89@gmail.com',
  phone: '+91 9121884936',
  resumeUrl: '/Akhilreddy_resume(2).pdf', 
  social: {
    github: 'https://github.com/akhilreddy89',
    linkedin: 'https://linkedin.com/in/akhilreddymanda',
    leetcode: 'https://leetcode.com/akhilreddy89',
    twitter: '', // optional — leave blank to hide the icon
  },
};

export const about = {
  heading: "Hi, I'm Akhil — I turn ideas into working products.",
  paragraphs: [
    "I'm a B.Tech Information Technology student with a strong interest in full-stack development — the kind that spans a thoughtful UI all the way down to a well-structured API and database.",
    "I'm passionate about building real-world applications that solve actual problems, not just tutorial projects. Whether it's a learning platform or a civic-utility tool, I care about whether something genuinely works for the person using it.",
    "I'm a continuous learner focused on problem-solving and modern web technologies — currently deep in the MERN stack, with Data Structures & Algorithms as my daily warm-up.",
  ],
  highlights: [
    { label: 'Currently studying', value: 'B.Tech in Information Technology' },
    { label: 'Focus area', value: 'Full-Stack Web Development (MERN)' },
    { label: 'Daily practice', value: 'DSA in Java' },
  ],
};

export const skills = {
  Programming: ['JavaScript', 'Java', 'Python', 'C'],
  Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
  'Core Subjects': [
    'Data Structures & Algorithms',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
  ],
};

export const projects = [
  {
    id: 'trajectory',
    title: 'Trajectory',
    tagline: 'AI-powered personalized learning platform',
    description:
      'An AI-powered personalized learning platform that helps students discover courses, generate learning roadmaps, track progress, and receive tailored recommendations.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'User authentication',
      'Personalized recommendations',
      'Learning roadmaps',
      'Progress tracking',
      'Course management',
    ],
    image: null, // Drop a screenshot at public/projects/trajectory.png and reference it here
    githubUrl: 'https://github.com/akhilreddymanda89/Trajectory',
    liveUrl: '', // Add live demo link when deployed
    year: '2025',
    featured: true,
  },
  {
    id: 'route-optimization',
    title: 'Route Optimization',
    tagline: 'Smarter transit, shorter commutes',
    description:
      'A web application designed to optimize transportation routes for improved efficiency and reduced travel time.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Route visualization',
      'Travel time estimation',
      'Optimized stop sequencing',
    ],
    image: null, // Drop a screenshot at public/projects/bus-route.png and reference it here
    githubUrl: 'https://github.com/akhilreddy89/route-optimization',
    liveUrl: '',
    year: '2026',
    featured: true,
  },
];

export const education = [
  {
    id: 'btech',
    school: 'Malla Reddy Engineering College',
    degree: 'B.Tech in Information Technology',
    period: '2023 — Present',
    detail: 'CGPA: 9.09 / 10',
  },
  {
    id: 'intermediate',
    school: 'TS Model School & Junior College',
    degree: 'Intermediate (MPC)',
    period: '2021 — 2023',
    detail: '97.8%',
  },
  {
    id: 'ssc',
    school: 'TS Model School',
    degree: 'Telangana State Board of Secondary Education',
    period: '2021',
    detail: '100%',
  },
];

export const githubStats = {
  username: 'akhilreddymanda89',
  // These are placeholders — wire up to the real GitHub API or
  // a service like github-readme-stats for live data. See GithubStats.jsx.
  totalRepos: 12,
  currentStreak: 14,
  topLanguages: ['JavaScript', 'Java', 'Python', 'C'],
};

export const navLinks = [
  { label: 'Home', hash: 'hero' },
  { label: 'About', hash: 'about' },
  { label: 'Skills', hash: 'skills' },
  { label: 'Projects', hash: 'projects' },
  { label: 'Education', hash: 'education' },
  { label: 'GitHub', hash: 'github-stats' },
  { label: 'Contact', hash: 'contact' },
];
