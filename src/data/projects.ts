import { LINKS } from "@/constants/site";
import type { Project } from "@/types";

/**
 * Case-study copy expands on the CV with the engineering detail a reader
 * expects. Review each narrative section before publishing.
 */
export const PROJECTS: Project[] = [
  {
    id: "asint",
    slug: "asint",
    name: "ASINT",
    tagline: "Asset valuation for Uzbekistan's vehicle and property markets",
    category: "Production ML Platform",
    year: "2024 — Present",
    status: "Production",
    featured: true,
    accent: "blue",
    cover: "/images/projects/asint-cover.svg",
    screenshots: [
      "/images/projects/asint-shot-1.svg",
      "/images/projects/asint-shot-2.svg",
      "/images/projects/asint-shot-3.svg",
    ],
    architectureDiagram: "/images/diagrams/asint-architecture.svg",
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
    metrics: [
      { label: "Vehicle listings", value: 3, suffix: "M+" },
      { label: "Property records", value: 2.3, suffix: "M+", decimals: 1 },
      { label: "Records in dashboards", value: 1, suffix: "M+" },
      { label: "Orgs in production", value: 3 },
    ],
    stack: [
      "Python",
      "BigQuery",
      "BigQuery ML",
      "Airflow",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "AWS",
      "Nginx",
      "Power BI",
      "Scikit-learn",
    ],
    links: [{ type: "live", href: LINKS.asint, label: "Visit ASINT" }],
  },
  {
    id: "asint-dwh",
    slug: "asint-data-warehouse",
    name: "ASINT Data Warehouse",
    tagline: "The modelled layer every ASINT model and dashboard reads from",
    category: "Data Engineering",
    year: "2024 — Present",
    status: "Production",
    accent: "cyan",
    cover: "/images/projects/dwh-cover.svg",
    screenshots: ["/images/projects/dwh-shot-1.svg", "/images/projects/dwh-shot-2.svg"],
    architectureDiagram: "/images/diagrams/dwh-architecture.svg",
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
    metrics: [
      { label: "Records consolidated", value: 5.3, suffix: "M+", decimals: 1 },
      { label: "Downstream consumers", value: 4, suffix: "+" },
      { label: "Manual refresh steps", value: 0 },
    ],
    stack: ["Airflow", "BigQuery", "BigQuery ML", "Python", "SQL", "ETL/ELT", "Data Modeling"],
    links: [],
  },
  {
    id: "efahub",
    slug: "efahub",
    name: "EfaHub",
    tagline: "Marketplace for eFootball accounts — 1,000+ users in one month",
    category: "Solo Product",
    year: "2024",
    status: "Open source",
    accent: "purple",
    cover: "/images/projects/efahub-cover.svg",
    screenshots: ["/images/projects/efahub-shot-1.svg", "/images/projects/efahub-shot-2.svg"],
    architectureDiagram: "/images/diagrams/efahub-architecture.svg",
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
    deployment: "VPS infrastructure with Nginx, scheduled scraping jobs, vision model served alongside the app.",
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
    metrics: [
      { label: "Users in month one", value: 1000, suffix: "+" },
      { label: "Built by", value: 1, suffix: " engineer" },
    ],
    stack: [
      "Python",
      "Web Scraping",
      "Vector Databases",
      "Face Recognition",
      "OpenCV",
      "FastAPI",
      "PostgreSQL",
      "Nginx",
    ],
    links: [{ type: "github", href: LINKS.github, label: "Source" }],
  },
  {
    id: "ai-call-operator",
    slug: "ai-call-operator",
    name: "AI Call Operator",
    tagline: "NLP, TTS and STT models deployed to AWS on a live telecom platform",
    category: "Deployment · MLOps",
    year: "2024",
    status: "Deployed",
    accent: "cyan",
    cover: "/images/projects/call-operator-cover.svg",
    screenshots: ["/images/projects/call-operator-shot-1.svg"],
    architectureDiagram: "/images/diagrams/call-operator-architecture.svg",
    summary:
      "Took a colleague's research models and put them into real-world use — deployed to AWS and integrated with the ITV platform.",
    problem:
      "Working NLP, TTS and STT models are not a working call operator. The gap is deployment: latency budgets, service orchestration, telephony integration, and staying up.",
    solution:
      "I provisioned the infrastructure, containerised the model services, wired the speech-to-text → intent → text-to-speech path into ITV's call flow, and got it stable for real callers. Models by my colleague Ibrat Usmanov.",
    architecture:
      "Inbound call → STT → intent handling → response → TTS → outbound audio. Each model is its own container, so the slowest stage scales independently.",
    impact: "Moved a research-stage system into live operation, handling real customer calls.",
    scalability:
      "Per-stage isolation means the pipeline scales at its bottleneck instead of duplicating the whole stack. Model services are stateless, so capacity is horizontal.",
    deployment: "AWS with containerised model services, integrated into ITV's existing call handling.",
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
    metrics: [
      { label: "Model stages orchestrated", value: 3 },
      { label: "Live platform integrations", value: 1 },
    ],
    stack: ["AWS", "Docker", "Python", "NLP", "TTS", "STT", "REST APIs", "Linux"],
    links: [{ type: "live", href: LINKS.itv, label: "ITV Platform" }],
  },
  {
    id: "face-attendance",
    slug: "face-attendance-system",
    name: "Face Attendance",
    tagline: "Computer-vision attendance tracking — 2nd place, hackathon",
    category: "Computer Vision",
    year: "2023",
    status: "Archived",
    accent: "purple",
    cover: "/images/projects/attendance-cover.svg",
    screenshots: ["/images/projects/attendance-shot-1.svg"],
    architectureDiagram: "/images/diagrams/attendance-architecture.svg",
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
    deployment: "Local deployment against a camera feed, built and demoed inside the hackathon window.",
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
    metrics: [
      { label: "Hackathon placement", value: 2, prefix: "#" },
      { label: "Recognition stages", value: 4 },
    ],
    stack: ["TensorFlow", "OpenCV", "Face Recognition", "Python", "NumPy"],
    links: [{ type: "github", href: LINKS.github, label: "Source" }],
  },
];

export const FEATURED_PROJECT = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
export const OTHER_PROJECTS = PROJECTS.filter((p) => !p.featured);
