export const portfolioData = {
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript/Node.js", desc: "Full-stack development with ES6+ and async/await patterns" },
        { name: "Python", desc: "Scripting, automation, and backend development with Flask/Django" },
        { name: "TypeScript", desc: "Strongly-typed JavaScript for scalable applications" },
        { name: "SQL", desc: "Querying and managing relational databases (PostgreSQL, MySQL)" },
        { name: "PHP", desc: "Server-side scripting for web applications and legacy systems" },
        { name: "C#", desc: "Backend development with .NET ecosystem" },
        { name: "HTML/CSS", desc: "Semantic markup and responsive design using modern CSS (Flexbox, Grid)" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "Express.js", desc: "Minimalist Node.js web framework for building APIs" },
        { name: "Fastify", desc: "High-performance web framework optimized for low overhead" },
        { name: "Next.js", desc: "React framework for server-rendered and static websites" },
        { name: "Flask", desc: "Lightweight Python web framework for microservices and APIs" },
        { name: "Laravel", desc: "PHP MVC framework for elegant, full-stack web applications" },
        { name: ".NET", desc: "Microsoft's framework for building enterprise-grade applications" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", desc: "Relational database with advanced features and ACID compliance" },
        { name: "MongoDB", desc: "NoSQL document database for flexible, scalable data models" },
        { name: "MySQL", desc: "Popular open-source relational database system" }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Docker", desc: "Containerization platform for consistent development and deployment" },
        { name: "AWS", desc: "Cloud services including EC2, S3, Lambda, and RDS" },
        { name: "Git", desc: "Version control system for collaborative code management" },
        { name: "RESTful APIs", desc: "Design and implementation of stateless, resource-based web services" },
        { name: "MVC Architecture", desc: "Model-View-Controller pattern for clean separation of concerns" },
        { name: "Eloquent ORM", desc: "Active Record implementation for Laravel to interact with databases" }
      ]
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce API",
      subtitle: "E-Commerce REST API",
      description: "Full-featured e-commerce backend with authentication, payment processing, and order management.",
      technologies: ["Node.js", "Express", "MongoDB"],
      gradient: "from-teal-400 to-cyan-500",
      icon: `<svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
             </svg>`
    },
    {
      id: 2,
      title: "Real-time Chat",
      subtitle: "Real-time Chat System",
      description: "Scalable WebSocket-based chat application supporting thousands of concurrent users with message encryption.",
      technologies: ["Node.js", "Socket.io", "Redis"],
      gradient: "from-green-400 to-teal-500",
      icon: `<svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
             </svg>`
    },
    {
      id: 3,
      title: "Microservices",
      subtitle: "Microservices Architecture",
      description: "Containerized microservices ecosystem with Kubernetes orchestration and service mesh implementation.",
      technologies: ["Docker", "Kubernetes", "gRPC"],
      gradient: "from-blue-400 to-indigo-500",
      icon: `<svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
             </svg>`
    }
  ],

  experience: [
    {
      title: "Backend Developer",
      company: "SANA COMPUTER COMPANY",
      period: "May 2024 - Present",
      responsibilities: [
        "Develop and maintain web applications using PHP and Laravel framework, implementing MVC architecture",
        "Create mobile applications using .NET C# with a focus on building robust APIs for seamless frontend-backend communication",
        "Design and implement RESTful APIs for cross-platform functionality",
        "Utilize Eloquent ORM for efficient database interactions and management",
        "Implement secure authentication and authorization systems",
        "Integrate responsive UI/UX designs using HTML, CSS, and JavaScript",
        "Collaborate with clients to understand requirements and deliver solutions that meet their business needs"
      ]
    },
    {
      title: "Software Development Intern",
      company: "SANA COMPUTER COMPANY",
      period: "March 2024 - May 2024",
      responsibilities: [
        "Contributed to PHP/Laravel development projects under senior developer mentorship",
        "Implemented features using MVC architecture and Eloquent ORM",
        "Assisted in building RESTful API endpoints for client-side consumption",
        "Practiced version control using Git in a collaborative environment",
        "Participated in debugging sessions and code reviews to improve solution quality",
        "Gained practical experience in software development lifecycle and team collaboration"
      ]
    }
  ],

  projectDetails: {
    '1': {
      title: 'E-Commerce REST API',
      tech: ['Node.js', 'Express', 'MongoDB'],
      description: 'Full-featured e-commerce backend API with comprehensive user authentication, product management, order processing, and payment integration. Built with modern JavaScript technologies and designed for high scalability and performance.',
      image: 'from-teal-400 to-cyan-500',
      features: [
        {
          title: 'Secure Authentication',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
          description: 'JWT-based authentication system with role-based access control. Supports OAuth integration, password reset functionality, and session management with refresh tokens for enhanced security.'
        },
        {
          title: 'Payment Integration',
          icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
          description: 'Seamless integration with Stripe and PayPal for secure payment processing. Supports multiple currencies, subscription billing, and automated refund handling with webhook verification.'
        },
        {
          title: 'Real-time Analytics',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          description: 'Advanced analytics dashboard providing real-time insights into sales performance, user behavior, and inventory levels. Features customizable reports and automated alerting system.'
        },
        {
          title: 'Inventory Management',
          icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
          description: 'Comprehensive inventory tracking system with automated stock alerts, low-stock notifications, and intelligent reorder point calculations. Supports multi-warehouse management and bulk operations.'
        }
      ]
    },
    '2': {
      title: 'Real-time Chat System',
      tech: ['Socket.io', 'WebSocket', 'Redis'],
      description: 'Modern real-time chat application built with WebSocket technology for instant messaging. Features user authentication, message encryption, file sharing, and group chat functionality with a clean, responsive interface.',
      image: 'from-green-400 to-teal-500',
      features: [
        {
          title: 'Real-time Messaging',
          icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
          description: 'Instant message delivery using WebSocket connections with Socket.io. Supports typing indicators, read receipts, and message status tracking for enhanced user experience.'
        },
        {
          title: 'Message Encryption',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
          description: 'End-to-end encryption for all messages using AES-256 encryption. Ensures complete privacy and security for all user communications with secure key exchange mechanisms.'
        },
        {
          title: 'File Sharing',
          icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
          description: 'Secure file sharing with support for multiple file formats, drag-and-drop upload, and automatic virus scanning. Includes file preview and download tracking capabilities.'
        },
        {
          title: 'Group Management',
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
          description: 'Advanced group management features including role-based permissions, moderation tools, and customizable notification settings. Supports nested groups and cross-group messaging.'
        }
      ]
    },
    '3': {
      title: 'Microservices Architecture',
      tech: ['Docker', 'Kubernetes', 'gRPC'],
      description: 'Scalable microservices architecture built for enterprise applications. Features service mesh implementation, API gateway, distributed caching, and comprehensive monitoring for high availability and performance.',
      image: 'from-blue-400 to-indigo-500',
      features: [
        {
          title: 'Service Mesh',
          icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z',
          description: 'Advanced service mesh implementation with Istio for traffic management, security, and observability. Features automatic service discovery and intelligent load balancing.'
        },
        {
          title: 'API Gateway',
          icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
          description: 'Centralized API gateway with request routing, authentication, rate limiting, and protocol translation. Supports GraphQL and REST with comprehensive monitoring.'
        },
        {
          title: 'Distributed Caching',
          icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
          description: 'High-performance distributed caching layer with Redis cluster for improved response times and reduced database load. Features cache invalidation and data synchronization.'
        },
        {
          title: 'Monitoring & Observability',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          description: 'Comprehensive monitoring with Prometheus, Grafana, and distributed tracing. Real-time alerts, performance metrics, and health checks for all services.'
        }
      ]
    }
  },

  education: [
    {
      degree: "Bachelor's Degree in Computer Information Systems",
      institution: "CIS College | Tripoli, Lebanon",
      period: "November 2022 - July 2024",
      details: [
        "Focused on software development and database management",
        "Completed practical programming projects using various languages and frameworks",
        "Developed strong problem-solving skills through algorithmic challenges"
      ],
      acronym: "CIS",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      degree: "Technical Baccalaureate in Business",
      institution: "SUC College | Tripoli, Lebanon",
      period: "November 2019 - November 2020",
      details: [
        "Gained foundation in business principles including management, marketing, and finance",
        "Developed understanding of business operations and entrepreneurship"
      ],
      acronym: "SUC",
      gradient: "from-cyan-400 to-blue-500"
    }
  ],

  contact: {
    email: "anwarioanan@gmail.com",
    phone: "+961 81 827 195",
    location: "Tripoli, Lebanon",
    github: "https://github.com/anwario112",
    linkedin: "https://www.linkedin.com/in/anwar-jundi-83440927a",
    availability: {
      responseTime: "I typically respond within 24 hours",
      schedule: "Available for remote work and flexible hours",
      projectTypes: "Backend APIs, web applications, database systems, consulting"
    }
  },

  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Full Professional Proficiency" },
    { name: "French", level: "Elementary Proficiency" }
  ],

  personal: {
    name: "Anwar El Jundi",
    title: "Backend Developer & API Specialist",
    description: "Versatile Backend Engineer with experience in web and mobile application development. Proficient in backend technologies including PHP/Laravel and .NET C#, with strong knowledge of database management and API development. Committed to delivering clean, efficient code and responsive user experiences."
  }
};
