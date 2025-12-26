# Kasparro Frontend Assignment

This is the frontend submission for the Kasparro Engineering assignment.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

## Project Structure

- **app/**: Contains all pages and routes.
- **src/components/**: Reusable UI components.
- **src/data/**: Mock data acting as the database.
- **src/types/**: TypeScript definitions.

## Design Decisions

- **Two Visual Styles**: The public website uses a dark/modern design for marketing, while the dashboard uses a clean/solid design for usability.
- **Mock Data**: I used a centralized mock data file (`src/data/mockData.ts`) to simulate a backend.
- **Type Safety**: All components use strict TypeScript interfaces found in `src/types`.
- **Responsive**: The dashboard and sidebar are fully responsive for mobile devices.
