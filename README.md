# Kizuna Rail (Internationalization & Refactor)

**A legacy code refactoring and optimization project**

---

## 📖 Project Overview

Kizuna Rail is a fictional booking platform for a Japanese railway company. This project simulates an "Emergency Handoff" scenario where I assumed ownership of an existing, undocumented Node.js/Express codebase. 

The objective was not to build from scratch, but to diagnose architectural issues, refactor technical debt, and implement critical features required for an international product launch. This involved debugging complex routing logic, implementing localization (i18n) strategies, and optimizing the frontend for accessibility and print media.

## 🚀 Key Engineering Contributions

### 1. Architectural Refactoring
* **Problem:** Inherited a monolithic, disorganized controller structure that made routing maintenance difficult.
* **Solution:** Decoupled route logic by restructuring the file system into a modular `routes/` directory pattern, implementing cleaner separation of concerns and improving code discoverability.

### 2. Backend Logic & Filtering
* **Problem:** The search functionality for train routes was broken, with race conditions in how filters were applied.
* **Solution:** Engineered a robust multi-variable filtering system using URL query parameters. This allows users to filter by "Region" and "Season" independently or simultaneously, handling edge cases where no results match.

### 3. Localization & Data Transformation
* **Problem:** The database stored pricing in JPY and raw integer dates, unsuitable for the target international audience.
* **Solution:** Implemented middleware and helper functions to transform data at the controller level.
    * **Currency Conversion:** Dynamic injection of exchange rates to display USD for international bookings while maintaining JPY integrity in the database.
    * **Date Formatting:** Converted raw operating month integers into human-readable formats.

### 4. UX & Accessibility
* **Print Optimization:** Developed specific `@media print` CSS strategies to ensure booking confirmations render cleanly as physical tickets, removing UI clutter (navbars, footers) during printing.
* **Accessibility Audit:** Identified and resolved semantic HTML issues (specifically Aria labels and title attributes) to meet basic accessibility standards.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Templating:** EJS (Embedded JavaScript)
* **Styling:** CSS3 (Grid, Flexbox, Custom Properties)
* **Architecture:** MVC (Model-View-Controller)

## 💻 Getting Started

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/kizuna-rail.git](https://github.com/yourusername/kizuna-rail.git)
    cd kizuna-rail
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **View the application**
    Open your browser to `http://localhost:3000`
