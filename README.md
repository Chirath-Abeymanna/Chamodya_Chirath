# Chamodya Chirath - Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Showcasing expertise in software engineering, full-stack development, and AI-powered solutions.

## 🚀 About

This portfolio represents the intersection of software, security, and intelligence. Built with cutting-edge technologies and featuring smooth animations, dark/light mode theming, and an interactive user experience.

**Role:** Software Engineer • Full Stack Developer • AI Enthusiast

## ✨ Features

- **Modern Design**: Clean, minimal interface with smooth animations using Framer Motion
- **Theme Support**: Dark/light mode toggle with Next Themes
- **Smart Scrolling**: Custom scroll provider for enhanced navigation
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Mouse-tracking grid effects and parallax backgrounds
- **Video Integration**: Hero section with auto-playing video background
- **Section Navigation**: Smooth scrolling between portfolio sections

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, CSS-in-JS
- **UI Components**: Radix UI (Navigation, Separator, Slot)
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons

### Backend & Database

- **Languages**: Python, Go, Node.js, Java
- **Frameworks**: Spring Boot, FastAPI
- **Databases**: PostgreSQL, MongoDB, MySQL
- **APIs**: REST, gRPC, tRPC, OpenAI API

### AI/ML

- **Frameworks**: PyTorch
- **Libraries**: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn

### DevOps & Tools

- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Cloud**: AWS
- **Version Control**: Git

## 📂 Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── sections/           # Portfolio sections
│   │   ├── hero.tsx       # Hero section with video
│   │   ├── about.tsx      # About section
│   │   ├── experience.tsx # Work experience
│   │   ├── projects.tsx   # Project showcase
│   │   ├── achievements.tsx
│   │   └── education.tsx  # Education background
│   ├── ui/                # Reusable UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer component
│   ├── theme-provider.tsx # Theme context
│   ├── theme-toggle.tsx   # Dark/light mode toggle
│   └── smart-scroll-provider.tsx
├── hooks/                 # Custom React hooks
│   └── use-smart-scroll.ts
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static assets
│   └── videos/          # Video files
└── Configuration files
```

## 🎨 Featured Sections

### Hero

High-impact landing section with:

- Auto-playing video showcase
- Interactive grid background with mouse tracking
- Parallax scrolling effects
- Call-to-action buttons

### About

Personal introduction highlighting:

- Background in full-stack engineering and security
- Focus on AI-assisted tooling and scalable systems
- Technologies: Go, Python, Next.js
- Professional philosophy and approach

### Projects

Showcase of 5+ major projects:

1. **Skillify** - AI-powered career roadmap generator (Open Source)
2. **Securize** - Cybersecurity analytics platform (Private Beta)
3. **TumorSense** - AI-powered tumor detection system (Open Source)
4. **Car Price Prediction** - ML model for price estimation (Open Source)
5. **Ticketerr** - Real-time ticketing system (Open Source)

### Experience & Education

Professional background and academic credentials

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theming

The portfolio uses CSS variables for theming. Customize colors in `app/globals.css`:

- Light mode variables under `:root`
- Dark mode variables under `.dark`

### Content

Update personal information in:

- `components/sections/hero.tsx` - Name, role, tagline
- `components/sections/about.tsx` - Bio and background
- `components/sections/projects.tsx` - Project details and tech stack

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Other Platforms

This project can be deployed on any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📝 License

This project is open source and available for personal use.

## 🤝 Connect

- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

---

Built with ❤️ using Next.js and TypeScript
