import { Code2, Cloud, Database, TestTube, Coffee, Leaf, Box, GitBranch, Server, Globe, Wrench } from 'lucide-react';

export const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Java", icon: Coffee },
        { name: "Spring Boot", icon: Leaf },
        { name: "React", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Node.js", icon: Server },
        { name: "Angular", icon: Code2 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: Cloud },
        { name: "Docker", icon: Box },
        { name: "Terraform", icon: Cloud },
        { name: "Jenkins", icon: Wrench },
        { name: "Kubernetes", icon: Globe },
        { name: "Azure", icon: Cloud }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "Redis", icon: Database },
        { name: "DynamoDB", icon: Database }
      ]
    },
    {
      title: "Testing & Tools",
      skills: [
        { name: "JUnit", icon: TestTube },
        { name: "Git", icon: GitBranch },
        { name: "Postman", icon: Wrench },
        { name: "Jest", icon: TestTube },
        { name: "Selenium", icon: TestTube }
      ]
    }
  ];