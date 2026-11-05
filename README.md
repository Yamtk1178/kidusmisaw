# Kidus Misaw — Developer & Security Portfolio (V2)

A modern, high-performance developer portfolio built from scratch for **Kidus Misaw**, 4th-year Software Engineering student at Debre Berhan University. Designed to bridge full-stack software engineering rigor with practical cybersecurity and network infrastructure exploration.

---

## 🌟 Architecture & Features

- **Next.js 15 App Router & React 19:** Server and client component boundaries, fast SSR/SSG rendering, and SEO metadata.
- **TypeScript:** Strict type contracts for all data models, skill categories, and project records.
- **Tailwind CSS Design System:** Custom obsidian dark theme (`#090d16`), elevated card layers, and subtle radial glow gradients.
- **Dual-Discipline Showcase:**
  - **Software Engineering:** Clean architecture, layered pattern implementations, OOP design, and end-to-end Cypress test suites.
  - **Cybersecurity & Networks:** Cisco Packet Tracer enterprise simulations (OSPF, VLANs, ACLs, NAT), PortSwigger Web Security Academy labs, and network reconnaissance (Nmap, Wireshark, Burp Suite).
- **Verified Technical Arsenal:** Honest, contextual categorization across 7 domains with practical notes rather than arbitrary progress percentages.
- **Interactive Project Showcase:** Filterable by domain (*Network & Security*, *Full-Stack*, *QA Testing*, *Systems Architecture*) with an interactive architecture inspection modal and verified GitHub repository links.
- **Print-Ready Digital Resume (`/resume`):** Dedicated route replicating a complete CV with responsive screen styling and CSS print media rules for instant one-click PDF export.
- **Functional Contact Pipeline:** Interactive client-side validated form paired with an integrated Next.js API route (`/api/contact`).
- **Accessibility & Motion:** Semantic HTML5, accessible ARIA labels, responsive drawer menu, and full support for `prefers-reduced-motion`.

---

## 🛠️ Technology Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript (ES2022) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 3.4 + PostCSS + Autoprefixer |
| **Icons** | Lucide React |
| **Utilities** | `clsx`, `tailwind-merge` |
| **Testing & Build** | Next Build, ESLint, TypeScript Compiler (`tsc`) |

---

## 📁 Project Structure

```
kidusmisaw/
├── public/
│   ├── image/
│   │   └── profile.jpg           # High-resolution verified profile photo
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global metadata, viewport, HTML shell
│   │   ├── page.tsx              # Homepage orchestrating all portfolio sections
│   │   ├── globals.css           # Tailwind directives, custom scrollbars, print rules
│   │   ├── resume/
│   │   │   └── page.tsx          # Dedicated print-optimized digital CV route
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts      # Contact endpoint with payload validation
│   ├── components/
│   │   ├── Navbar.tsx            # Blurred fixed navigation with mobile drawer
│   │   ├── Hero.tsx              # Identity, dual-discipline status, telemetry card
│   │   ├── About.tsx             # Academic story, philosophy, profile metrics
│   │   ├── Skills.tsx            # 7 categorized domains with practical context
│   │   ├── Projects.tsx          # Filterable showcase with GitHub links
│   │   ├── ProjectModal.tsx      # Deep architecture inspect modal
│   │   ├── SecurityJourney.tsx   # Hands-on labs (PortSwigger, Nmap, Burp, Linux)
│   │   ├── Education.tsx         # Debre Berhan University coursework & timeline
│   │   ├── Contact.tsx           # Contact details, one-click copy, verified channels
│   │   └── Footer.tsx            # Navigation, social links, back-to-top trigger
│   ├── data/
│   │   └── portfolioData.ts      # Central verified data source for all components
│   └── lib/
│       └── utils.ts              # Class name merging utility (cn)
├── _legacy_archive/              # Safely archived legacy static files & prior templates
├── next.config.mjs               # Next.js build configuration
├── tailwind.config.ts            # Custom design tokens, obsidian palette, animations
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # Dependencies and execution scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** v18.18.0 or newer (tested on Node v24.15.0)
- **npm:** v9.0.0 or newer (tested on npm 11.12.1)
- **Git**

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd kidusmisaw
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized static/SSR production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run start
```

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Rebuild portfolio with Next.js 15, TypeScript & Tailwind CSS"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `Yamtk1178/portfolio-website` repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and assign an instant HTTPS domain.

### Deploy to GitHub Pages / Static Export
If deploying as a purely static site:
1. In `next.config.mjs`, add `output: 'export'`.
2. Run `npm run build` which produces the static assets in `out/`.
3. Deploy `out/` to GitHub Pages or Netlify.

---

## 👤 Author

**Kidus Misaw**  
- University: Debre Berhan University (4th Year, Software Engineering)  
- GitHub: [@Yamtk1178](https://github.com/Yamtk1178)  
- Email: [kidusmisaw7@gmail.com](mailto:kidusmisaw7@gmail.com)  
- Location: Debre Birhan, Ethiopia  

