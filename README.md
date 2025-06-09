# NinjaStrat Website

A modern static website for NinjaStrat's StratEngine trading system built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- ⚡ Static site generation with Next.js
- 🎨 Modern UI with Tailwind CSS
- 🔧 TypeScript for type safety
- 🚀 Optimized for performance
- 📦 Easy deployment

## Pages & Sections

### Homepage
- **Hero Section**: Main banner with call-to-action
- **Introduction**: Overview of NinjaStrat and StratEngine
- **Core Features**: Six key features with descriptions:
  - Laser-Sharp Entry Precision
  - Adaptive Risk Management
  - Smart Chop Detection
  - Precision Breakout Detection
  - Dynamic News Management
  - Predictive Trade Management
- **Video Section**: Demo video placeholder
- **Footer**: Risk disclosure and legal information

### Navigation Pages (Placeholder)
- Pricing
- Downloads
- Support
- FAQ
- NinjaTrader
- Contact
- About

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Build**: Static export ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To build the static site:

```bash
npm run build
# or
yarn build
```

This will generate static files in the `out` directory that can be deployed to any static hosting service.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── components/
│   ├── Navigation.tsx       # Header navigation with NinjaStrat branding
│   ├── HeroSection.tsx      # Main hero banner
│   ├── IntroSection.tsx     # Introduction to StratEngine
│   ├── CoreFeatures.tsx     # StratEngine features grid
│   ├── VideoSection.tsx     # StratEngine demo section
│   └── Footer.tsx           # Footer with disclaimers
├── public/                  # Static assets
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Customization

### Colors
Primary colors are defined in `tailwind.config.js`:
- `primary`: #0066cc (blue)
- `primary-hover`: #0052a3 (darker blue)

### Fonts
The project uses Inter from Google Fonts, configured in `app/layout.tsx`.

### Content
All content can be modified in the respective component files in the `components/` directory.

## Deployment

This project is configured for static export and can be deployed to:

- **Netlify**: Connect your repository and deploy automatically
- **Vercel**: Import project from GitHub
- **GitHub Pages**: Upload the `out` folder contents
- **Any static hosting**: Upload the build output

## Features to Add

- [ ] Add actual video embeds
- [ ] Implement theme toggle functionality
- [ ] Add more interactive animations
- [ ] Create individual pages for navigation items
- [ ] Add contact forms
- [ ] Implement SEO optimizations
- [ ] Add analytics tracking

## About

NinjaStrat is a cutting-edge trading platform featuring the StratEngine algorithm, designed for professional NASDAQ futures trading.

## License

This project is the official website for NinjaStrat's StratEngine trading system. 