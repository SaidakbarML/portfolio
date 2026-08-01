/**
 * Source dictionary. Its shape defines the `Dictionary` type, so `uz.ts` and
 * `ru.ts` are type-checked against it — a missing or renamed key is a build
 * error, not a silently untranslated string.
 */
export const en = {
  meta: {
    title: "Saidakbar Usmonov — Machine Learning & Data Engineer",
    description:
      "Machine Learning Engineer with 3+ years of production experience. I lead ASINT, an asset-valuation platform deployed at OFB Bank and OTP Bank, and build the data pipelines, models and cloud infrastructure behind it.",
  },

  a11y: {
    skipToContent: "Skip to content",
    pipelineStages: "Pipeline stages",
    backToTop: "Back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    openPalette: "Open command palette",
    closeDialog: "Close dialog",
    changeLanguage: "Change language",
    home: "home",
    proficiency: "proficiency",
  },

  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    certificates: "Certificates",
    contact: "Contact",
  },

  tasks: {
    home: "ingest",
    about: "profile",
    experience: "transform",
    projects: "build",
    skills: "stack",
    education: "train",
    certificates: "validate",
    contact: "deploy",
  },

  topbar: {
    openToWork: "open to work",
    hireMe: "Hire me",
  },

  preloader: {
    lines: ["connecting to pipeline…", "loading stages 00–07", "ready"],
  },

  hero: {
    headline: "Machine Learning Engineer · Data Engineer",
    stage: "stage 00 / ingest",
    location: "Tashkent, Uzbekistan",
    availability: "Open to ML / Data Engineering roles",
    roleLabel: "role =",
    roles: [
      "Machine Learning Engineer",
      "Data Engineer",
      "MLOps Engineer",
      "AI Systems Builder",
      "Production AI Specialist",
    ],
    intro:
      "3 years shipping models, pipelines and cloud infra. I lead ASINT — an asset-valuation platform live at OFB Bank and OTP Bank.",
    downloadCv: "Download CV",
    seeWork: "See the work",
    scroll: "scroll",
    photoLabel: "Profile photo",
    stats: {
      years: "yrs in production",
      records: "records modelled",
      orgs: "orgs running it",
      banks: "banks live",
    },
  },

  about: {
    query: "SELECT * FROM engineer WHERE ships = true",
    meta: "1 row · 12ms",
    title: "I build ML that",
    accent: "survives production.",
    paragraphs: [
      "I work where ML meets the systems that keep it alive. The problem usually arrives without a clean dataset: what is this car worth, what is this flat worth, which of these 5 million scraped records can you trust.",
      "I own it end to end — model the data, train the model, wrap it in an API, ship it to a server that has to answer correctly on Monday morning.",
      "At Link Data I lead ASINT. 3M+ vehicle listings and 2.3M+ property records, consolidated into one BigQuery layer, refreshed and retrained by Airflow. Three organisations run it. Two are banks.",
      "On the side: EfaHub hit 1,000+ users in a month, I've trained 20+ staff in ML and Git, and placed 2nd in a CV hackathon.",
    ],
    recordLabel: "record",
    facts: {
      basedIn: { label: "Based in", value: "Tashkent, Uzbekistan" },
      focus: { label: "Focus", value: "Production ML · Data Engineering" },
      currently: { label: "Currently", value: "Project Lead, ASINT @ Link Data" },
      experience: { label: "Experience", value: "3+ years in production" },
      studying: { label: "Studying", value: "BSc, Tashkent State Univ. of Economics" },
      status: { label: "Status", value: "Open to ML / Data Engineering roles" },
    },
    principlesLabel: "operating principles",
    principles: {
      ship: {
        title: "Ship it, then measure it",
        body: "A model that isn't serving traffic hasn't been evaluated.",
      },
      data: {
        title: "The data layer is the product",
        body: "Most model problems are data problems in disguise. Fix the warehouse first.",
      },
      automate: {
        title: "Automate the boring path",
        body: "Extract, load, retrain, deploy — on a schedule, without me.",
      },
      stack: {
        title: "Own the whole stack",
        body: "Model, API, container, server. Debugging is fast when you can follow the whole path.",
      },
    },
  },

  stats: {
    title: "By the numbers",
    metricsCount: "metrics",
    items: {
      years: { label: "Years in production", description: "ML · data engineering · MLOps" },
      vehicles: { label: "Vehicle records", description: "many sources, one layer" },
      properties: { label: "Property records", description: "powers ASINT-Home" },
      dashboards: { label: "Records in dashboards", description: "Power BI monitoring layer" },
      users: { label: "EfaHub users, month one", description: "solo build, organic growth" },
      staff: { label: "Staff trained", description: "support instructor, ISLAB" },
      orgs: { label: "Orgs running ASINT", description: "incl. OFB Bank, OTP Bank" },
      hackathon: { label: "Hackathon placement", description: "computer-vision hackathon" },
    },
  },

  experience: {
    query: "SELECT role, impact FROM experience ORDER BY start DESC",
    meta: "rows · 8ms",
    title: "Intern to",
    accent: "project lead.",
    lede: "Eighteen months from first day to owning the company's flagship platform.",
    progressionLabel: "Progression",
    impactLabel: "impact",
    stackLabel: "stack",
    roles: {
      "link-data": {
        role: "Data Scientist / ML Engineer",
        employmentType: "Project Lead — ASINT",
        period: "Jul 2024 — Present",
        location: "Tashkent, Uzbekistan",
        summary:
          "Joined as an intern, now technical lead on the company's flagship product. I own ASINT end to end — the warehouse, the models, and the infra serving three client organisations.",
        progression: {
          intern: "Intern",
          partTime: "Part-time",
          fullTime: "Full-time",
          lead: "Project Lead",
        },
        achievements: [
          "Lead ASINT, live at three organisations including OFB Bank and OTP Bank.",
          "Designed the data warehouse behind ASINT and GeoScore — many sources, one modelled layer.",
          "Built Airflow pipelines that load into BigQuery and retrain models on the same schedule.",
          "Ship FastAPI model-serving APIs on AWS, Hetzner and eCompute, behind Docker and Nginx.",
          "Improved the production ASINT-Auto and ASINT-Home valuation models.",
          "Work across ML, data engineering and MLOps in a 10-person team.",
        ],
        metrics: {
          orgs: "Orgs in production",
          vehicles: "Vehicle records",
          properties: "Property records",
          team: "Team size",
        },
      },
      islab: {
        role: "Support Instructor",
        employmentType: "Part-time · 1 year",
        period: "Aug 2026 — Aug 2027",
        location: "Tashkent, Uzbekistan",
        summary:
          "Taught applied AI to non-specialists — the fastest way to find out whether you actually understand something.",
        progression: {},
        achievements: [
          "Trained 20+ staff in AI tooling, ML fundamentals and Git.",
          "Go-to instructor across every topic in the programme.",
          "Translated production ML concepts into work non-engineers could apply.",
        ],
        metrics: {
          staff: "Staff trained",
        },
      },
    },
  },

  projects: {
    query: "SELECT * FROM projects WHERE users > 0",
    meta: "rows · 14ms",
    title: "Systems in production,",
    accent: "not notebooks.",
    lede: "Banks, marketplaces and call centres. Open a case study for the architecture and what I'd change.",
    moreWork: "more work",
    deckTitle: "The deck scrolls",
    deckAccent: "sideways",
    projectsCount: "projects",
    swipeHint: "swipe → more work",
    caseStudy: "Case study",
    readCaseStudy: "Read the case study",
    live: "Live",
    demo: "Demo",
    github: "GitHub",
    flagship: "flagship",
    systemBreakdown: "system breakdown",
    breakdownTitle: "A fragmented market, turned into one",
    breakdownAccent: "priced API",
    challengesLabel: "engineering challenges",
    architectureDiagram: "Architecture diagram",
    screenshot: "Screenshot",
    statuses: {
      Production: "Production",
      "Open source": "Open source",
      Archived: "Archived",
      Deployed: "Deployed",
    },
    stages: {
      problem: "Problem",
      solution: "Solution",
      architecture: "System design",
      deployment: "Deployment",
      impact: "Impact",
    },
    blocks: {
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture",
      stack: "Technology stack",
      challenges: "Challenges & solutions",
      deployment: "Production deployment",
      scalability: "Scalability",
      impact: "Impact",
      screenshots: "Screenshots",
      lessons: "Lessons learned",
      future: "Future improvements",
    },
    items: {
      asint: {
        name: "ASINT",
        tagline: "Asset valuation for Uzbekistan's vehicle and property markets",
        category: "Production ML Platform",
        summary:
          "Link Data's flagship product. Prices cars and property from 5.3M+ market records. Live at three organisations, including OFB Bank and OTP Bank, where valuations feed lending decisions.",
        problem:
          "Valuation was manual and inconsistent. Prices lived across dozens of listing sites with no shared identifier. Two appraisers could reach very different numbers, and banks had no defensible basis for collateral values.",
        solution:
          "Scrapers pull listings from many sources. Airflow cleans, deduplicates and conforms them into a BigQuery layer. Two model families — ASINT-Auto and ASINT-Home — train on it and serve through FastAPI. Power BI dashboards make the output legible.",
        architecture:
          "Ingestion → staging → modelled warehouse → training → serving. Raw payloads land untouched so parsing bugs stay replayable. Airflow handles scheduling and retries. BigQuery ML trains in place, so data never leaves the warehouse. Stateless FastAPI containers serve behind Nginx.",
        impact:
          "Three organisations in production, two of them banks. Valuations that took hours now return by API in real time, from a consistent, auditable basis.",
        scalability:
          "BigQuery absorbs record growth without re-architecture, and training runs where the data already lives. A new source is a new extractor, not a model change. Serving scales horizontally — all state is in the warehouse.",
        deployment:
          "Containerised services on AWS, Hetzner and eCompute behind Nginx. Scheduled Airflow DAGs with retries and alerting; retraining runs on the same cadence as the data refresh.",
        challenges: [
          {
            heading: "Multi-source entity resolution",
            body: "The same car appears on five sites with five spellings. Without resolution the model counts duplicates as independent evidence. Conformed dimensions were the highest-leverage work on the project.",
          },
          {
            heading: "Fragile upstream sources",
            body: "Scrapers break when a source changes its markup. A DAG that succeeds with zero rows quietly starves a model, so extraction validates row counts before anything moves downstream.",
          },
          {
            heading: "Listing price ≠ market price",
            body: "Listings are asking prices, skewed by region, season and time unsold. Handling that gap honestly mattered more to accuracy than model selection did.",
          },
          {
            heading: "Bank-grade expectations",
            body: "Once a bank depends on a number, changing it is a governance question. That pushed the design toward versioned, scheduled retraining over ad-hoc improvements.",
          },
        ],
        lessons: [
          "The warehouse schema sets your accuracy ceiling before the model does.",
          "Every pipeline needs a failure louder than 'succeeded with zero rows'.",
          "Training inside the warehouse kills a whole class of data-movement bugs.",
          "With bank clients, reproducibility beats a marginal accuracy gain.",
        ],
        future: [
          "Drift detection on input distributions and prediction residuals.",
          "A feature store so both model families stop re-deriving geography features.",
          "Per-prediction confidence intervals exposed through the API.",
          "Shadow deployment before new versions take production traffic.",
        ],
        metrics: {
          vehicles: "Vehicle listings",
          properties: "Property records",
          dashboards: "Records in dashboards",
          orgs: "Orgs in production",
        },
        links: { live: "Visit ASINT" },
      },
      "asint-dwh": {
        name: "ASINT Data Warehouse",
        tagline: "The modelled layer every ASINT model and dashboard reads from",
        category: "Data Engineering",
        summary:
          "The warehouse behind ASINT and GeoScore. Many disconnected sources, one modelled layer in BigQuery, with Airflow orchestrating load and in-warehouse retraining.",
        problem:
          "Every model and dashboard sourced its own data. The same question gave two answers, adding a source meant touching every consumer, and nobody could say where a number came from.",
        solution:
          "One modelled layer, one set of conformed dimensions, one place to fix a definition. Raw extracts land immutably; transformations are versioned and idempotent. Retraining is scheduled in the same DAG graph, so data and model freshness never drift apart.",
        architecture:
          "Airflow DAGs run extraction into a landing zone, conform and deduplicate into staging, then build the dimensional layer in BigQuery. A final task group triggers BigQuery ML training. Dependencies are declared, so one failed extraction can't corrupt an unrelated model's inputs.",
        impact:
          "5.3M+ records in one trusted layer. Retraining became unattended, and adding a source became an isolated change.",
        scalability:
          "Incremental, partition-aware loads keep cost proportional to new data, not total data. Idempotent transforms make a backfill the same code path as a normal run — recovery is boring, which is the point.",
        deployment:
          "Airflow scheduler and workers on managed VPS infrastructure, BigQuery as both warehouse and training environment.",
        challenges: [
          {
            heading: "Idempotency under retries",
            body: "Any task that can retry will, usually mid-load. Every write is partition-scoped rather than a blind append, or duplicates accumulate until a metric moves.",
          },
          {
            heading: "Schema drift",
            body: "Sources add, rename and silently retype fields. Landing raw payloads means drift is detected and replayed, not discovered months later as a gap in a training set.",
          },
          {
            heading: "BigQuery cost control",
            body: "Answering everything is easy; answering cheaply needs partitioning, clustering, and discipline about what materialises versus stays a view.",
          },
        ],
        lessons: [
          "Immutable raw landing is the cheapest insurance in data engineering.",
          "Idempotent tasks turn incidents into a re-run instead of an investigation.",
          "Declare dependencies in the DAG, not in a wiki nobody reads.",
        ],
        future: [
          "Data-quality tests as first-class DAG tasks with hard gates.",
          "Column-level lineage from source field to model feature.",
          "A shared feature layer to remove duplicated derivations.",
        ],
        metrics: {
          records: "Records consolidated",
          consumers: "Downstream consumers",
          manual: "Manual refresh steps",
        },
        links: {},
      },
      efahub: {
        name: "EfaHub",
        tagline: "Marketplace for eFootball accounts — 1,000+ users in one month",
        category: "Solo Product",
        summary:
          "Built solo, front to back. Scrapers pull live listings from Telegram and publish them to a searchable marketplace, with a vision model that identifies players by matching faces against a vector index.",
        problem:
          "Trading happened entirely in Telegram — an endless scroll of unstructured posts with no search and no way to compare. Squad quality was communicated in screenshots, so it wasn't data.",
        solution:
          "A marketplace that structures the chaos. Scrapers ingest, normalise and publish listings with search and filtering. A deep-learning component detects player faces in listing images and matches them against an indexed vector database — turning an image into a queryable squad.",
        architecture:
          "Scheduled scrapers → normalisation → application database → web frontend. The vision path runs separately: images are processed for faces, embedded, and matched by nearest-neighbour search against a pre-built player index.",
        impact:
          "1,000+ users in the first month on organic growth. Discontinued after monetisation conflicted with Konami's terms of use, then open-sourced with a demo video.",
        scalability:
          "Scraping and vision run async from serving, so ingestion spikes don't touch page performance. Matching stays fast as listings grow because the index is bounded by player count, not listing count.",
        deployment:
          "VPS infrastructure with Nginx, scheduled scraping jobs, vision model served alongside the app.",
        challenges: [
          {
            heading: "Unstructured source data",
            body: "Telegram posts follow no schema. Price, squad and contact details appear in any order, in multiple languages, often as images. Extracting structure was most of the engineering.",
          },
          {
            heading: "Faces on game renders",
            body: "In-game faces are stylised, low-resolution and cropped from screenshots of varying quality. Usable embeddings needed careful preprocessing and a confidence threshold rather than a forced match.",
          },
          {
            heading: "Knowing when to stop",
            body: "It worked and was growing, but monetising conflicted with Konami's terms. Shutting it down was the right call — I open-sourced the work instead.",
          },
        ],
        lessons: [
          "The hardest problem is usually data acquisition, not the model.",
          "Structuring information people already have beats inventing something new.",
          "Check the terms of use before you build the payment flow.",
        ],
        future: [
          "The scraping and matching components generalise to other listing marketplaces.",
          "A fine-tuned detector would raise match confidence.",
        ],
        metrics: {
          users: "Users in month one",
          builtBy: "Built by",
        },
        links: { github: "Source" },
      },
      "ai-call-operator": {
        name: "AI Call Operator",
        tagline: "NLP, TTS and STT models deployed to AWS on a live telecom platform",
        category: "Deployment · MLOps",
        summary:
          "Took a colleague's research models and put them into real-world use — deployed to AWS and integrated with the ITV platform.",
        problem:
          "Working NLP, TTS and STT models are not a working call operator. The gap is deployment: latency budgets, service orchestration, telephony integration, and staying up.",
        solution:
          "I provisioned the infrastructure, containerised the model services, wired the speech-to-text → intent → text-to-speech path into ITV's call flow, and got it stable for real callers. Models by my colleague Ibrat Usmanov.",
        architecture:
          "Inbound call → STT → intent handling → response → TTS → outbound audio. Each model is its own container, so the slowest stage scales independently.",
        impact:
          "Moved a research-stage system into live operation, handling real customer calls.",
        scalability:
          "Per-stage isolation means the pipeline scales at its bottleneck instead of duplicating the whole stack. Model services are stateless, so capacity is horizontal.",
        deployment:
          "AWS with containerised model services, integrated into ITV's existing call handling.",
        challenges: [
          {
            heading: "Latency is the product",
            body: "In a voice interface, a pause reads as a failure. The budget across three model stages is unforgiving, which makes serving architecture a design problem, not a deployment afterthought.",
          },
          {
            heading: "Integrating a system I didn't own",
            body: "ITV had its own call-handling contract. Deployment work is often integration work — matching an existing interface rather than designing an ideal one.",
          },
          {
            heading: "Handing off between engineers",
            body: "Taking someone else's models to production means understanding their assumptions about format, sample rate and preprocessing well enough to preserve them under load.",
          },
        ],
        lessons: [
          "Deployment is where a model's real constraints show up.",
          "Voice systems are latency systems that happen to contain ML.",
          "Clear interface contracts between model author and deployer save days.",
        ],
        future: [
          "Streaming inference to overlap transcription with response generation.",
          "Call-quality telemetry to catch degradation before users report it.",
        ],
        metrics: {
          stages: "Model stages orchestrated",
          integrations: "Live platform integrations",
        },
        links: { live: "ITV Platform" },
      },
      "face-attendance": {
        name: "Face Attendance",
        tagline: "Computer-vision attendance tracking — 2nd place, hackathon",
        category: "Computer Vision",
        summary:
          "Automated attendance built with deep learning and computer vision under hackathon time pressure. Placed 2nd.",
        problem:
          "Roll call is slow, easy to game, and produces a piece of paper instead of data. It scales linearly with headcount.",
        solution:
          "A camera-based system that detects faces, matches them against enrolled encodings and writes attendance automatically. No queue, no sign-in sheet, no proxy attendance.",
        architecture:
          "Frame capture → face detection with OpenCV → encoding → comparison against the enrolled set → record written on a confident match. Unmatched faces are logged, not dropped.",
        impact:
          "2nd place. More usefully, the project where lighting, angle and threshold trade-offs stopped being theoretical.",
        scalability:
          "Encoding comparison is the bottleneck as enrolment grows. The next step is indexed vector search — the approach I later used properly in EfaHub.",
        deployment:
          "Local deployment against a camera feed, built and demoed inside the hackathon window.",
        challenges: [
          {
            heading: "Real-world lighting",
            body: "Accuracy in a demo room is not accuracy in a corridor. Thresholds that looked perfect on enrolment photos failed the moment someone turned their head.",
          },
          {
            heading: "Threshold trade-offs",
            body: "A false positive marks the wrong person present; a false negative annoys the right one. That operating point is a product decision disguised as a hyperparameter.",
          },
          {
            heading: "Shipping in hackathon time",
            body: "Scope discipline. A working narrow system beats an ambitious broken one when the clock is the constraint.",
          },
        ],
        lessons: [
          "Vision models fail on conditions you didn't collect data in.",
          "Choosing a confidence threshold is choosing who gets inconvenienced.",
          "Linear similarity search is fine until it very suddenly isn't.",
        ],
        future: [
          "Vector-database indexing to replace linear comparison.",
          "Liveness detection to prevent photo spoofing.",
        ],
        metrics: {
          placement: "Hackathon placement",
          stages: "Recognition stages",
        },
        links: { github: "Source" },
      },
    },
  },

  skills: {
    query: "SELECT skill, level FROM stack GROUP BY domain",
    metaRows: "rows",
    metaGroups: "groups",
    title: "Weighted by what I've",
    accent: "actually run.",
    lede: "Depth reflects production use, not tutorials watched.",
    groups: {
      programming: {
        title: "Programming",
        blurb: "Daily drivers for modelling, pipelines and glue.",
        notes: {
          Python: "Primary language",
          SQL: "Analytics + warehouse modelling",
          Bash: "Server automation",
          R: "Statistical analysis",
        },
      },
      "machine-learning": {
        title: "Machine Learning",
        blurb: "Regression and valuation models running in production.",
        notes: { "BigQuery ML": "In-warehouse training" },
      },
      "deep-learning": {
        title: "Deep Learning",
        blurb: "Applied neural networks for vision and embeddings.",
        notes: { TensorFlow: "Working knowledge", PyTorch: "Working knowledge" },
      },
      "computer-vision": {
        title: "Computer Vision",
        blurb: "Face recognition and image pipelines shipped to users.",
        notes: {},
      },
      "data-engineering": {
        title: "Data Engineering",
        blurb: "Millions of records, many sources, one modelled layer.",
        notes: { "Apache Airflow": "Orchestration at scale" },
      },
      cloud: {
        title: "Cloud & Deployment",
        blurb: "From a trained artifact to a public endpoint.",
        notes: { "VPS Administration": "Hetzner · eCompute" },
      },
      databases: {
        title: "Databases",
        blurb: "Transactional stores and analytical warehouses.",
        notes: {},
      },
      mlops: {
        title: "MLOps & Backend",
        blurb: "Serving, containerising and scheduling models.",
        notes: { FastAPI: "Model serving APIs" },
      },
      visualization: {
        title: "Visualization",
        blurb: "Making model output legible to non-technical stakeholders.",
        notes: { "Power BI": "1M+ record dashboards" },
      },
      tools: {
        title: "Tools & Practices",
        blurb: "How the work actually gets delivered.",
        notes: { "Technical Mentoring": "20+ staff trained" },
      },
    },
    /** Skill names that are words rather than product names. */
    names: {
      "Feature Engineering": "Feature Engineering",
      "Model Evaluation": "Model Evaluation",
      "Embeddings & Vector Search": "Embeddings & Vector Search",
      "LLM Integration": "LLM Integration",
      "Face Recognition": "Face Recognition",
      "Image Preprocessing": "Image Preprocessing",
      "Vector Databases": "Vector Databases",
      "ETL / ELT": "ETL / ELT",
      "Data Warehousing": "Data Warehousing",
      "Data Modeling": "Data Modeling",
      "Web Scraping": "Web Scraping",
      "VPS Administration": "VPS Administration",
      "Query Optimisation": "Query Optimisation",
      "Scheduled Retraining": "Scheduled Retraining",
      "REST API Design": "REST API Design",
      "Code Review": "Code Review",
      "Technical Mentoring": "Technical Mentoring",
      "Agile Delivery": "Agile Delivery",
    } as Record<string, string>,
  },

  achievements: {
    query: "SELECT outcome FROM work WHERE shipped = true",
    meta: "rows · 6ms",
    title: "What the work",
    accent: "produced.",
    items: {
      "production-banks": {
        title: "Banks run my code",
        description:
          "ASINT runs at three organisations including OFB Bank and OTP Bank, where valuations feed real lending decisions.",
        metric: "Organisations in production",
      },
      "project-lead": {
        title: "Intern to project lead",
        description:
          "Intern in July 2024, now leading ASINT and owning a major part of the company's flagship platform.",
        metric: "Months to lead",
      },
      "data-scale": {
        title: "5.3M+ records, one layer",
        description:
          "Designed the warehouse consolidating 3M+ vehicle and 2.3M+ property records into one source of truth.",
        metric: "Records consolidated",
      },
      automation: {
        title: "Zero manual steps",
        description:
          "Airflow loads BigQuery and triggers retraining on the same schedule. Nobody touches it.",
        metric: "Manual refresh steps",
      },
      cloud: {
        title: "Multi-cloud deployments",
        description:
          "Model services and web platforms on AWS, Hetzner and eCompute — Docker behind Nginx.",
        metric: "Cloud & VPS providers",
      },
      dashboards: {
        title: "1M+ records visualised",
        description:
          "Power BI dashboards over 1M+ records, so model output is observable instead of opaque.",
        metric: "Records visualised",
      },
      efahub: {
        title: "1,000+ users in a single month",
        description:
          "Built solo. Replaced manual Telegram trading with searchable listings, then open-sourced it.",
        metric: "Users in month one",
      },
      hackathon: {
        title: "2nd place hackathon",
        description:
          "Attendance tracking with TensorFlow, OpenCV and face recognition, under a hard deadline.",
        metric: "Placement",
      },
      teaching: {
        title: "20+ people trained",
        description:
          "Taught AI tooling, ML fundamentals and Git as a support instructor at ISLAB.",
        metric: "People trained",
      },
    },
  },

  education: {
    query: "SELECT * FROM education",
    meta: "row · 4ms",
    title: "Studying and shipping,",
    accent: "in parallel.",
    languagesLabel: "languages",
    items: {
      tsue: {
        institution: "Tashkent State University of Economics",
        credential: "BSc",
        field: "Economics",
        period: "Sep 2023 — May 2027",
        detail: "GPA 4.3 / 5.0",
        highlights: [
          "Quantitative and statistical foundation applied directly to valuation modelling at work.",
          "Studying alongside full-time engineering — coursework and production running in parallel.",
          "Self-directed study through Mathematics for Machine Learning (Deisenroth, Faisal & Ong).",
        ],
      },
    },
    languages: {
      uzbek: { name: "Uzbek", level: "Native" },
      english: { name: "English", level: "Professional" },
      russian: { name: "Russian", level: "B1" },
    },
  },

  certificates: {
    query: "SELECT name, issuer FROM certificates",
    meta: "rows · 3ms",
    title: "Training, applied",
    accent: "immediately.",
    items: {
      "ibm-data-science": {
        name: "IBM Data Science Professional Certificate",
        skills: ["Python", "SQL", "Data Analysis", "Visualization"],
      },
      "math-for-ml": {
        name: "Mathematics for Machine Learning and Data Science",
        skills: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
      },
      datacamp: {
        name: "Power BI, SQL, Dash & Plotly Tracks",
        skills: ["Power BI", "SQL", "Dash", "Plotly"],
      },
    },
  },

  contact: {
    query: "INSERT INTO inbox (message) VALUES (…)",
    meta: "awaiting input",
    title: "Let's talk about what",
    accent: "you're building.",
    lede: "Open to ML / Data Engineering roles",
    directLabel: "direct",
    profilesLabel: "profiles",
    copyEmail: "Copy email address",
    phone: "Phone",
    location: "Location",
    locationValue: "Tashkent, Uzbekistan",
    timezone: "Timezone",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      optional: "(optional)",
      namePlaceholder: "Jane Doe",
      emailPlaceholder: "jane@company.com",
      subjectPlaceholder: "ML Engineer role at …",
      messagePlaceholder: "Tell me about the team and the problem.",
      send: "Send message",
      sent: "Mail client opened — hit send.",
      disclaimer: "Opens your email client with the message pre-filled. No server, no tracking.",
      defaultSubject: "Portfolio enquiry from",
      errors: {
        required: "Required.",
        invalidEmail: "Invalid email.",
      },
    },
  },

  footer: {
    blurb:
      "Machine Learning Engineer building production ML systems and the infrastructure under them.",
    builtWith: "built with",
    elsewhere: "elsewhere",
  },

  palette: {
    placeholder: "Search sections, projects and links…",
    noResults: "No results for",
    groups: {
      navigate: "Navigate",
      projects: "Projects",
      actions: "Actions",
      links: "Links",
      language: "Language",
    },
    downloadCv: "Download CV",
    email: "Email",
  },
};

// Intentionally not `as const`: the type must widen to `string` so the other
// dictionaries can supply different text for the same keys.
export type Dictionary = typeof en;
