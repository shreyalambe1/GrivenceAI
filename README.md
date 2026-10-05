# GrievanceAI

GrievanceAI is an AI-powered disaster compensation assistance system designed to simplify access to government disaster compensation information in Maharashtra. The platform helps citizens understand available relief schemes, eligibility criteria, required documents, and official application procedures in simple, accessible language.

## Tech Stack

* **Framework:** React.js (v19)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (v4)
* **Icons:** Lucide React

## Local Development

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone <REPOSITORY_URL>
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Copy the example environment file and configure your variables:
   ```bash
   cp .env.example .env
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal).

## Environment Variables

The application uses Vite environment variables (prefixed with `VITE_`):

| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_WHATSAPP_NUMBER` | GrievanceAI WhatsApp Business phone number (digits only with country code, no `+` or spaces) | `919XXXXXXXXX` |

> **Note:** Never commit real credentials or private keys to the repository. The `.env` file is excluded in `.gitignore`.

## Build

To create an optimized production build:

```bash
npm run build
```

The production assets will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The frontend is configured for deployment on **Vercel**:

1. Push your code to a **GitHub repository**.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Set the **Framework Preset** to `Vite`.
5. Under **Environment Variables**, add:
   * `VITE_WHATSAPP_NUMBER` = `YOUR_WHATSAPP_BUSINESS_NUMBER`
6. Click **Deploy**.
