# Deployment Guide

This Next.js 15 app is optimized for **Vercel**, the creators of Next.js.

## Fast Track: Deploy to Vercel

1. **Push your code to GitHub** (you've already done this).
2. **Go to [Vercel.com](https://vercel.com/new)** and log in with GitHub.
3. **Import your repository**: Select `Codecyclon`.
4. **Configure Project**:
   - **Framework Preset**: Next.js (Auto-detected)
   - **Build Command**: `next build` (Default)
   - **Install Command**: `npm install` (Default)
   - *Note: If the build fails due to dependencies, go to Settings > Build & Development and change the Install Command to:* `npm install --legacy-peer-deps`
5. **Click "Deploy"**.

Your site will be live on a `*.vercel.app` domain instantly.

## Environment Variables
If you use environment variables (e.g. for email services), add them in Vercel under **Settings > Environment Variables**.

## Custom Domain
Once deployed, go to **Settings > Domains** to add your own domain (e.g., `codecyclon.com`). Vercel handles SSL automatically.

