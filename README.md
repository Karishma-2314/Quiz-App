# QuizMaster

A modern, high-performance, portfolio-level technical assessment and quiz platform engineered with semantic HTML5, modern CSS3, and Vanilla JavaScript (ES6+). Zero external frameworks, zero remote backend dependencies, and 100% offline data persistence using browser `localStorage` and audio synthesis via the Web Audio API.

---

## Overview

**QuizMaster** is designed to transform the standard multiple-choice quiz experience into a real-world, production-quality educational assessment tool. Built specifically for technical interview practice, software engineering revision, and domain benchmarking, QuizMaster features a structured question bank of **112+ realistic, educational questions** spanning programming languages, computer science fundamentals, databases, data structures, algorithms, and general knowledge.

Every question includes clear answer validation and an in-depth technical explanation detailing **why** the correct option is right and how it works conceptually.

---

## Features

### 🌟 User Interface & Navigation
- **Single Page Application (SPA) Architecture**: Seamless screen transitions between 11 functional views (Home, Categories, Setup, Active Quiz, Results, Review, Dashboard, Leaderboard, Bookmarks, History, Settings).
- **Glassmorphism & SaaS Design System**: Modern dark slate aesthetic by default, intentional light mode toggle, cohesive CSS custom properties, and responsive layout across desktop, tablet, and mobile (320px–1440px+).
- **Responsive Mobile Navigation**: Accessible hamburger navigation drawer with smooth slide-down states and keyboard skip links.

### 🧠 Quiz Engine & Question System
- **112+ Curated Technical Questions**: High-quality, interview-grade questions across 9 domains:
  - JavaScript (ES6+, Closures, Event Loop, Microtasks, Prototypal Inheritance)
  - Python (GIL, Mutability, Generators, Decorators, Memory Model)
  - Java (JVM bytecode, Memory Pool, HashMaps, Concurrency, OOP)
  - C / C++ (Pointers, Memory allocation, RAII, Virtual destructors, Amortization)
  - SQL & Databases (ACID, B-Tree Indexes, Normalization, Joins, Transactions)
  - HTML5 & CSS3 (Semantic markup, Box model, Flexbox, Grid, Specificity, Accessibility)
  - Data Structures & Algorithms (Big-O analysis, BSTs, Graph traversals, Heaps, Dynamic Programming)
  - Computer Science & OOP (Processes vs. Threads, Deadlocks, SOLID principles, Networking, REST)
  - General Knowledge & Science (Preserves original foundational questions with rich expansions)
- **Randomization with Integrity**: Questions and options are shuffled dynamically using the Fisher-Yates algorithm while preserving strict correct-answer mapping.
- **Difficulty Modes**: Easy, Medium, Hard, and Mixed.
- **Dynamic Question Sizing**: Flexible quiz lengths (5, 10, 15, or 20 questions) with graceful fallback if specific query combinations are constrained.
- **Countdown Timer**: 2-minute, 5-minute, 10-minute, or untimed modes, with low-time visual alerts (< 60 seconds) and automatic submission when time expires.
- **Interactive Question Navigator**: Visual numbered grid displaying Current, Answered, Unanswered, and Bookmarked states with instant jump navigation.
- **Keyboard Shortcuts**: Select options with keys `1`, `2`, `3`, `4`; advance or reverse with `ArrowRight`, `ArrowLeft`, or `Enter`.

### 📊 Results & Learning Review
- **SVG Circular Radial Score Meter**: Animated percentage ring visualizing accuracy score.
- **KPI Metrics**: Total questions, correct count, incorrect count, unanswered count, and precise time taken.
- **Performance Feedback**: Dynamic evaluative messaging based on score brackets.
- **Detailed Question Review**: Line-by-line review showing the user's selected answer, the true correct answer, and an educational rationale explaining the concept.
- **Review Filtering**: Filter review questions by All, Correct Only, Incorrect Only, or Unanswered Only.

### 🔥 Daily Challenge & Streak Tracking
- **Deterministic Daily Challenge**: Seeded pseudo-random generation based on the current date (`YYYY-MM-DD`) so all users encounter the same 10 curated questions each day.
- **Authentic Streak Engine**: Tracks consecutive active days using timestamp comparisons, maintaining both Current Streak and All-Time Best Streak.

### 📈 Dashboard & Performance Analytics
- **Personal Mastery Dashboard**: Displays total quizzes taken, questions answered, average accuracy %, highest score, and active streak.
- **Category Mastery Progress Bars**: Real-time accuracy percentages per subject domain.
- **Recent Quiz History**: Log of past attempts with direct links to review answers.

### 🔖 Bookmarks & Revision Library
- **Saved Questions**: Bookmark any difficult or interesting question during an active quiz or during review.
- **Search & Filter**: Search bookmarked questions instantly by keyword or subject.

### 🏆 Local Benchmark Leaderboard
- **Frontend Benchmarking**: Ranks the user's locally stored best score against simulated benchmark contenders (`DevMaster_99`, `AlgoWizard`, etc.) with transparent local status labelling.

### 🔊 Audio Synthesis (Web Audio API)
- **Pure In-Browser Sound Synthesis**: Delicate synthesized chimes for selections, correct answers, incorrect answers, timer warnings, and quiz completion. Zero external `.mp3` or `.wav` dependencies. Fully customizable via Settings.

### 🛡️ Safety & Session Recovery
- **Active Quiz Session Restore**: If the browser refreshes during an active quiz, the user is presented with a prompt to resume their quiz with question states and answers intact.
- **Accessible Confirmation Modals**: Modals for submitting with unanswered questions, clearing history, or resetting data.
- **Toast Notifications**: Lightweight, auto-dismissing notifications for actions and status updates.

---

## Technologies

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>`, `<progress>`), ARIA attributes, skip link accessibility.
- **CSS3**: CSS Custom Properties (Theme tokens), CSS Grid, Flexbox, SVG animations, glassmorphism (`backdrop-filter`), `prefers-reduced-motion` compliance.
- **Vanilla JavaScript (ES6+)**: Modular IIFE architecture, State Management, DOM APIs, Fisher-Yates shuffle, Seeded PRNG.
- **Web Audio API**: Real-time sound wave synthesis without asset downloads.
- **Web Storage API (`localStorage`)**: Offline JSON serialization and error-guarded persistence.

---

## Project Structure

```
quiz_app/
├── index.html            # Main SPA entry point with semantic view containers
├── style.css             # Unified modern CSS design system and responsive styles
├── script.js             # 112+ question bank, QuizEngine, AudioService, and UIController
├── README.md             # Complete technical documentation
└── Quiz-App-main/        # Mirrored directory for direct subfolder access
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
```

---

## How to Run

Because QuizMaster is built strictly with vanilla web standards and zero node build steps, it runs in any modern web browser immediately:

### Option 1: Direct File Launch
Double-click `index.html` in your file explorer or open it via your browser:
```
file:///path/to/quiz_app/index.html
```

### Option 2: Live Server (VS Code)
1. Open the folder in VS Code.
2. Click **Go Live** on the bottom right or right-click `index.html` &rarr; **Open with Live Server**.
3. Visit `http://localhost:5501/` in your browser.

### Option 3: Python Built-In HTTP Server
Run from the root directory:
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

---

## How It Works

```
                     ┌────────────────────────┐
                     │     User Interface     │
                     │  (DOM Events & Views)  │
                     └───────────┬────────────┘
                                 │
                     ┌───────────▼────────────┐
                     │      UIController      │
                     │   (Router & Render)    │
                     └─────┬────────────┬─────┘
                           │            │
       ┌───────────────────▼──┐      ┌──▼─────────────────┐
       │      QuizEngine      │      │    SoundService    │
       │ (Shuffle, Timer, QA) │      │  (Web Audio Synth) │
       └───────────┬──────────┘      └────────────────────┘
                   │
       ┌───────────▼──────────┐
       │    StorageService    │
       │    (LocalStorage)    │
       └──────────────────────┘
```

1. **Initialization**: On `DOMContentLoaded`, `UIController` initializes theme preferences from `localStorage`, checks for any active saved sessions, renders statistics, and attaches event listeners.
2. **Quiz Generation**: `QuizEngine.initQuiz(config)` filters questions by category and difficulty, runs a Fisher-Yates shuffle, shuffles each question's 4 options, and starts the countdown timer.
3. **Session Persistence**: On every answer selection or question transition, the current quiz state is synced to `localStorage.quizmaster_active_session`.
4. **Scoring & Evaluation**: Upon completion or timer expiration, `QuizEngine.submitQuiz()` computes metrics (correct, incorrect, unanswered, accuracy, time taken), appends the record to `quizmaster_quiz_history`, updates overall category stats, calculates streak via `StreakService`, and clears the active session snapshot.
5. **Review & Revision**: The user can inspect every question with color-coded feedback and explanations, or bookmark difficult questions to `quizmaster_saved_bookmarks`.

---

## LocalStorage Architecture

QuizMaster isolates application state into structured, defensively parsed keys:

| Storage Key | Data Structure | Purpose |
|---|---|---|
| `quizmaster_user_stats` | `Object` | Stores total quizzes, questions answered, correct answers, best accuracy %, current streak, best streak, last active date, and category mastery breakdown. |
| `quizmaster_quiz_history` | `Array<Attempt>` | Chronological array of all past quiz attempts with timestamp, category, score, duration, and detailed review items. |
| `quizmaster_saved_bookmarks` | `Array<number>` | Array of question IDs saved by the user for revision. |
| `quizmaster_user_settings` | `Object` | Theme preference (`dark` or `light`), audio toggle, low-time warning audio toggle, and default question count. |
| `quizmaster_active_session` | `Object` | Real-time state of an ongoing quiz (questions, selected answers, current index, time remaining). Cleaned upon submission. |
| `quizmaster_daily_status` | `Object` | Daily challenge completion status mapped to `YYYY-MM-DD`. |

---

## Future Enhancements

- [ ] Export quiz performance reports as downloadable PDF or JSON summaries.
- [ ] Custom user-created question decks with JSON file import/export.
- [ ] Spaced repetition flashcard mode for bookmarked questions.
- [ ] Code syntax highlighting with prism-like tokens for complex programming questions.

---

## Live Project

🔗 **[QuizMaster — Live Demo](https://karishma-2314.github.io/Quiz-App/)**

---

## GitHub Repository

🔗 **[github.com/Karishma-2314/Quiz-App](https://github.com/Karishma-2314/Quiz-App)**
