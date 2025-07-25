# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

NinjaStrat website is a static Next.js application for a trading platform featuring the StratEngine algorithm. The project uses TypeScript, Tailwind CSS with a custom Tokyo Night theme, and is configured for static export deployment to GitHub Pages.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (generates static files in out/ directory)
npm run build

# Start production server locally
npm start

# Run linting
npm run lint
```

## Build and Deployment Process

This project has a unique dual-output setup for GitHub Pages:

1. **Source files**: Edit files in `app/` and `components/`
2. **Development**: Run `npm run dev` for live development
3. **Build process**: `npm run build` generates static files in `out/` directory
4. **Deployment**: The `docs/` folder contains the deployed static site for GitHub Pages

**Important**: Never edit files in `docs/`, `out/`, or `.next/` directories - these are generated files that get overwritten on every build.

## Architecture

### Core Structure
- **Next.js 14** with App Router and static export configuration
- **TypeScript** with strict mode enabled
- **Tailwind CSS** with extensive Tokyo Night color theme
- **Component-based architecture** with reusable UI components

### Key Configuration Files
- `next.config.js`: Configured for static export with `output: 'export'` and `trailingSlash: true`
- `tailwind.config.js`: Extensive Tokyo Night theme with custom colors and animations
- `tsconfig.json`: Standard Next.js TypeScript configuration with path aliases

### Component Architecture
The application follows a modular component structure:

- `app/layout.tsx`: Root layout with Inter font and dark theme
- `app/page.tsx`: Homepage composition importing all major sections
- `components/Navigation.tsx`: Responsive navigation with mobile menu (client component)
- `components/HeroSection.tsx`: Main landing section
- `components/IntroSection.tsx`: StratEngine introduction content
- `components/CoreFeatures.tsx`: Feature grid display
- `components/VideoSection.tsx`: Demo video section
- `components/Footer.tsx`: Footer with legal disclaimers

### Styling System
- **Tokyo Night Theme**: Comprehensive dark color palette with semantic color assignments
- **Custom CSS Classes**: Uses `btn-primary`, `glow-primary` utilities defined in globals.css
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Custom fade-in and slide-up animations defined in Tailwind config

### File Organization
```
app/                    # Next.js app directory (source)
├── globals.css        # Global styles and Tailwind imports
├── layout.tsx         # Root layout component
└── page.tsx           # Homepage composition

components/            # Reusable React components
├── Navigation.tsx     # Header with responsive menu
├── HeroSection.tsx    # Landing hero section
├── IntroSection.tsx   # Product introduction
├── CoreFeatures.tsx   # Feature showcase grid
├── VideoSection.tsx   # Demo video display
└── Footer.tsx         # Footer with disclaimers

docs/                  # Generated static site (DO NOT EDIT)
out/                   # Build output directory (DO NOT EDIT)
```

## Theme and Styling

The project uses a comprehensive Tokyo Night color scheme with semantic color assignments:
- Primary blues: `#7aa2f7` (default), `#7dcfff` (hover)
- Background layers: `#1f2335` (primary), `#24283b` (secondary), `#292e42` (tertiary)
- Text hierarchy: `#c0caf5` (primary), `#a9b1d6` (secondary), `#737aa2` (muted)

Custom animations and glows are applied through Tailwind utilities and custom CSS classes.

## Development Workflow

1. Make changes to source files in `app/` and `components/`
2. Test changes with `npm run dev`
3. Build static files with `npm run build`
4. Deploy by copying `out/` contents to `docs/` for GitHub Pages
5. Commit and push changes

## Pages Structure

The site includes placeholder pages for:
- Pricing, Downloads, Support, FAQ, NinjaTrader, Contact, About

Each page follows the same layout pattern with Navigation and Footer components.