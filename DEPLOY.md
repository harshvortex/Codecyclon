# Deployment Guide for Codecyclon

This project is built with **Next.js 15**, **React 19**, and **Tailwind CSS**. It is optimized for Vercel but can be deployed anywhere that supports Node.js or Docker.

## 🔒 Security Best Practices

### 1. Environment Variables
Ensure you do not commit sensitive keys to the repo. Use `.env.local` for local development and set environment variables in your deployment platform (Vercel/Netlify/etc.).

**Required Variables:**
- `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://codecyclon.com)
- `EMAIL_API_KEY`: If you integrate a real email service (currently using mailto).

### 2. Security Headers
We have configured `next.config.mjs` to include robust security headers:
- `Strict-Transport-Security`: Enforces HTTPS.
- `X-Frame-Options`: Prevents clickjacking.
- `X-Content-Type-Options`: Prevents MIME type sniffing.
- `Referrer-Policy`: Controls referrer information.
- `Permissions-Policy`: Restricts browser features like camera/mic.

### 3. Dependencies
Regularly run `npm audit` to check for vulnerabilities. We have already updated to stable versions to minimize risks.

---

## 🚀 How to Deploy on Vercel (Recommended)

1.  **Push to GitHub**: Ensure your latest code is pushed to your repository.
2.  **Import to Vercel**: 
    - Go to https://vercel.com/new
    - Select your repository.
3.  **Configure Project**:
    - **Framework**: Next.js (should detect automatically)
    - **Build Command**: `next build`
    - **Install Command**: `npm install`
4.  **Deploy**: Click "Deploy". Vercel will handle the build and edge distribution.

## 🐳 Docker Deployment (Alternative)

If you prefer self-hosting or using a container service (like Railway/Render):

1.  Build the image:
    ```bash
    docker build -t codecyclon .
    ```
2.  Run the container:
    ```bash
    docker run -p 3000:3000 codecyclon
    ```

## ✅ Post-Deployment Checklist

- [ ] Verify **HTTPS** is active.
- [ ] Check all forms (Contact, Lead Magnet) work correctly.
- [ ] Test **Social Links** in the sidebar.
- [ ] Verify **Responsive Design** on mobile.
- [ ] Run a **Lighthouse Audit** in Chrome DevTools to ensure performance/SEO scores are high.

## 📧 Contact & Support
For any issues, reach out to `codecyclon@gmail.com`.
