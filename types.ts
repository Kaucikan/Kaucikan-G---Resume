
// Fix: Import React to provide the 'React' namespace for React.ReactNode
import React from 'react';

export interface Project {
  title: string;
  description: string[];
  tech: string[];
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}