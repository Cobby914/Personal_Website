export const PLANNING_PROJECTS = [
  {
    id: "planning-1",
    title: "AI Study Assistant",
    summary: "Early design phase for a tool that helps students plan and review topics.",
    tech: ["Next.js", "Python", "OpenAI API"],
  },
  {
    id: "planning-2",
    title: "Scuba Logbook App",
    summary: "Concepting a dive tracking app with location, conditions, and photo notes.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
];

export const IN_PROGRESS_PROJECTS = [
  {
    id: "progress-0",
    title: "Personal Website (Dec 2025 - Present)",
    summary:
      "Building my personal website with Next.js, React, and Tailwind CSS.",
    story:
      "This started as a simple portfolio and gradually turned into a playground for interaction design. I wanted each section to feel personal, so I spent time iterating on transitions, layout rhythm, and storytelling rather than simply listing my work. Instead of treating the site as a static collection of projects, I approached it as an experience where movement and structure guide the viewer through my journey. Along the way, I experimented with different animations, interaction patterns, and visual pacing to create something that feels both intuitive and engaging. The process taught me how subtle design decisions, like timing, spacing, and responsiveness, can dramatically change how a user perceives and navigates a website.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    details: [
      "Developing page-level sections for About, Projects, and Hobbies with shared design patterns.",
      "Improving UX through reveal animations, clearer content hierarchy, and responsive layouts.",
      "Continuously updating project content, routing, and metadata as new work is completed.",
    ],
    resources: [
      { label: "Live Site", href: "/", type: "Demo" },
      {
        label: "GitHub Repository",
        href: "https://github.com/Cobby914/Personal_Website",
        type: "Repository",
      },
    ],
  },
  {
    id: "progress-1",
    title: "Canvas -> Notion Sync (Feb 2026 - Present)",
    summary:
      "Building an automation tool that syncs Canvas assignments into Notion with deduping, task generation, and scheduled GitHub Actions runs.",
    story:
      "Realizing I was missing a tool to help me track everything I needed to accomplish throughout the week, I started organizing my tasks in Notion. While moving my personal to-do list was simple, I quickly realized that manually transferring assignments and exams from Canvas into Notion was tedious and time consuming. To streamline this process, I decided to build a Python script that automatically syncs my Canvas assignments with my Notion workspace. The script pulls assignment data from the Canvas API and creates structured entries in my Notion database, allowing me to manage my academic tasks alongside my other responsibilities in a single place. What began as a small convenience project ultimately became a practical automation tool that saves time and keeps my workflow organized.",
    tech: ["Python", "Canvas API", "Notion API", "GitHub Actions"],
    details: [
      "Fetches upcoming Canvas assignments and syncs them to Notion while preventing duplicate entries.",
      "Generates task tracker items with automatic priority and effort scoring based on due dates and points.",
      "Runs automatically through GitHub Actions with secure environment-based credentials.",
    ],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Cobby914/CanvasNotionSync",
        type: "Repository",
      },
      {
        label: "Project README",
        href: "https://github.com/Cobby914/CanvasNotionSync#readme",
        type: "Document",
      },
    ],
  },
];

export const FINISHED_PROJECTS = [
  {
    id: "finished-1",
    title: "Tumor Classification from Scans (Oct 2025 - Dec 2025)",
    summary:
      "Built and tuned a residual neural network pipeline with strong performance and Grad-CAM based model interpretation.",
    story:
      "Wanting to build a project centered around a real-world medical challenge, Margret, Leo, and I began developing a tumor classification network. Using Kaggle’s tumor imaging dataset, we trained several machine learning models to identify and classify tumors based on their features. Rather than committing to a single approach, we experimented with multiple architectures and compared their performance to determine which model best interpreted the tumor data. Through this process, we explored model training, evaluation metrics, and the challenges of working with medical datasets. The project gave us hands-on experience with building and refining machine learning models while tackling a problem with meaningful real-world implications.",
    details: [
      "Trained a residual neural network pipeline to classify tumors from medical scans.",
      "Trained a convolutional neural network pipeline to classify tumors from medical scans.",
      "Used Grad-CAM to interpret the model's predictions and improve the model's performance.",
    ],
    tech: ["Python", "PyTorch", "Scikit-learn", "Pandas", "Matplotlib", "Grad-CAM"],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/margoglvz/cs184a-tumors-classification/tree/main",
        type: "Repository",
      },
      {
        label: "Final Report (PDF)",
        href: "/resources/Tumor_Classification_Report.pdf",
        type: "Report",
      },
    ],
  },
  {
    id: "finished-2",
    title: "Genome Sequencing Pipeline (Oct 2025 - Dec 2025)",
    summary:
      "Built a missense-variant pathogenicity classifier by curating Humsavar + dbNSFP 5.3a data and benchmarking multiple ML models.",
    story:
      "To tackle a real-world genomics problem, Keyon, Lex, and I built a classifier to predict whether missense variants are benign or pathogenic. I led dataset curation by parsing Humsavar labels, standardizing classes, excluding uncertain-significance rows, and streaming dbNSFP 5.3a joins by rsID to keep processing memory-safe at chromosome scale. Our final curated dataset contained 10,941 high-quality variants with clinically relevant predictors (SIFT, PolyPhen-2 HDIV, CADD, and REVEL). We benchmarked Naive Bayes, Decision Tree, Random Forest, and XGBoost, and selected XGBoost as the strongest model with ~94% accuracy and strong pathogenic-class recall after class weighting.",
    details: [
      "Curated 10,941 high-quality variants by standardizing Humsavar labels and merging dbNSFP 5.3a annotations with rsID-based streaming joins.",
      "Selected mechanistically meaningful features (SIFT, PolyPhen-2 HDIV, CADD, REVEL) and enforced strict quality checks to remove incomplete genomic records.",
      "Benchmarked Naive Bayes, Decision Trees, Random Forests, and XGBoost; final weighted XGBoost reached about 94.29% accuracy with improved pathogenic recall.",
    ],
    tech: ["Python", "DuckDB", "Pandas", "Seaborn", "PyTorch"],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Kyan42/cs178-project",
        type: "Repository",
      },
      {
        label: "Final Report (PDF)",
        href: "/resources/Genome_Project_Report.pdf",
        type: "Report",
      },
    ],
  },
  {
    id: "finished-3",
    title: "Reel In Platform (Oct 2024 - May 2025)",
    summary:
      "Built a student project discovery platform with reusable UI modules and API routes used by 50+ students.",
    story:
      "Inspired by my team’s own struggle to find projects to join, we decided to build a platform where students could easily discover and participate in ongoing projects. As one of the newer developers on the team, I worked under the guidance of our lead developer, Ethan, learning the project’s architecture and contributing to features across the platform. Through this experience, I gained valuable insight into collaborative development and the process of building a product designed to connect students with opportunities to learn and create.",
    details: [
      "Built a student project discovery platform with reusable UI modules and API routes used by 50+ students.",
      "Implemented a system where project owners could manage their projects and applications.",
    ],
    tech: ["JavaScript", "TypeScript", "React", "CSS", "PostgreSQL"],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/ethanscm/APIHikingSociety",
        type: "Repository",
      },
    ],
  },
  {
    id: "finished-4",
    title: "Smart Stick (Oct 2025 - Dec 2025)",
    summary:
      "Built an assistive smart cane prototype focused on object and elevation detection with cloud-connected capabilities.",
    story:
      "Smart Stick began as an exploration into how embedded systems could be used to improve accessibility. Keyon and I’s goal was to design a smart cane capable of detecting obstacles and elevation changes to assist visually impaired users in navigating their environment more safely. Through this project, we experimented with sensor integration, real-time feedback systems, and cloud connectivity using the ESP32. Building the prototype required us to think carefully about reliability, responsiveness, and how technology can provide intuitive guidance in real-world scenarios.",
    tech: ["C", "PlatformIO", "Arduino", "ESP32", "AWS"],
    details: [
      "Implemented sensor-driven obstacle and elevation detection for safer navigation.",
      "Designed feedback mechanisms for accessibility-focused guidance and alerts.",
      "Integrated wireless data handling through ESP32 for cloud-connected functionality.",
    ],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Cobby914/Smart-Stick",
        type: "Repository",
      },
      {
        label: "IoT Project Proposal (PDF)",
        href: "/resources/Smart_Stick_IoT_Proposal.pdf",
        type: "Report",
      },
      {
        label: "Demo Video",
        href: "/resources/Smart_Stick_Demo.mp4",
        type: "Video",
      },
    ],
  },
];
