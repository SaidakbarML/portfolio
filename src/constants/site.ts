/**
 * Central site configuration.
 * Update `url` to your production domain before deploying — it drives the
 * canonical URL, sitemap, robots.txt and every Open Graph / Twitter tag.
 */
export const SITE = {
  name: "Saidakbar Usmonov",
  shortName: "Saidakbar",
  role: "Machine Learning Engineer",
  url: "https://saidakbar.dev",
  locale: "en_US",
  title: "Saidakbar Usmonov — Machine Learning & Data Engineer",
  description:
    "Machine Learning Engineer with 3+ years of production experience. I lead ASINT, an asset-valuation platform deployed at OFB Bank and OTP Bank, and build the data pipelines, models and cloud infrastructure behind it.",
  keywords: [
    "Machine Learning Engineer",
    "Data Engineer",
    "MLOps Engineer",
    "Production ML",
    "Saidakbar Usmonov",
    "Airflow",
    "BigQuery",
    "FastAPI",
    "Computer Vision",
    "Data Warehouse",
    "Uzbekistan",
  ],
  twitterHandle: "@saidakbarml",
  // Your CV lives in /public. Export a PDF over it and change this to .pdf —
  // recruiters open PDFs in-browser, .docx downloads a file.
  resumePath: "/Usmonov_Saidakbar_CV.docx",
} as const;

export const CONTACT = {
  email: "saidakbar1523r@gmail.com",
  phone: "+998 90 813 12 11",
  phoneHref: "tel:+998908131211",
  location: "Tashkent, Uzbekistan",
  timezone: "GMT+5",
  availability: "Open to ML / Data Engineering roles",
} as const;

export const LINKS = {
  github: "https://github.com/SaidakbarML",
  linkedin: "https://www.linkedin.com/in/saidakbar-usmonov",
  leetcode: "https://leetcode.com/u/saidakbarml/",
  datalemur: "https://datalemur.com/profile/Saidakbar",
  asint: "https://asint.uz",
  itv: "https://itv.uz",
  university: "https://tsue.uz/en",
} as const;
