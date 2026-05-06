# VarsityHub

VarsityHub is a modern, responsive web application designed for university students to easily access essential academic information. It serves as a centralized hub for exam routines, official notices, result publications, academic resources, and community discussions.

## Key Features

- **Notice Board & Results Archive**: View and search through official university notices. Filter by category, department, and date. View detailed result publications with GPA/Marks breakdowns and PDF download options.
- **Dynamic Exam Routines**: Search and view examination schedules by degree, subject, and year. Features both table and timeline views with functionality to preview individual module codes and exam guidelines.
- **Resource Library**: A digital repository for students to access syllabuses, previous years' questions, lecture notes, and study suggestions. Contains folder-based navigation and categorization by academic year.
- **Community Forum**: An interactive discussion board for students to ask questions, share knowledge, and stay updated on trending academic topics. Features a voting system and "solved" tagging for helpful answers.

## Technology Stack

This project was built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `app/` - Next.js App Router pages and layouts.
  - `notices/` - Notice board and result details.
  - `routines/` - Exam schedules and specific routine previews.
  - `resources/` - Academic document repository.
  - `forum/` - Community discussion boards.
- `components/` - Reusable UI components (Headers, Cards, Tickers).
- `public/` - Static assets and images.

## Note

This application is built with mock data representing a typical university structure. It does not connect to a live backend database, ensuring it is lightweight, quick to set up, and acts as a demonstration of frontend implementation patterns using Next.js and Tailwind CSS.
