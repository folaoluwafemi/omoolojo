# Vercel Deployment & Favicon Guide

## 1. Fixed Broken Image
The "Life Prayer Protocol" image in the Creative section was pointing to a broken Unsplash link. I have updated it to use your local `ministry_image.png` asset.

## 2. Favicon Setup
I have initialized your favicon by copying `public/logo.png` to `public/favicon.ico`. 
- Next.js automatically detects `favicon.ico` in the `public` folder.
- If you'd like a higher quality experience, I recommend creating a `favicon-32x32.png` or an SVG version later.

## 3. Deploying to Vercel (First-Time Guide)

Since this is your first time, here is the easiest step-by-step to get your site live:

### Step A: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new).
2. Follow the instructions to push your code:
   ```bash
   git add .
   git commit -m "Initialize Omoolojo website"
   git remote add origin https://github.com/YOUR_USERNAME/omoolojo.git
   git push -u origin main
   ```

### Step B: Connect to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import your `omoolojo` repository.
4. Keep the default settings (Framework Preset: Next.js).
5. Click **"Deploy"**.

### Step C: Automatic Updates
Every time you push a change to your GitHub main branch, Vercel will automatically rebuild and redeploy your site.

---

**Next Steps:**
- Do you want me to help you set up a custom `icon.svg` for better scaling on high-res screens?
- Would you like me to add a `robots.txt` or `sitemap` for SEO before you deploy?
