export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "/blank-document.svg", 
        initialContent: ""
    },
    { 
        id: "software-proposal", 
        label: "Software Development Proposal", 
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <h2>Project Overview</h2>
            <p>Brief description of the proposed software development project.</p>

            <h2>Scope of Work</h2>
            <p>Detailed breakdown of project deliverables and requirements.</p>

            <h2>Timeline</h2>
            <p>Project milestones and delivery schedule.</p>

            <h2>Budget</h2>
            <p>Cost breakdown and payment terms.</p>
        ` 
    },
    { 
        id: "project-proposal", 
        label: "Project Proposal", 
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <h2>Project Overview</h2>
            <p>This project aims to develop a modern web platform for digital collaboration.</p>

            <h2>Scope of Work</h2>
            <p>The system will include user authentication, dashboards, and real-time data sync.</p>
            
            <h2>Timeline</h2>
            <p>Phase 1: 2 weeks | Phase 2: 4 weeks | Final Delivery: 6 weeks.</p>
            
            <h2>Budget</h2>
            <p>Total estimated cost: $12,000, payable in two milestones.</p>
        ` 
    },
    { 
        id: "business-letter", 
        label: "Business Letter", 
        imageUrl: "/business-letter.svg", 
        initialContent: `
            <h1>Business Letter</h1>
            <p>ABC Corporation<br>123 Main Street<br>March 12, 2025</p>
            
            <h2>To</h2>
            <p>XYZ Enterprises<br>45 Market Road</p>
            
            <h2>Subject</h2>
            <p>Partnership Proposal</p>
            <p>We are writing to propose a strategic collaboration that benefits both companies.</p>
            <p>Sincerely,<br>John Doe<br>Director, ABC Corporation</p>
        `
    },
    { 
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg", 
        initialContent: `
            <h1>John Doe</h1>
            <h2>Contact</h2>
            <p>john.doe@email.com | +1 234 567 890 | New York, USA</p>
            
            <h2>Professional Summary</h2>
            <p>Experienced software engineer with strong background in web and mobile development.</p>
            
            <h2>Experience</h2>
            <p>Senior Developer – TechLabs (2020–Present)</p>
            <p>Built scalable APIs and modern front-end interfaces.</p>
            
            <h2>Education</h2>
            <p>BSc Computer Science – NYU (2018)</p>
            
            <h2>Skills</h2>
            <p>React, Node.js, TypeScript, SQL</p>
        `
    },
    { 
        id: "cover-letter", 
        label: "Cover Letter", 
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <h1>Cover Letter</h1>
            <p>March 12, 2025</p>
            <p>Dear Hiring Manager,</p>
            <p>I am excited to apply for the Front-End Developer position at InnovateTech.</p>
            <p>With 4 years of experience building responsive and high-performance apps, I believe I can contribute effectively to your team.</p>
            <p>Thank you for considering my application.</p>
            <p>Sincerely,<br>John Doe</p>
        `
    },
    { 
        id: "letter", 
        label: "Letter", 
        imageUrl: "/letter.svg",
        initialContent: `
            <h1>Letter</h1>
            <p>New York, March 12, 2025</p>
            <p>Dear Sarah,</p>
            <p>I hope you are doing well. It’s been a while since we last met, and I wanted to share some updates about our recent project.</p>
            <p>Looking forward to catching up soon.</p>
            <p>Warm regards,<br>John</p>
        ` 
    },
];