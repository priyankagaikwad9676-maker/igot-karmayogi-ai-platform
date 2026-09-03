export const USERS = {
  "learner": {
    "id": "usr-001",
    "name": "Rajesh Sharma",
    "email": "rajesh.sharma@gov.in",
    "role": "learner",
    "designation": "Section Officer (e-Governance)",
    "department": "Ministry of Electronics & Information Technology (MeitY)",
    "cadre": "Central Secretariat Service (CSS)",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "employeeId": "GOI-CSS-88421",
    "joinedDate": "12 May 2022",
    "learningStreakDays": 14,
    "totalHoursLearned": 48.5,
    "competenciesAchieved": 12,
    "targetCompetencies": 16,
    "certificatesCount": 5,
    "overallProgress": 74
  },
  "official": {
    "id": "usr-002",
    "name": "Dr. Priya Nair",
    "email": "priya.nair@dopt.gov.in",
    "role": "official",
    "designation": "Director of Capacity Building & Training",
    "department": "Department of Personnel and Training (DoPT)",
    "cadre": "Indian Administrative Service (IAS)",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "employeeId": "IAS-KL-2012-901",
    "joinedDate": "10 Aug 2018",
    "assignedLearnersCount": 42,
    "departmentComplianceRate": 88.5,
    "pendingApprovals": 6,
    "activeTrainingPrograms": 8
  },
  "admin": {
    "id": "usr-003",
    "name": "Amitabh Verma",
    "email": "admin.karmayogi@gov.in",
    "role": "admin",
    "designation": "Chief Platform Architect & Administrator",
    "department": "Capacity Building Commission / Digital India Corp",
    "cadre": "Senior Technical Director",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "employeeId": "DIC-ADMIN-001",
    "joinedDate": "01 Jan 2021",
    "totalSystemUsers": 1428500,
    "totalCourses": 450,
    "totalAssessments": 120,
    "systemUptime": "99.98%"
  }
};
export const FRAC_COMPETENCIES = [
  {
    "id": "comp-1",
    "name": "Strategic Thinking & Policy Formulation",
    "type": "Behavioral",
    "currentLevel": 4,
    "targetLevel": 5,
    "score": 82
  },
  {
    "id": "comp-2",
    "name": "Citizen Centricity & Empathy",
    "type": "Behavioral",
    "currentLevel": 4,
    "targetLevel": 4,
    "score": 90
  },
  {
    "id": "comp-3",
    "name": "Ethics & Integrity in Public Life",
    "type": "Behavioral",
    "currentLevel": 5,
    "targetLevel": 5,
    "score": 95
  },
  {
    "id": "comp-4",
    "name": "Public Procurement (GFR & GeM)",
    "type": "Functional",
    "currentLevel": 3,
    "targetLevel": 5,
    "score": 68
  },
  {
    "id": "comp-5",
    "name": "Digital Public Infrastructure (DPI)",
    "type": "Domain",
    "currentLevel": 4,
    "targetLevel": 5,
    "score": 85
  },
  {
    "id": "comp-6",
    "name": "AI & Emerging Tech in Governance",
    "type": "Domain",
    "currentLevel": 2,
    "targetLevel": 4,
    "score": 55
  },
  {
    "id": "comp-7",
    "name": "Cybersecurity & Data Privacy (DPDP)",
    "type": "Domain",
    "currentLevel": 3,
    "targetLevel": 4,
    "score": 64
  },
  {
    "id": "comp-8",
    "name": "Project Monitoring & PRAGATI",
    "type": "Functional",
    "currentLevel": 4,
    "targetLevel": 4,
    "score": 88
  }
];
export const COURSES = [
  {
    "id": "crs-ai-01",
    "title": "Generative AI for Governance & Public Policy Implementation",
    "category": "Emerging Tech & AI",
    "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    "instructor": "Prof. Ananya Sen (IIT Delhi / MeitY Advisor)",
    "duration": "4.5 Hours",
    "difficulty": "Intermediate",
    "rating": 4.9,
    "enrolledCount": 14200,
    "progress": 65,
    "isEnrolled": true,
    "skillsGained": [
      "LLM Applications in Public Welfare",
      "RAG Systems",
      "Prompt Engineering for Policy Drafting",
      "Ethical AI Principles"
    ],
    "competencyTag": "AI & Emerging Tech in Governance",
    "description": "Master practical applications of Large Language Models, Retrieval-Augmented Generation, and vector search in citizen services, draft policy summaries, and multi-lingual grievance resolution.",
    "modules": [
      {
        "id": "m1",
        "title": "1. Introduction to Foundation Models in Government",
        "duration": "35 mins",
        "completed": true
      },
      {
        "id": "m2",
        "title": "2. Developing RAG Architectures for Legal & Policy Docs",
        "duration": "50 mins",
        "completed": true
      },
      {
        "id": "m3",
        "title": "3. Multi-Lingual Citizen Chatbots & Bhashini Integration",
        "duration": "45 mins",
        "completed": true
      },
      {
        "id": "m4",
        "title": "4. Responsible AI, Bias Mitigation & Data Privacy",
        "duration": "60 mins",
        "completed": false
      },
      {
        "id": "m5",
        "title": "5. Capstone: Automated Grievance Routing System",
        "duration": "40 mins",
        "completed": false
      }
    ]
  },
  {
    "id": "crs-gem-02",
    "title": "Public Procurement via GeM (Government e-Marketplace) & GFR 2017",
    "category": "Finance & Procurement",
    "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    "instructor": "Shri S. K. Mukherjee (Former Financial Advisor, MoF)",
    "duration": "6.0 Hours",
    "difficulty": "Advanced",
    "rating": 4.8,
    "enrolledCount": 38400,
    "progress": 100,
    "isEnrolled": true,
    "skillsGained": [
      "GFR Rule 149 Compliance",
      "Reverse Auction",
      "Custom Bidding & L1 Selection",
      "Contract Lifecycle Management"
    ],
    "competencyTag": "Public Procurement (GFR & GeM)",
    "description": "A comprehensive walk-through of General Financial Rules (GFR) 2017 amendments, direct purchase thresholds, custom BOQ bidding, service contract SLAs, and dispute mitigation on GeM portal.",
    "modules": [
      {
        "id": "m1",
        "title": "1. Overview of GFR 2017 & Procurement Norms",
        "duration": "45 mins",
        "completed": true
      },
      {
        "id": "m2",
        "title": "2. GeM Portal Navigation & Seller Verification",
        "duration": "50 mins",
        "completed": true
      },
      {
        "id": "m3",
        "title": "3. Direct Purchase vs L1 vs Custom Bid Workflow",
        "duration": "60 mins",
        "completed": true
      },
      {
        "id": "m4",
        "title": "4. Inspection, CRAC Generation & Timely Payments",
        "duration": "55 mins",
        "completed": true
      }
    ]
  },
  {
    "id": "crs-dpi-03",
    "title": "Digital Public Infrastructure (DPI): Architecture & Scalability",
    "category": "Digital Governance",
    "thumbnail": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    "instructor": "Dr. Ramanathan Iyer (National Informatics Centre)",
    "duration": "5.0 Hours",
    "difficulty": "Intermediate",
    "rating": 4.9,
    "enrolledCount": 22100,
    "progress": 30,
    "isEnrolled": true,
    "skillsGained": [
      "Aadhaar Auth & eKYC",
      "DigiLocker Integration",
      "UPI/PFMS Rails",
      "Open Protocol Architecture"
    ],
    "competencyTag": "Digital Public Infrastructure (DPI)",
    "description": "Understand India Stack pillars: identity layer, payments rails, and data empowerment and protection architecture (DEPA) for delivering frictionless public services.",
    "modules": [
      {
        "id": "m1",
        "title": "1. India Stack Fundamentals",
        "duration": "40 mins",
        "completed": true
      },
      {
        "id": "m2",
        "title": "2. Open APIs & Interoperability Standards",
        "duration": "50 mins",
        "completed": false
      },
      {
        "id": "m3",
        "title": "3. Consent Manager Frameworks & DEPA",
        "duration": "60 mins",
        "completed": false
      },
      {
        "id": "m4",
        "title": "4. High-Throughput Resilience & Disaster Recovery",
        "duration": "45 mins",
        "completed": false
      }
    ]
  },
  {
    "id": "crs-cyber-04",
    "title": "Cyber Security Guidelines & DPDP Act Compliance in e-Governance",
    "category": "Cybersecurity & Law",
    "thumbnail": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    "instructor": "CERT-In & NCIIPC Joint Training Cell",
    "duration": "3.5 Hours",
    "difficulty": "Intermediate",
    "rating": 4.7,
    "enrolledCount": 19800,
    "progress": 0,
    "isEnrolled": false,
    "skillsGained": [
      "CERT-In Directions 2022",
      "Data Protection Officer (DPO) Duties",
      "Incident Reporting Protocols",
      "Zero Trust Architecture"
    ],
    "competencyTag": "Cybersecurity & Data Privacy (DPDP)",
    "description": "Essential protocols for safeguarding government databases, responding to phishing and ransomware threats, and complying with the Digital Personal Data Protection (DPDP) Act.",
    "modules": [
      {
        "id": "m1",
        "title": "1. Threat Landscape for Government Portals",
        "duration": "30 mins",
        "completed": false
      },
      {
        "id": "m2",
        "title": "2. Mandatory 6-Hour Incident Reporting to CERT-In",
        "duration": "40 mins",
        "completed": false
      },
      {
        "id": "m3",
        "title": "3. DPDP Act Obligations & Consent Lifecycles",
        "duration": "50 mins",
        "completed": false
      },
      {
        "id": "m4",
        "title": "4. Cloud Security & NIC/MeitY Empanelled Cloud",
        "duration": "40 mins",
        "completed": false
      }
    ]
  },
  {
    "id": "crs-pragati-05",
    "title": "Pro-Active Governance & Timely Implementation (PRAGATI) Leadership",
    "category": "Project Management",
    "thumbnail": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    "instructor": "Cabinet Secretariat Resource Group",
    "duration": "4.0 Hours",
    "difficulty": "Beginner to Intermediate",
    "rating": 4.9,
    "enrolledCount": 15300,
    "progress": 0,
    "isEnrolled": false,
    "skillsGained": [
      "Inter-Ministerial Coordination",
      "GIS Dashboard Monitoring",
      "Milestone Tracking",
      "Bottleneck Escalation"
    ],
    "competencyTag": "Project Monitoring & PRAGATI",
    "description": "Techniques for multi-modal, three-tier platform project monitoring connecting PMO, Union Government Secretaries, and Chief Secretaries of States.",
    "modules": [
      {
        "id": "m1",
        "title": "1. PRAGATI Architecture & Principles",
        "duration": "35 mins",
        "completed": false
      },
      {
        "id": "m2",
        "title": "2. Real-Time Geospatial & Drone Tracking Tools",
        "duration": "45 mins",
        "completed": false
      },
      {
        "id": "m3",
        "title": "3. Cross-Departmental Issue Resolution",
        "duration": "50 mins",
        "completed": false
      }
    ]
  },
  {
    "id": "crs-ethics-06",
    "title": "Ethics, Transparency & RTI Act Implementation for Public Servants",
    "category": "Behavioral & Legal",
    "thumbnail": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
    "instructor": "Central Information Commission (CIC) Experts",
    "duration": "3.0 Hours",
    "difficulty": "Beginner",
    "rating": 4.9,
    "enrolledCount": 42000,
    "progress": 100,
    "isEnrolled": true,
    "skillsGained": [
      "Section 4 Proactive Disclosure",
      "First Appellate Authority Workflow",
      "Conflict of Interest Identification"
    ],
    "competencyTag": "Ethics & Integrity in Public Life",
    "description": "Practical guide to fostering transparent governance, upholding ethical standards, and adhering to strict statutory timelines under the RTI Act 2005.",
    "modules": [
      {
        "id": "m1",
        "title": "1. Civil Services Code of Conduct & Values",
        "duration": "30 mins",
        "completed": true
      },
      {
        "id": "m2",
        "title": "2. RTI Act: Key Clauses, Exemptions (Sec 8 & 9)",
        "duration": "45 mins",
        "completed": true
      },
      {
        "id": "m3",
        "title": "3. Digital RTI Portal & Appeal Handling",
        "duration": "45 mins",
        "completed": true
      }
    ]
  }
];
export const AI_RECOMMENDATIONS = [
  {
    "courseId": "crs-ai-01",
    "title": "Generative AI for Governance & Public Policy Implementation",
    "matchPercentage": 98,
    "competencyGap": "AI & Emerging Tech in Governance (Current: 55% | Target: 85%)",
    "reason": "Your role as Section Officer in MeitY involves evaluating automated grievance workflows. Mastering LLMs and RAG will close your 30% gap in emerging tech competency.",
    "category": "High Priority Gap",
    "difficulty": "Intermediate",
    "estimatedTime": "4.5 Hours",
    "priority": "Urgent",
    "recommendedBy": "Karmayogi AI Adaptive Engine (Vector Similarity: 0.984)"
  },
  {
    "courseId": "crs-cyber-04",
    "title": "Cyber Security Guidelines & DPDP Act Compliance in e-Governance",
    "matchPercentage": 94,
    "competencyGap": "Cybersecurity & Data Privacy (Current: 64% | Target: 85%)",
    "reason": "Mandatory compliance refresh required under new CERT-In 2024 directives for all central secretariat personnel managing citizen database interfaces.",
    "category": "Statutory Mandate",
    "difficulty": "Intermediate",
    "estimatedTime": "3.5 Hours",
    "priority": "High",
    "recommendedBy": "DoPT Capacity Building Commission Directive"
  },
  {
    "courseId": "crs-pragati-05",
    "title": "Pro-Active Governance & Timely Implementation (PRAGATI) Leadership",
    "matchPercentage": 89,
    "competencyGap": "Project Monitoring & PRAGATI (Current: 88% | Target: 95%)",
    "reason": "Ideal for career progression into Under Secretary role. Enhances your multi-ministerial infrastructure project tracking capabilities.",
    "category": "Career Growth",
    "difficulty": "Intermediate",
    "estimatedTime": "4.0 Hours",
    "priority": "Medium",
    "recommendedBy": "Cadre Progression Roadmap"
  },
  {
    "courseId": "crs-dpi-03",
    "title": "Digital Public Infrastructure (DPI): Architecture & Scalability",
    "matchPercentage": 86,
    "competencyGap": "Digital Public Infrastructure (Current: 85% | Target: 95%)",
    "reason": "Deepen your expertise in API-first governance, DigiLocker verifiable credentials, and Aadhaar consent frameworks.",
    "category": "Skill Mastery",
    "difficulty": "Intermediate",
    "estimatedTime": "5.0 Hours",
    "priority": "Medium",
    "recommendedBy": "Peer Benchmarking across MeitY"
  }
];
export const ASSESSMENTS = [
  {
    "id": "asm-ai-gov",
    "title": "National AI in Governance & Digital Ethics Competency Benchmark",
    "domain": "Domain Competency",
    "duration": "20 Mins",
    "totalQuestions": 5,
    "passingScore": 70,
    "difficulty": "Intermediate",
    "status": "Available",
    "targetCompetency": "AI & Emerging Tech in Governance",
    "description": "Evaluates your ability to safely deploy foundation models, craft verified policy prompts, ensure data privacy, and prevent hallucination in government service bots.",
    "lastScore": null
  },
  {
    "id": "asm-gfr-procure",
    "title": "GFR 2017 & GeM Public Procurement Certification Exam",
    "domain": "Functional Competency",
    "duration": "25 Mins",
    "totalQuestions": 12,
    "passingScore": 75,
    "difficulty": "Advanced",
    "status": "Completed",
    "targetCompetency": "Public Procurement (GFR & GeM)",
    "description": "Tests mastery over rule 149, bidding exemptions, direct purchase ceilings, liquidated damages calculation, and CRAC compliance.",
    "lastScore": 84,
    "completedAt": "18 Aug 2026",
    "certificateId": "KY-GFR-2026-8821"
  },
  {
    "id": "asm-cyber-defense",
    "title": "Cyber Resilience, CERT-In Protocols & DPDP Compliance Test",
    "domain": "Domain Competency",
    "duration": "15 Mins",
    "totalQuestions": 8,
    "passingScore": 70,
    "difficulty": "Intermediate",
    "status": "Available",
    "targetCompetency": "Cybersecurity & Data Privacy",
    "description": "Assess readiness for incident containment, 6-hour CERT-In notifications, anonymization techniques, and citizen consent logs.",
    "lastScore": 64,
    "completedAt": "05 Jul 2026 (Needs Improvement)"
  },
  {
    "id": "asm-citizen-centric",
    "title": "Citizen-Centric Administration & Grievance Redressal (CPGRAMS)",
    "domain": "Behavioral Competency",
    "duration": "15 Mins",
    "totalQuestions": 10,
    "passingScore": 80,
    "difficulty": "Beginner",
    "status": "Completed",
    "targetCompetency": "Citizen Centricity & Empathy",
    "description": "Measures empathy, resolution timeliness, appeal handling quality, and root cause analysis of public grievances.",
    "lastScore": 92,
    "completedAt": "10 Jun 2026",
    "certificateId": "KY-CPGRAMS-9912"
  }
];
export const QUIZ_DATA = {
  "asm-ai-gov": {
    "assessmentId": "asm-ai-gov",
    "title": "National AI in Governance & Digital Ethics Benchmark",
    "timeLimitSeconds": 600,
    "competencyTag": "AI & Emerging Tech in Governance",
    "questions": [
      {
        "id": "q1",
        "question": "In the context of government AI implementations, what is the primary purpose of Retrieval-Augmented Generation (RAG)?",
        "options": [
          "To speed up the training of massive billion-parameter models from scratch.",
          "To ground the model responses in verified, authoritative government circulars and reduce hallucination.",
          "To automatically translate citizen voice inputs into binary machine code.",
          "To bypass data protection firewalls when querying foreign servers."
        ],
        "correctAnswer": 1,
        "explanation": "RAG connects foundation LLMs with authoritative departmental databases, policy documents, and gazettes so the AI generates factually accurate, verifiable responses with citations."
      },
      {
        "id": "q2",
        "question": "Under the Digital Personal Data Protection (DPDP) Act 2023, what is a mandatory requirement when processing citizen data for AI systems?",
        "options": [
          "Citizens must be paid a cash stipend for each prompt submitted.",
          "Data must be anonymized or processed with explicit purpose-specific consent unless exempted under statutory grounds.",
          "Government systems can freely transfer citizen biometric data to private third-party cloud servers overseas.",
          "AI models are exempt from all transparency obligations."
        ],
        "correctAnswer": 1,
        "explanation": "The DPDP Act mandates strict purpose limitation, data minimization, and anonymization principles when handling citizen data for machine learning and automated systems."
      },
      {
        "id": "q3",
        "question": "Which Indian digital initiative provides open APIs and language translation AI models for governance in 22 scheduled languages?",
        "options": [
          "Digital AI Voice Rail",
          "Bhashini (National Language Translation Mission)",
          "Bhasha Setu Private Cloud",
          "Karmayogi Audio Rail"
        ],
        "correctAnswer": 1,
        "explanation": "Digital India Bhashini platform offers state-of-the-art speech-to-text, translation, and text-to-speech models across Indian scheduled languages for citizen service delivery."
      },
      {
        "id": "q4",
        "question": "When evaluating an AI-generated draft of a Cabinet Note or Policy Brief, what is the civil servant primary statutory responsibility?",
        "options": [
          "Sign the draft directly without reading to expedite administrative turnaround.",
          "Verify facts, statutory alignment, financial implications, and cross-reference citations as the human in the loop.",
          "Delete all draft records so audit trails are minimized.",
          "Forward the unverified draft directly to the media."
        ],
        "correctAnswer": 1,
        "explanation": "AI serves strictly as an assistive tool (Human-in-the-loop). Civil servants remain fully accountable for verifying accuracy, rules compliance, and policy soundness."
      },
      {
        "id": "q5",
        "question": "What is a Vector Database primarily used for in modern government AI architecture?",
        "options": [
          "Storing vector graphics (.svg) icons for government websites.",
          "Storing high-dimensional mathematical embeddings of text and policies to enable semantic search.",
          "Managing employee payroll calculations in Excel format.",
          "Executing hardware level cooling for data center servers."
        ],
        "correctAnswer": 1,
        "explanation": "Vector databases store embeddings that capture semantic context, enabling similarity matching between a citizen query and thousands of government rulebooks in milliseconds."
      }
    ]
  }
};
export const LEARNER_PROGRESS_METRICS = {
  "monthlyHours": [
    {
      "month": "Mar",
      "hours": 6,
      "score": 65
    },
    {
      "month": "Apr",
      "hours": 9,
      "score": 68
    },
    {
      "month": "May",
      "hours": 14,
      "score": 72
    },
    {
      "month": "Jun",
      "hours": 12,
      "score": 76
    },
    {
      "month": "Jul",
      "hours": 18,
      "score": 81
    },
    {
      "month": "Aug",
      "hours": 22,
      "score": 85
    }
  ],
  "competencyRadar": [
    {
      "subject": "Strategic Policy",
      "achieved": 82,
      "target": 90,
      "fullMark": 100
    },
    {
      "subject": "Citizen Centricity",
      "achieved": 90,
      "target": 85,
      "fullMark": 100
    },
    {
      "subject": "Ethics & Integrity",
      "achieved": 95,
      "target": 95,
      "fullMark": 100
    },
    {
      "subject": "Public Procurement",
      "achieved": 68,
      "target": 85,
      "fullMark": 100
    },
    {
      "subject": "Digital Infrastructure",
      "achieved": 85,
      "target": 90,
      "fullMark": 100
    },
    {
      "subject": "AI in Governance",
      "achieved": 55,
      "target": 80,
      "fullMark": 100
    },
    {
      "subject": "Cybersecurity",
      "achieved": 64,
      "target": 85,
      "fullMark": 100
    },
    {
      "subject": "Project Monitoring",
      "achieved": 88,
      "target": 85,
      "fullMark": 100
    }
  ],
  "completedCourses": [
    {
      "id": "crs-gem-02",
      "title": "Public Procurement via GeM & GFR 2017",
      "score": 84,
      "completedDate": "18 Aug 2026",
      "certificateId": "KY-GFR-2026-8821"
    },
    {
      "id": "crs-ethics-06",
      "title": "Ethics, Transparency & RTI Act Implementation",
      "score": 96,
      "completedDate": "12 May 2026",
      "certificateId": "KY-RTI-2026-4412"
    }
  ]
};
export const OFFICIAL_TEAM_DATA = {
  "learners": [
    {
      "id": "l-1",
      "name": "Rajesh Sharma",
      "designation": "Section Officer",
      "email": "rajesh.sharma@gov.in",
      "cadre": "CSS",
      "progress": 74,
      "assignedCourses": 4,
      "completedCourses": 2,
      "status": "Active",
      "risk": "Low",
      "lastActive": "2 Hours ago"
    },
    {
      "id": "l-2",
      "name": "Sunita Deshmukh",
      "designation": "Under Secretary",
      "email": "sunita.d@gov.in",
      "cadre": "CSS",
      "progress": 91,
      "assignedCourses": 5,
      "completedCourses": 4,
      "status": "Active",
      "risk": "Low",
      "lastActive": "Yesterday"
    },
    {
      "id": "l-3",
      "name": "Vikramaditya Rao",
      "designation": "Assistant Director",
      "email": "vikram.rao@gov.in",
      "cadre": "Technical",
      "progress": 42,
      "assignedCourses": 4,
      "completedCourses": 1,
      "status": "Behind Schedule",
      "risk": "High",
      "lastActive": "6 Days ago"
    },
    {
      "id": "l-4",
      "name": "Meenakshi Sundaram",
      "designation": "Desk Officer",
      "email": "meenakshi.s@gov.in",
      "cadre": "CSS",
      "progress": 85,
      "assignedCourses": 3,
      "completedCourses": 2,
      "status": "Active",
      "risk": "Low",
      "lastActive": "3 Hours ago"
    },
    {
      "id": "l-5",
      "name": "Harpreet Singh",
      "designation": "Deputy Director",
      "email": "harpreet.singh@gov.in",
      "cadre": "ITS",
      "progress": 62,
      "assignedCourses": 5,
      "completedCourses": 3,
      "status": "Moderate",
      "risk": "Medium",
      "lastActive": "1 Day ago"
    },
    {
      "id": "l-6",
      "name": "Kavita Sengupta",
      "designation": "Section Officer",
      "email": "kavita.s@gov.in",
      "cadre": "CSS",
      "progress": 79,
      "assignedCourses": 4,
      "completedCourses": 3,
      "status": "Active",
      "risk": "Low",
      "lastActive": "4 Hours ago"
    }
  ],
  "cadreDistribution": [
    {
      "cadre": "Central Secretariat Service (CSS)",
      "count": 18,
      "avgProgress": 82
    },
    {
      "cadre": "Indian Admin Service (IAS)",
      "count": 4,
      "avgProgress": 94
    },
    {
      "cadre": "Indian Telecomm Service (ITS)",
      "count": 8,
      "avgProgress": 76
    },
    {
      "cadre": "National Informatics Centre (NIC)",
      "count": 12,
      "avgProgress": 88
    }
  ],
  "competencyDeficits": [
    {
      "competency": "AI & Emerging Tech in Governance",
      "deficitPercent": 38,
      "priority": "High"
    },
    {
      "competency": "Cybersecurity & DPDP Compliance",
      "deficitPercent": 32,
      "priority": "High"
    },
    {
      "competency": "Public Procurement (GFR 2017)",
      "deficitPercent": 24,
      "priority": "Medium"
    },
    {
      "competency": "PRAGATI Milestone Tracking",
      "deficitPercent": 12,
      "priority": "Low"
    }
  ]
};
export const ADMIN_PLATFORM_METRICS = {
  "overview": {
    "totalUsers": 1428500,
    "activeLearnersToday": 64210,
    "totalCourses": 450,
    "activeAssessments": 128,
    "completionRate": "78.4%",
    "avgAssessmentScore": "76.2%",
    "totalCertificatesIssued": 942300,
    "apiSyncHealth": "Optimal (99.98%)"
  },
  "systemIntegrations": [
    {
      "name": "iGOT Karmayogi Master API",
      "endpoint": "https://api.igotkarmayogi.gov.in/v2",
      "status": "Connected",
      "latency": "38ms",
      "lastSync": "2 mins ago"
    },
    {
      "name": "Parichay National SSO Gateway",
      "endpoint": "https://auth.parichay.nic.in/oauth2",
      "status": "Connected",
      "latency": "45ms",
      "lastSync": "1 min ago"
    },
    {
      "name": "DigiLocker Credential Repository",
      "endpoint": "https://api.digilocker.gov.in/credentials",
      "status": "Connected",
      "latency": "62ms",
      "lastSync": "8 mins ago"
    },
    {
      "name": "National Vector Knowledge Base (Milvus)",
      "endpoint": "grpc://vector.karmayogi.internal:19530",
      "status": "Connected",
      "latency": "14ms",
      "lastSync": "Realtime"
    },
    {
      "name": "PFMS / BharatKosh Course Grant Rail",
      "endpoint": "https://pfms.nic.in/api/v1/training-funds",
      "status": "Synced",
      "latency": "52ms",
      "lastSync": "15 mins ago"
    }
  ],
  "userManagement": [
    {
      "id": "u-101",
      "name": "Rajesh Sharma",
      "email": "rajesh.sharma@gov.in",
      "role": "learner",
      "department": "MeitY",
      "status": "Active",
      "joined": "12 May 2022"
    },
    {
      "id": "u-102",
      "name": "Dr. Priya Nair",
      "email": "priya.nair@dopt.gov.in",
      "role": "official",
      "department": "DoPT",
      "status": "Active",
      "joined": "10 Aug 2018"
    },
    {
      "id": "u-103",
      "name": "Amitabh Verma",
      "email": "admin.karmayogi@gov.in",
      "role": "admin",
      "department": "Capacity Building Comm",
      "status": "Active",
      "joined": "01 Jan 2021"
    },
    {
      "id": "u-104",
      "name": "Aarav Trivedi",
      "email": "aarav.t@niti.gov.in",
      "role": "learner",
      "department": "NITI Aayog",
      "status": "Active",
      "joined": "20 Jan 2023"
    },
    {
      "id": "u-105",
      "name": "Smriti Mukherjee",
      "email": "smriti.m@finmin.gov.in",
      "role": "official",
      "department": "Ministry of Finance",
      "status": "Active",
      "joined": "14 Feb 2020"
    },
    {
      "id": "u-106",
      "name": "Col. Sanjeev Rawat",
      "email": "sanjeev.r@mod.gov.in",
      "role": "learner",
      "department": "Ministry of Defence",
      "status": "Inactive",
      "joined": "09 Mar 2024"
    }
  ]
};
export const IGOT_SYNC_STATUS = {
  "connectionState": "Connected",
  "overallHealth": "99.98%",
  "lastFullSync": "Today at 07:45 AM",
  "syncChannels": [
    {
      "id": "ch-1",
      "name": "Course & Curriculum Catalog",
      "source": "iGOT Karmayogi Master Repository",
      "status": "Synced",
      "totalRecords": 450,
      "syncedRecords": 450,
      "pendingRecords": 0,
      "lastUpdated": "12 minutes ago",
      "icon": "BookOpen"
    },
    {
      "id": "ch-2",
      "name": "User Cadre & Civil List Profiles",
      "source": "DoPT Central Personnel Database & Parichay",
      "status": "Synced",
      "totalRecords": 1428500,
      "syncedRecords": 1428500,
      "pendingRecords": 0,
      "lastUpdated": "5 minutes ago",
      "icon": "Users"
    },
    {
      "id": "ch-3",
      "name": "DigiLocker Digital Credential Issuance",
      "source": "DigiLocker National Verifiable Badges",
      "status": "Synced",
      "totalRecords": 942300,
      "syncedRecords": 942280,
      "pendingRecords": 20,
      "lastUpdated": "32 seconds ago",
      "icon": "Award"
    },
    {
      "id": "ch-4",
      "name": "FRAC Competency Matrix & Gap Feeds",
      "source": "Capacity Building Commission (CBC) Rule Engine",
      "status": "Synced",
      "totalRecords": 840,
      "syncedRecords": 840,
      "pendingRecords": 0,
      "lastUpdated": "1 hour ago",
      "icon": "Cpu"
    },
    {
      "id": "ch-5",
      "name": "Real-time Telemetry & Assessment Logs",
      "source": "National Learning Analytics Store",
      "status": "Syncing",
      "totalRecords": 3894200,
      "syncedRecords": 3891000,
      "pendingRecords": 3200,
      "lastUpdated": "Just now",
      "icon": "Activity"
    }
  ],
  "recentSyncLogs": [
    {
      "timestamp": "08:14:22",
      "event": "Course Metadata delta sync completed: 4 updated records processed",
      "status": "SUCCESS"
    },
    {
      "timestamp": "08:10:05",
      "event": "Parichay OAuth2 token rotated for session pool (expires in 12h)",
      "status": "SUCCESS"
    },
    {
      "timestamp": "08:05:44",
      "event": "Vector Index updated with 12 new AI Governance gazette embeddings",
      "status": "SUCCESS"
    },
    {
      "timestamp": "07:55:10",
      "event": "DigiLocker Certificate Dispatch: 85 verifiable badges pushed",
      "status": "SUCCESS"
    },
    {
      "timestamp": "07:45:00",
      "event": "Nightly cron: Full cadre database sync finished (0 errors)",
      "status": "SUCCESS"
    }
  ]
};
