# **GammaVantage Frontend**

This repository contains the frontend code for the **GammaVantage** platform. Designed for Futures and Options (F&O) traders, GammaVantage provides an intuitive, AI-driven interface powered by real-time data insights.

---

## **Table of Contents**

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Changing the API URL](#changing-the-api-url)
- [Adding Blogs](#adding-blogs)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)

---

## **Overview**

This project delivers a seamless frontend for GammaVantage, ensuring responsiveness, scalability, and modern UI/UX for traders.

---

## **Tech Stack**

- **Framework**: [Vue 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)

---

## **Installation**

### **Prerequisites**

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### **Steps to Set Up Locally**

1. Clone the repository:

   ```bash
   git clone https://github.com/NormVg/GammaVintage
   cd GammaVintage
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## **Changing the API URL**

The application uses a proxy to connect to the backend API. Follow these steps to modify the API endpoint:

### **Development**

1. Open the `vite.config.js` file located in the project root.

2. Update the `proxy` configuration:

   ```javascript
   server: {
     proxy: {
       '/api': {
         target: 'https://current-api-url.com',
         changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, ''),
       },
     },
   },
   ```

3. Replace `https://current-api-url.com` with the new API URL.

4. Save the file and restart the server:
   ```bash
   npm run dev
   ```

### **Production**

For deployment (e.g., Vercel), update the `vercel.json` file:

1. Locate the `rewrites` section:

   ```json
   "rewrites": [
     {
       "source": "/api/:path*",
       "destination": "https://current-api-url.com/:path*"
     }
   ]
   ```

2. Replace `https://current-api-url.com` with the new API URL.

3. Redeploy the project:
   ```bash
   vercel --prod
   ```

---

## **Adding Blogs**

Adding blogs to GammaVantage is simple and straightforward.

1. **Edit the Blog Data**:  
   Navigate to the file `src/assets/data/Blogs.json`. Add a new entry in the following format:

   ```json
   {
     "id": "unique-id",
     "title": "Blog Title",
     "description": "A brief summary of the blog.",
     "file": "filename.md"
   }
   ```

   Example:

   ```json
   {
     "id": "article-3",
     "title": "NEW - Trading with Real-Time Data: Why It Matters",
     "description": "Learn the importance of real-time data in fast-moving markets and how it can enhance your trading strategy.",
     "file": "real-time-trading.md"
   }
   ```

2. **Add the Blog Content**:  
   Place the corresponding markdown file in the `public/markdown/` directory.

   Example:

   - If the `"file"` in `Blogs.json` is `real-time-trading.md`, ensure the file `real-time-trading.md` exists in `public/markdown/`.

3. **Verify**:  
   Save the changes, and restart the development server if needed:

   ```bash
   npm run dev
   ```

4. **Done**:  
   The blog will now appear on the platform dynamically.

---

## **Project Structure**

```plaintext
gamma-vantage-frontend/
├── public/          # Static assets (e.g., images, logos, markdown files)
│   ├── markdown/    # Blog markdown files
├── src/
│   ├── assets/      # Project-specific assets
│   │   ├── data/    # JSON data for blogs
│   ├── components/  # Vue components
│   ├── views/       # Page components
│   ├── router/      # App routing logic
│   ├── store/       # State management (Pinia/Vuex)
│   └── main.js      # App entry point
├── vite.config.js   # Vite configuration
└── package.json     # Project metadata and dependencies
```

---

## **Deployment**

The project is designed for deployment on Vercel. To deploy:

1. Install the Vercel CLI (if not already installed):

   ```bash
   npm install -g vercel
   ```

2. Deploy the project:

   ```bash
   vercel --prod
   ```

3. Ensure the `vercel.json` configuration is accurate, including any rewrites or redirects.

---

## **License**

This repository is **closed-source** and proprietary to **GammaVantage**. Redistribution or use without explicit permission is prohibited.

For inquiries, contact [support@gammavantage.com](mailto:support@gammavantage.com).

---

Let me know if you need any further customization or specific sections!
