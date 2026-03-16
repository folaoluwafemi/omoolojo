# Omoolojo Personal Website

This is the repository for my personal website.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture & Design

This site is built with:
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS V4

### Static vs Server-Side Rendering (SSR)
For a personal website, **Static Site Generation (SSG)** is almost always the superior choice. 

With Static Site Generation, Next.js pre-builds all your HTML files at build time. When a user visits your website, these static files are served instantly from a CDN. This means:
* Faster load speeds (which is great for user experience and SEO).
* Lower hosting costs (static files are very cheap or free to host on platforms like Vercel, Netlify, or GitHub Pages).
* Better security (no running server backend to exploit).

**Server-Side Rendering (SSR)** is when the HTML is generated on the server *on every single request*. This is helpful when data changes constantly (like a social media feed or a shopping cart) or requires user access control per request before rendering. But for a personal portfolio where the content mainly stays the same until you update it, SSR adds unnecessary latency and requires a server infrastructure (like Node.js) to run continuously.

In this project, we are using **Next.js's App Router**. By default, it will statically render all components unless you explicitly use dynamic functions (like `cookies()` or `headers()`) or fetch data with `cache: 'no-store'`. So the framework naturally guides us toward Static Generation! We can confidently stick to Next.js defaults.
