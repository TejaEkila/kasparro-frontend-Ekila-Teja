# Kasparro Frontend Assignment (Solution)

This repository contains the frontend implementation for Kasparro, an AI-native SEO platform. The solution is built to demonstrate system thinking, scalable architecture, and engineering discipline.

## System Architecture

The application is structured to handle two distinct product surfaces (Marketing Website + Product Dashboard) within a single Next.js codebase.

### 1. Component Architecture
I adopted a strict separation of concerns to maintain codebase scalability:

*   **`src/components/layout/`**: Contains major structural blocks like `Sidebar`, `Navbar`.
*   **`src/components/ui/`**: Reusable atomic primitives (buttons, cards) inspired by shadcn/ui.
*   **`app/` (Router)**:
    *   **`(marketing)` routes**: `/`, `/platform`, `/about` — Optimized for SEO and visual impact.
    *   **`/app/` routes**: `/app/dashboard`, `/app/audit` , `/app/architecture`— Optimized for data density and utility.

A key design choice was the **Dual-Surface UX Strategy**:
*   The **Public Website** uses a "Liquid Glass" aesthetic (Dark Mode, Framer Motion) to communicate the futuristic nature of AI-SEO.
*   The **Product Dashboard** reverts to a "Clean Solid" aesthetic (Light/Slate mix) to prioritize readability and information density for power users.

### 2. Data Modeling
Instead of ad-hoc objects, the application mocks a real backend structure:
*   **Single Source of Truth**: All data lives in `src/data/mockData.ts` acting as a pseudo-database.
*   **Type Safety**: Strict interfaces in `src/types/index.ts` ensure data consistency across components (e.g., `AuditModule`, `Brand`).
*   **State Management**: URL Search Params (`?brandId=...`) are used as the primary state manager for the Brand Selector, ensuring the dashboard is shareable and bookmarkable.

### 3. Design Tokens
The design system avoids hardcoded values by using semantic tokens:
*   `--color-brand`: Primary beige accent (#C4A496) used for active states and highlights.
*   `bg-brand` / `text-brand`: Custom Tailwind classes mapping to these tokens.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Deploy**: GitHub Pages (Static Export)

## Folder Structure

```
├── app/                  # Next.js App Router
│   ├── (public)/         # Marketing Pages
│   └── app/              # Authenticated Product Pages
├── src/
│   ├── components/       # Component Library
│   ├── data/             # Mock Database
│   └── types/            # TypeScript Interfaces
└── public/               # Static Assets
```

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run server:**
   ```bash
   npm run dev
   ```

3. **Open:** http://localhost:3000

---
*Built by Ekila Teja for Kasparro Engineering Team.*
