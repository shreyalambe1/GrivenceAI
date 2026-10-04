# GrievanceAI Frontend - Project Documentation

This document outlines the current state of the GrievanceAI frontend development, the technologies used, the rationale behind these choices, and detailed installation and version specifications.

---

## 1. What Has Been Built

We have successfully developed the **Frontend Landing Page** for **GrievanceAI – AI-Powered Disaster Compensation Assistance System**. 

The current application is a single-page React frontend consisting of the following sections:
- **Navigation Bar**: Includes branding and links to page sections, plus a hamburger menu for mobile devices.
- **Hero Section**: Introduces the core value proposition ("Get the Right Disaster Compensation Information — Simply") alongside primary and secondary CTA buttons.
- **Trust & Information Banner**: Emphasizes that the guidance relies on authorized government documents without incorrectly claiming to be an official government service.
- **Services Section**: Highlights six key features (Identify Loss, Check Eligibility, Know Compensation, Document Checklist, Application Guidance, Marathi & English) using a clean card-based layout with descriptive icons.
- **How It Works**: Visualizes the 4-step user journey from describing a problem to receiving clear, actionable guidance.
- **About & Disclaimer**: Explains the system's AI/RAG capabilities and clearly outlines the limitations of the assistance provided.
- **Footer**: Contains copyright info, quick links, and identifies the system as an academic project.

The landing page currently has no WhatsApp links. Add a verified WhatsApp Business number and chatbot endpoint before enabling WhatsApp contact options.

---

## 2. Technologies Used & Rationale

We used the following stack for the frontend layer:

### **React.js**
- **What it does:** The core library used to build the user interface using a component-based architecture.
- **Why we chose it:** React allows us to break down the landing page into reusable components (like `Navbar.jsx`, `HeroSection.jsx`). It is highly scalable, standard in the industry, and makes it easy to maintain and expand the project later if we need to add complex frontend features (like admin dashboards).

### **Vite**
- **What it does:** The build tool and development server used to scaffold and serve the React application.
- **Why we chose it (instead of Create React App):** Vite is significantly faster than older tools like Webpack or Create React App (CRA). It offers near-instant server starts and ultra-fast Hot Module Replacement (HMR), greatly speeding up the development process. 

### **Tailwind CSS (v4)**
- **What it does:** A utility-first CSS framework used for styling the components directly within the JavaScript files.
- **Why we chose it (instead of raw CSS or Bootstrap):** Tailwind allows for rapid, highly-customizable UI development without writing custom CSS classes or dealing with separate `.css` files for every component. It makes building mobile-responsive layouts (`sm:`, `md:`, `lg:` classes) exceptionally easy and keeps the design consistent.

### **Lucide React**
- **What it does:** An icon library providing SVG icons (like the WhatsApp chat bubble, checkmarks, etc.).
- **Why we chose it:** It is lightweight, visually clean, and integrates perfectly into a React/Tailwind environment, avoiding the need to manually download or import heavy image files.

---

## 3. How the Code Works

The application follows a clean, component-based hierarchy:

1. **`index.html` & `main.jsx`**: The entry points of the application. They attach the React application to the DOM.
2. **`index.css`**: Configures Tailwind CSS (`@import "tailwindcss";`) and establishes global styling constraints.
3. **`App.jsx`**: Acts as the main container. It imports all individual layout components (Navbar, Hero, Services, etc.) and stacks them vertically to construct the landing page.
4. **`components/` Directory**: Contains isolated, functional React components. Each file is responsible only for its specific visual section. This modularity ensures that if you want to edit the "How It Works" section, you only touch `HowItWorksSection.jsx`.

---

## 4. Installations & Versions

The project environment was initialized using Node.js and `npm`. The following core dependencies were installed. You can verify these in your `package.json` file.

### **Core Dependencies**
| Package | Version Installed | Description |
| :--- | :--- | :--- |
| `react` | `^19.2.8` | Core React library for UI rendering |
| `react-dom` | `^19.2.8` | React package for DOM manipulation |

### **Development Dependencies**
| Package | Version Installed | Description |
| :--- | :--- | :--- |
| `vite` | `^8.3.0` | Development server and build tool |
| `@vitejs/plugin-react` | `^6.1.1` | Vite plugin for React integration |
| `tailwindcss` | `^4.3.3` | Utility-first CSS framework (latest v4 engine) |
| `@tailwindcss/vite` | `^4.3.3` | Official Vite plugin to integrate Tailwind v4 |
| `lucide-react` | `^1.48.0` | Icon package for React components |

*Note: Minor supplementary packages like `autoprefixer`, `postcss`, and type definitions (`@types/react`) were also installed automatically to support the build ecosystem.*

---

## 5. Next Steps to Run Locally

If your background server is stopped, you can start the frontend at any time by running:

1. Open your terminal.
2. Navigate to the project directory: `cd d:\mega\Grivence\frontend`
3. Run the development server: `npm run dev`
4. Open the provided local URL (usually `http://localhost:5173/`) in your browser.
