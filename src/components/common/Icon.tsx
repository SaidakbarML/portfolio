import type { ComponentType, SVGProps } from "react";
import {
  Activity,
  BarChart3,
  Blocks,
  BookOpen,
  Boxes,
  Brain,
  Braces,
  Cloud,
  Code,
  Cpu,
  Database,
  DatabaseZap,
  GitBranch,
  GraduationCap,
  Landmark,
  Layers,
  LineChart,
  Mail,
  Network,
  Rocket,
  ScanEye,
  Server,
  Settings2,
  Sigma,
  Sparkles,
  Terminal,
  TrendingUp,
  Trophy,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import { FaAws, FaLinkedin } from "react-icons/fa6";
import {
  SiApacheairflow,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGooglebigquery,
  SiGooglecloud,
  SiHetzner,
  SiKeras,
  SiLeetcode,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiR,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** Icons referenced by string key from the data layer. */
export const UI_ICONS: Record<string, IconComponent> = {
  activity: Activity,
  "bar-chart-3": BarChart3,
  blocks: Blocks,
  "book-open": BookOpen,
  boxes: Boxes,
  braces: Braces,
  brain: Brain,
  cloud: Cloud,
  code: Code,
  cpu: Cpu,
  database: Database,
  "database-zap": DatabaseZap,
  "git-branch": GitBranch,
  "graduation-cap": GraduationCap,
  landmark: Landmark,
  layers: Layers,
  "line-chart": LineChart,
  mail: Mail,
  network: Network,
  rocket: Rocket,
  "scan-eye": ScanEye,
  server: Server,
  "settings-2": Settings2,
  sigma: Sigma,
  sparkles: Sparkles,
  terminal: Terminal,
  "trending-up": TrendingUp,
  trophy: Trophy,
  users: Users,
  workflow: Workflow,
  wrench: Wrench,
  github: SiGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  datalemur: Sigma,
};

/** Brand marks for technology badges, keyed by the exact stack string. */
export const TECH_ICONS: Record<string, IconComponent> = {
  Python: SiPython,
  R: SiR,
  Bash: SiGnubash,
  SQL: Database,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  "Scikit-learn": SiScikitlearn,
  OpenCV: SiOpencv,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  FastAPI: SiFastapi,
  Airflow: SiApacheairflow,
  "Apache Airflow": SiApacheairflow,
  BigQuery: SiGooglebigquery,
  "BigQuery ML": SiGooglebigquery,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Docker: SiDocker,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Hetzner: SiHetzner,
  Nginx: SiNginx,
  Git: SiGit,
  Linux: SiLinux,
  Plotly: SiPlotly,
  Dash: SiPlotly,
  "Power BI": BarChart3,
  "Next.js": SiNextdotjs,
  "Vector DB": Boxes,
  "Vector Databases": Boxes,
  "Face Recognition": ScanEye,
  "ETL / ELT": Workflow,
  "ETL/ELT": Workflow,
  "Data Modeling": Blocks,
  "Data Warehousing": Database,
  "Web Scraping": Network,
  LLMs: Sparkles,
  NLP: Sparkles,
  TTS: Activity,
  STT: Activity,
  "REST APIs": Server,
  "REST API Design": Server,
  "MS Excel": BarChart3,
  "Machine Learning": Brain,
  "AI Tooling": Sparkles,
  Mentoring: Users,
};

export function getTechIcon(name: string): IconComponent {
  return TECH_ICONS[name] ?? Code;
}

export function getUiIcon(name: string): IconComponent {
  return UI_ICONS[name] ?? Sparkles;
}

/** Renders a registry icon by key — keeps the lookup out of the render body. */
export function UiIcon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const Component = UI_ICONS[name] ?? Sparkles;
  return <Component {...props} />;
}

export function TechIcon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const Component = TECH_ICONS[name] ?? Code;
  return <Component {...props} />;
}
