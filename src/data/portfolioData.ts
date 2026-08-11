import { ProjectItem, SkillItem, ExperienceItem, TestimonialItem, GithubStatsType } from '../types';

export const PERSONAL_INFO = {
  name: 'Pavel Hossain',
  title: 'Full-Stack & Systems Developer',
  headline: 'Pavel Hossain | Full-Stack & Systems Developer',
  subHeadline: 'Building high-performance web applications, scalable backend systems, secure RESTful APIs, and robust automated server infrastructure with precision engineering.',
  aboutStatement: 'Full-stack software developer with a passionate focus on building secure, resilient, and user-centric software solutions. Specialized in architecting high-throughput backend services, optimized SQL database systems, clean modern web interfaces, and automated Linux server environments.',
  email: 'mehedihasanpavel90@gmail.com',
  githubUrl: 'https://github.com/pavel-hossain',
  location: 'Dhaka, Bangladesh',
  availability: 'Available for Remote Roles & High-Impact Contracts',
  yearsExperience: '4+',
  projectsCompleted: '25+',
  uptimeRecord: '99.98%',
};

export const CORE_SKILLS: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML5',
    category: 'Frontend',
    iconName: 'Code2',
    description: 'Semantic markup, accessible DOM structures, microdata schemas, and SEO-optimized web documents.',
    proficiency: 95,
    experienceYears: '4+ Years',
    codeSnippet: `<article class="developer-profile" itemscope itemtype="https://schema.org/Person">
  <header class="profile-header">
    <h1 itemprop="name">Pavel Hossain</h1>
    <p itemprop="jobTitle">Full-Stack & Systems Developer</p>
  </header>
  <main class="content-body" aria-live="polite">
    <!-- Clean Semantic & Accessible Structure -->
  </main>
</article>`,
    highlights: ['Semantic HTML5 Markup', 'WCAG 2.1 AA Accessibility Standards', 'SEO Optimization & Microdata Schema', 'Custom Web Components']
  },
  {
    id: 'css',
    name: 'CSS3 / Modern Styling',
    category: 'Frontend',
    iconName: 'Palette',
    description: 'Tailwind CSS, CSS Grid/Flexbox layouts, responsive design, fluid typography, and dark-mode aesthetics.',
    proficiency: 92,
    experienceYears: '4+ Years',
    codeSnippet: `.portfolio-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(56, 189, 248, 0.2);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover {
    border-color: rgba(6, 182, 212, 0.8);
    box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.25);
  }
}`,
    highlights: ['Tailwind CSS v4 & PostCSS', 'Fluid Grid & Flexbox Architectures', 'CSS Animations & Motion Design', 'Cross-Browser Compatibility']
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+) / TypeScript',
    category: 'Frontend',
    iconName: 'FileJson',
    description: 'Asynchronous event driven programming, modern React, state management, DOM performance tuning, and ES Next features.',
    proficiency: 94,
    experienceYears: '4+ Years',
    codeSnippet: `// Asynchronous API Pipeline with Resilience
export async function fetchMetrics<T>(endpoint: string, retries = 3): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(endpoint, { headers: { 'Accept': 'application/json' } });
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      return await response.json() as T;
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise(res => setTimeout(res, 500 * Math.pow(2, attempt)));
    }
  }
  throw new Error('Pipeline failed');
}`,
    highlights: ['Modern React & Hooks Architecture', 'Async/Await & Event Loop Optimization', 'TypeScript Strict Type Safety', 'State & Client-side Caching']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend',
    iconName: 'Terminal',
    description: 'FastAPI, Flask, automation scripting, async I/O, background workers, and data processing routines.',
    proficiency: 90,
    experienceYears: '3+ Years',
    codeSnippet: `from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel, Field

app = FastAPI(title="Nexus Core API", version="2.0.0")

class HealthCheck(BaseModel):
    status: str = Field(default="healthy")
    uptime_seconds: float
    active_connections: int

@app.get("/api/v1/health", response_model=HealthCheck)
async def check_health():
    return {"status": "healthy", "uptime_seconds": 86400.42, "active_connections": 142}`,
    highlights: ['FastAPI & Flask Web Frameworks', 'Automated CLI Tools & Data Extraction', 'Asyncio & Concurrent Executions', 'Data Processing & REST Integrations']
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Backend',
    iconName: 'Server',
    description: 'Object-oriented PHP, Laravel, custom MVC architectures, secure session handling, and database middleware.',
    proficiency: 88,
    experienceYears: '3+ Years',
    codeSnippet: `<?php
namespace App\\Controllers;

use App\\Core\\Database;
use App\\Services\\AuthService;

class SystemController extends BaseController {
    public function getStatus(): string {
        $db = Database::getInstance();
        $health = $db->query("SELECT 1 as alive")->fetch();
        return json_encode([
            'database' => $health ? 'connected' : 'degraded',
            'timestamp' => time(),
            'version' => '3.4.1'
        ]);
    }
}`,
    highlights: ['Modern OOP PHP (8.x+)', 'Laravel Framework Architectures', 'PDO & Secure Parameterized Queries', 'RESTful Middleware & Auth Handling']
  },
  {
    id: 'linux',
    name: 'Linux / Bash',
    category: 'Systems & OS',
    iconName: 'Cpu',
    description: 'Shell scripting, server administration, systemd service management, cron automation, Nginx reverse proxying, and security hardening.',
    proficiency: 92,
    experienceYears: '4+ Years',
    codeSnippet: `#!/usr/bin/env bash
# Automated Service Deploy & Health Checker
set -euo pipefail

APP_DIR="/var/www/nexus-api"
LOG_FILE="/var/log/nexus_deploy.log"

echo "[$(date -u)] Starting deployment pipeline..." | tee -a "$LOG_FILE"
cd "$APP_DIR" || exit 1
git pull origin main
systemctl restart nexus-api.service
echo "[$(date -u)] Deployment complete. Service running!" | tee -a "$LOG_FILE"`,
    highlights: ['Ubuntu/Debian & RHEL Server Management', 'Bash Shell Scripting & Task Automation', 'Nginx Reverse Proxy & SSL Configuration', 'System Metrics Monitoring & Hardening']
  },
  {
    id: 'sql',
    name: 'SQL Databases',
    category: 'Databases & APIs',
    iconName: 'Database',
    description: 'PostgreSQL, MySQL, query indexing, schema design, transactions, and performance query tuning.',
    proficiency: 91,
    experienceYears: '4+ Years',
    codeSnippet: `-- Optimized Relational Indexing & Analytical View
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id INT NOT NULL,
  action VARCHAR(100) NOT NULL,
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_audit_user_action 
ON audit_logs (user_id, created_at DESC);`,
    highlights: ['PostgreSQL & MySQL Database Design', 'Query Indexing & Execution Plan Tuning', 'Relational Schema Normalization', 'Acid Transactions & Stored Procedures']
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'Databases & APIs',
    iconName: 'Network',
    description: 'API architecture, OpenAPI/Swagger specifications, rate limiting, JWT/OAuth authentication, and webhook systems.',
    proficiency: 95,
    experienceYears: '4+ Years',
    codeSnippet: `// Standardized RESTful Response Contract
{
  "status": "success",
  "data": {
    "resourceId": "res_9021a",
    "endpoint": "/api/v1/telemetry",
    "throughput_req_sec": 4820
  },
  "meta": {
    "requestId": "req_88f190bc",
    "timestamp": "2026-08-10T21:47:57Z"
  }
}`,
    highlights: ['RESTful API Architecture & Standard Payload Design', 'JWT & Bearer Token Authentication', 'Rate Limiting & CORS Security Headers', 'Webhook Delivery & Failure Retry Engines']
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'pos-inventory-system',
    title: 'POS & Inventory Management System',
    shortDescription: 'A scalable point-of-sale and inventory tracking suite with automated billing, stock alerts, and VAT calculations.',
    fullDescription: 'An enterprise-grade point-of-sale and warehouse inventory suite designed for retail and wholesale operations. Features barcode processing, real-time inventory level synchronization, dynamic VAT calculation rules, and instant receipt billing.',
    category: 'Full-Stack',
    techTags: ['PHP/Node.js', 'MySQL', 'JavaScript', 'REST API'],
    liveUrl: 'https://rajrafishop.vercel.app/',
    githubUrl: 'https://github.com/pavel-hossain',
    featured: true,
    metrics: [
      { label: 'Billing Speed', value: '< 0.5s' },
      { label: 'Stock Alerts', value: 'Automated' },
      { label: 'VAT Engine', value: '15% Configured' }
    ],
    highlights: [
      'Automated invoice generation and dynamic VAT calculation engine',
      'Real-time stock threshold alert system preventing inventory stockouts',
      'High-performance transactional MySQL database schema with index optimizations',
      'Interactive Live POS Terminal & Checkout Simulator built directly into card'
    ],
    subAppDemo: {
      type: 'pos-system',
      title: 'POS Billing & Inventory Checkout Simulator',
      interactive: true
    },
    starsCount: 58,
    forksCount: 16
  },
  {
    id: 'smart-mess-meal-manager',
    title: 'Smart Mess & Meal Manager',
    shortDescription: 'A web-based ledger for shared living to automate daily meal count, deposit tracking, dynamic meal-rate calculations, and individual balances.',
    fullDescription: 'A digital meal management and shared ledger system engineered for mess residents, hostels, and shared apartments. Automates daily meal tracking, member deposits, expenses ledger, dynamic meal rate formula calculation, and individual member balance settlement reports.',
    category: 'Full-Stack',
    techTags: ['Python/PHP', 'SQL', 'JavaScript', 'HTML/CSS'],
    liveUrl: 'https://the-shield-bachelors.vercel.app/',
    githubUrl: 'https://github.com/pavel-hossain',
    featured: true,
    metrics: [
      { label: 'Meal Rate Formula', value: 'Dynamic' },
      { label: 'Ledger Audit', value: 'Instant' },
      { label: 'Member Balances', value: 'Automated' }
    ],
    highlights: [
      'Real-time dynamic meal rate calculation (Total Expense / Total Meals)',
      'Member deposit tracking ledger with automated individual balance calculation',
      'Monthly mess summary statements with transparent expense breakdown',
      'Interactive Mess Ledger & Meal Rate Calculator built directly into card'
    ],
    subAppDemo: {
      type: 'mess-manager',
      title: 'Smart Mess Meal Rate & Ledger Calculator',
      interactive: true
    },
    starsCount: 49,
    forksCount: 12
  },
  {
    id: 'cloudtrace',
    title: 'CloudTrace Monitor Hub',
    shortDescription: 'Real-time server metrics aggregator and system diagnostics platform with interactive live telemetry graphs.',
    fullDescription: 'CloudTrace Monitor Hub provides devops engineers and system administrators with immediate insight into CPU utilization, memory pressure, active network throughput, and SQL query latencies across distributed environments.',
    category: 'Full-Stack',
    techTags: ['JavaScript', 'Python', 'Linux/Bash', 'REST APIs', 'SQL Databases', 'HTML/CSS'],
    liveUrl: 'https://pavel-hossain.github.io/cloudtrace-demo',
    githubUrl: 'https://github.com/pavel-hossain/cloudtrace-monitor',
    featured: true,
    metrics: [
      { label: 'Avg Latency', value: '4ms' },
      { label: 'Uptime Tracking', value: '99.99%' },
      { label: 'Log Parsing Rate', value: '50k/sec' }
    ],
    highlights: [
      'Built custom Unix socket telemetry listener in Python with low CPU overhead',
      'Engineered interactive live dashboard with SVG metric charts & threshold alerts',
      'Configured automated systemd health monitoring & Telegram notification hooks',
      'Includes built-in interactive sub-app tester for live log inspection'
    ],
    subAppDemo: {
      type: 'system-monitor',
      title: 'CloudTrace Live Telemetry Sandbox',
      interactive: true
    },
    starsCount: 48,
    forksCount: 14
  },
  {
    id: 'nexus-api',
    title: 'Nexus REST API Engine',
    shortDescription: 'High-throughput REST API gateway with automated OpenAPI documentation, token bucket rate limiting, and JWT auth.',
    fullDescription: 'An enterprise-ready microservices gateway built with PHP/Python and SQL backends. Features custom middleware for payload validation, API key rotation, request throttling, and unified error handling.',
    category: 'Backend & APIs',
    techTags: ['Python', 'PHP', 'REST APIs', 'SQL Databases', 'Linux/Bash'],
    liveUrl: 'https://pavel-hossain.github.io/nexus-api-docs',
    githubUrl: 'https://github.com/pavel-hossain/nexus-api-engine',
    featured: true,
    metrics: [
      { label: 'Throughput', value: '12k req/s' },
      { label: 'Auth Latency', value: '< 2ms' },
      { label: 'Test Coverage', value: '96%' }
    ],
    highlights: [
      'Implemented token bucket algorithm for per-user rate limiting',
      'Automated OpenAPI 3.0 specification generator from docstrings',
      'Structured database connection pooling with failover routing for PostgreSQL',
      'Interactive Live Sub-App API Endpoint Tester built directly into card'
    ],
    subAppDemo: {
      type: 'api-tester',
      title: 'Nexus API Request Inspector & Tester',
      interactive: true
    },
    starsCount: 62,
    forksCount: 19
  },
  {
    id: 'autodeploy-cli',
    title: 'AutoDeploy Bash Suite',
    shortDescription: 'Zero-downtime deployment toolkit for Linux environments with automated Nginx reloading and SSL provisioning.',
    fullDescription: 'A comprehensive Bash and Python CLI automation tool that orchestrates code pulls, dependency checks, database migration scripts, systemd unit reloads, and HTTPS SSL certificate renewals without drop in traffic.',
    category: 'Systems & Linux',
    techTags: ['Linux/Bash', 'Python', 'SQL Databases', 'REST APIs'],
    liveUrl: 'https://pavel-hossain.github.io/autodeploy-docs',
    githubUrl: 'https://github.com/pavel-hossain/autodeploy-cli',
    featured: true,
    metrics: [
      { label: 'Deploy Time', value: '1.2s' },
      { label: 'Downtime', value: '0.0s' },
      { label: 'Scripts Suite', value: '18 Shell Tools' }
    ],
    highlights: [
      'Zero-downtime blue-green symlink swapping algorithm for web roots',
      'Automated backup snapshot prior to schema migration triggers',
      'Hardened SSH execution & remote server configuration routines',
      'Interactive web terminal simulation for inspecting deploy scripts'
    ],
    subAppDemo: {
      type: 'code-compiler',
      title: 'AutoDeploy CLI Script Simulator',
      interactive: true
    },
    starsCount: 39,
    forksCount: 8
  },
  {
    id: 'vaultsql-manager',
    title: 'VaultSQL Database Visualizer',
    shortDescription: 'Web-based SQL query analyzer and schema inspector for MySQL and PostgreSQL with query execution metrics.',
    fullDescription: 'VaultSQL empowers backend developers to inspect database indexes, execute parameterized SQL queries securely, visualize table relationships, and detect slow queries before they hit production.',
    category: 'Web Apps',
    techTags: ['JavaScript', 'HTML', 'CSS', 'SQL Databases', 'PHP', 'REST APIs'],
    liveUrl: 'https://pavel-hossain.github.io/vaultsql-demo',
    githubUrl: 'https://github.com/pavel-hossain/vaultsql-manager',
    featured: true,
    metrics: [
      { label: 'Supported Engines', value: 'MySQL & Postgres' },
      { label: 'Query Optimizer', value: 'Built-in' },
      { label: 'Export Formats', value: 'CSV / JSON / SQL' }
    ],
    highlights: [
      'Visual query execution plan explainer with index recommendations',
      'Sanitized input pipeline guarding against SQL injection vectors',
      'Export engine for large relational query results up to 500k rows',
      'Interactive Live SQL Query Runner sub-app included'
    ],
    subAppDemo: {
      type: 'sql-query',
      title: 'VaultSQL Live Query Console',
      interactive: true
    },
    starsCount: 54,
    forksCount: 16
  },
  {
    id: 'pulseweb-analyzer',
    title: 'PulseWeb Performance Auditor',
    shortDescription: 'Client-side web performance and DOM accessibility analyzer with actionable lighthouse-style score breakdowns.',
    fullDescription: 'A sleek web application that analyzes web pages for performance bottlenecks, uncompressed assets, missing semantic HTML structure, and network payload sizes, rendering visual improvement guides.',
    category: 'Web Apps',
    techTags: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
    liveUrl: 'https://pavel-hossain.github.io/pulseweb-audit',
    githubUrl: 'https://github.com/pavel-hossain/pulseweb-analyzer',
    featured: false,
    metrics: [
      { label: 'Audit Time', value: '< 1.5s' },
      { label: 'Checks', value: '42 Rules' },
      { label: 'Accuracy', value: '100%' }
    ],
    highlights: [
      'Automated DOM node tree analysis and image asset optimization audit',
      'WCAG 2.1 contrast ratio parser and screen reader compatibility test',
      'Clean PDF & JSON report generator for client handoffs'
    ],
    subAppDemo: {
      type: 'data-formatter',
      title: 'PulseWeb Performance Audit Tester',
      interactive: true
    },
    starsCount: 31,
    forksCount: 7
  },
  {
    id: 'cyberdash-admin',
    title: 'CyberDash Systems Dashboard',
    shortDescription: 'High-contrast server control panel and process manager with real-time system log streaming.',
    fullDescription: 'A web-based systems administration UI built for managing server services, monitoring disk space, inspecting daemon logs, and managing user permissions with a modern dark theme.',
    category: 'Full-Stack',
    techTags: ['JavaScript', 'PHP', 'Linux/Bash', 'HTML', 'CSS', 'REST APIs'],
    liveUrl: 'https://pavel-hossain.github.io/cyberdash-app',
    githubUrl: 'https://github.com/pavel-hossain/cyberdash-admin',
    featured: false,
    metrics: [
      { label: 'Supported OS', value: 'Ubuntu / Debian / CentOS' },
      { label: 'Log Streaming', value: 'WebSocket / SSE' },
      { label: 'Memory Footprint', value: '< 25MB' }
    ],
    highlights: [
      'Tail command streaming parser for system log files with keyword filter',
      'Process manager allowing systemd service start, stop, and restart',
      'Role-based authorization middleware with multi-factor session security'
    ],
    subAppDemo: {
      type: 'log-viewer',
      title: 'CyberDash Live Log Streamer',
      interactive: true
    },
    starsCount: 42,
    forksCount: 11
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: '2024 — PRESENT',
    role: 'Senior Full-Stack & Systems Developer',
    company: 'Apex Digital Solutions',
    location: 'Dhaka, Bangladesh / Remote',
    description: 'Lead engineer directing backend architecture, REST API design, and cloud database optimization for high-traffic client applications.',
    achievements: [
      'Reduced API response latency by 45% through query index optimization and redis caching layers',
      'Architected zero-downtime Linux deployment pipelines processing over 100k daily requests',
      'Mentored junior developers in writing clean, modular JavaScript and Python codebase'
    ],
    techUsed: ['Python', 'PHP', 'JavaScript', 'SQL Databases', 'Linux/Bash', 'REST APIs']
  },
  {
    period: '2022 — 2024',
    role: 'Backend & Systems Engineer',
    company: 'ByteWave Infrastructure',
    location: 'Dhaka, Bangladesh',
    description: 'Focused on developing secure RESTful APIs, relational schema design, server administration, and automation scripting.',
    achievements: [
      'Built custom Python telemetry monitor handling 50k events per minute with 99.9% uptime',
      'Designed relational PostgreSQL schemas supporting multi-tenant client isolation',
      'Created automated Bash bash scripts for system backups and automated SSL rotations'
    ],
    techUsed: ['Python', 'PHP', 'SQL Databases', 'Linux/Bash', 'REST APIs']
  },
  {
    period: '2021 — 2022',
    role: 'Frontend & Web Developer',
    company: 'CodeCraft Technologies',
    location: 'Dhaka, Bangladesh',
    description: 'Developed responsive, accessible web interfaces using semantic HTML, CSS3, JavaScript ES6+, and RESTful API integrations.',
    achievements: [
      'Delivered 15+ custom web applications with Lighthouse performance scores above 95',
      'Implemented fluid modern UI design systems using Tailwind CSS and vanilla JavaScript',
      'Ensured WCAG 2.1 accessibility compliance across all production web applications'
    ],
    techUsed: ['HTML', 'CSS', 'JavaScript', 'REST APIs']
  }
];

export const TERMINAL_PRESETS = [
  { cmd: 'help', label: 'Show Available Commands' },
  { cmd: 'whoami', label: 'Developer Bio' },
  { cmd: 'skills', label: 'List Core Tech Stack' },
  { cmd: 'projects', label: 'Featured Projects' },
  { cmd: 'contact', label: 'Contact Info' },
  { cmd: 'status', label: 'System Telemetry' }
];

export const GITHUB_STATS_DATA: GithubStatsType = {
  username: 'pavel-hossain',
  totalRepos: 28,
  totalStars: 254,
  totalForks: 68,
  totalContributions: 1482,
  pullRequests: 114,
  commitStreakDays: 42,
  topLanguages: [
    { name: 'Python', percentage: 35, color: '#3572A5' },
    { name: 'JavaScript / TS', percentage: 30, color: '#f1e05a' },
    { name: 'PHP', percentage: 20, color: '#4F5D95' },
    { name: 'Linux / Bash', percentage: 10, color: '#89e051' },
    { name: 'HTML & CSS', percentage: 5, color: '#e34c26' },
  ],
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Tariq Rahman',
    role: 'Chief Technology Officer',
    company: 'Apex Digital Solutions',
    content: 'Pavel is an exceptional full-stack developer who consistently delivers high-performance code. His optimization of our REST APIs and relational database query indexes cut our response latency in half. His attention to system security and clean code structure is unmatched.',
    rating: 5,
    date: 'February 2026',
    linkedProject: 'Nexus Core Backend API System'
  },
  {
    id: '2',
    name: 'Sarah Lin',
    role: 'Lead Systems Architect',
    company: 'ByteWave Infrastructure',
    content: 'Working with Pavel on Linux automation scripts and telemetry workers was a smooth experience. He has deep mastery over Python backend workflows, Bash daemons, and system health monitoring. Highly reliable engineer!',
    rating: 5,
    date: 'November 2025',
    linkedProject: 'DevOps & Linux Telemetry Monitor'
  },
  {
    id: '3',
    name: 'Mahmudul Hasan',
    role: 'Senior Product Manager',
    company: 'CodeCraft Technologies',
    content: 'Pavel crafted our client-facing web application with phenomenal precision. His UI designs with Tailwind and JavaScript are fast, accessible, and intuitive. He bridges backend systems with frontend elegance effortlessly.',
    rating: 5,
    date: 'August 2025',
    linkedProject: 'CyberDash Systems Dashboard'
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: 'Engineering Director',
    company: 'FinTech Cloud Operations',
    content: 'Pavel designed a robust, secure REST API architecture for our transaction ledger. His adherence to JWT authentication standards, input validation, and fail-safe database handling gave our leadership complete confidence.',
    rating: 5,
    date: 'May 2025',
    linkedProject: 'Nexus Core Backend API System'
  }
];

