
import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Cpu,
  Server,
  Layout,
  Layers,
  Cloud
} from 'lucide-react';
import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Kaucikan G",
  role: "Backend Developer & CS Student",
  email: "gkaucikan@gmail.com",
  phone: "+91 99527 20372",
  location: "Hosur, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/kaucikan-g-2434a5296/",
  github: "https://github.com/Kaucikan",
  summary: "Motivated computer science student with hands-on experience in Python backend development using Django, SQL, and MongoDB. Strong understanding of REST APIs, backend logic, and database management. Seeking an entry-level backend or internship role to apply technical skills in real-world applications."
};

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript"],
    icon: <Code2 className="w-5 h-5 text-blue-400" />
  },
  {
    category: "Backend",
    items: ["Django", "Node.js", "Express.js"],
    icon: <Server className="w-5 h-5 text-emerald-400" />
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL", "MongoDB"],
    icon: <Database className="w-5 h-5 text-amber-400" />
  },
  {
    category: "Web & Tools",
    items: ["React", "Tailwind CSS", "Git", "Azure (Basics)"],
    icon: <Globe className="w-5 h-5 text-indigo-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Student Management System",
    description: [
      "Developed a backend web application using Django and SQL.",
      "Implemented CRUD operations, user authentication, and database integration."
    ],
    tech: ["Django", "SQL", "Python"],
    icon: "🎓"
  },
  {
    title: "REST API for User Management",
    description: [
      "Designed and developed RESTful APIs using Node.js and Express.js.",
      "Integrated MongoDB for data storage and tested APIs using Postman."
    ],
    tech: ["Node.js", "Express", "MongoDB", "Postman"],
    icon: "🔑"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "IT Intern",
    company: "Titan Company Limited",
    duration: "4 Weeks",
    details: [
      "Learned basics of Microsoft Azure cloud services and enterprise IT infrastructure.",
      "Observed device management, system monitoring, and departmental IT workflows."
    ]
  },
  {
    role: "Community Volunteer",
    company: "Social Initiatives",
    duration: "Ongoing",
    details: [
      "Actively participated in voluntary and community activities, demonstrating teamwork and social awareness.",
      "Assisted in organizing and supporting events, helping peers, and contributing time to initiatives."
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Technology in Computer Science & Business Systems",
  institution: "ER. Perumal Manimekalai College of Engineering, Hosur (Anna University)",
  graduation: "2027",
  cgpa: "8.4"
};
