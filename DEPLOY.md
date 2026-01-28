# Deployment Guide

This Next.js 15 app is set up for Vercel deployment, but you can host it anywhere that supports Node.js.

## Environment Setup

Don't commit secrets to the repo. Use `.env.local` for development and configure environment variables in your hosting platform.

**Variables you might need:**
- `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., https://codecyclon.com)
- Email service keys if you add a proper email backend (currently using mailto)

## Security

The `next.config.mjs` file includes security headers:
- Forces HTTPS in production
- Prevents clickjacking
- Blocks MIME type sniffing
- Controls referrer info
- Restricts browser features

Run `npm audit` occasionally to catch dependency vulnerabilities.

## Deploying to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Vercel should auto-detect Next.js settings:
   - Build command: `next build`
   - Install command: `npm install`
5. Click Deploy

That's it. Vercel handles the rest.

## Docker Deployment (Alternative)

If you prefer containers or want to self-host:

```bash
# Build the image
docker build -t codecyclon .

# Run it
docker run -p 3000:3000 codecyclon
```

You can deploy this to Railway, Render, or any container service.

## Deploying to Render (Automatic / Blueprint)

1. **Push your code to GitHub**.
2. **Log in to [Render](https://render.com)**.
3. Click **"New +"** -> **"Blueprint"**.
4. Connect your `Codecyclon` repository.
5. Render will detect the `render.yaml` file and automatically configure everything (Node version, build commands, etc.).
6. Click **Apply**.

## Deploying to Render (Manual Web Service)
(Use this if you don't want to use the Blueprint)

1. **Push your code to GitHub**.
2. **Log in to [Render](https://render.com)** and click "New +" -> "Web Service".
3. **Connect your GitHub account** and select the `Codecyclon` repository.
4. **Configure the service**:
   - **Name**: `codecyclon` (or your preferred name)
   - **Region**: Choose the one closest to your users.
   - **Branch**: `main`
   - **Root Directory**: `.` (leave blank)
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. **Select Plan**: "Free" (or as needed).
6. **Click "Create Web Service"**.

### Important for Manual Setup:
- Go to the **Settings** tab of your new service.
- Scroll down to **Environment Variables**.
- Add `NODE_VERSION` with value `20.14.2` (or `20`) to match your local setup.

## Post-Deployment Checklist

- [ ] Verify HTTPS is working
- [ ] Test the contact form (both email and WhatsApp options)
- [ ] Check social links in the sidebar
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit in Chrome DevTools (aim for 90+ on all metrics)
- [ ] Make sure dark mode toggle works

## Need Help?

Email: codecyclon@gmail.com  
WhatsApp: +91 9520535135

