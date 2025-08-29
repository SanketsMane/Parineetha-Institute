# Parineetha Institute - Deployment Guide

## Project Overview
Professional coding institute website with Parineetha branding, featuring:
- Orange theme (#fca311) with white
- Professional splash screen
- Responsive design with modern animations
- SEO optimized with proper metadata, sitemap, and robots.txt

## Technical Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically with these settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure the redirects if needed

### Option 3: Self-hosted
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Use a process manager like PM2 for production

## Pre-deployment Checklist
- ✅ All 3D dependencies removed
- ✅ Unused code and imports cleaned
- ✅ SEO optimized (robots.txt, sitemap.ts)
- ✅ Proper metadata configured
- ✅ Professional splash screen implemented
- ✅ Orange theme consistently applied
- ✅ Parineetha logo properly integrated
- ✅ Build passes without errors

## Environment Variables
No environment variables required for basic deployment.

## Performance
- Static generation for optimal performance
- Image optimization with Next.js Image component
- Code splitting automatically handled by Next.js

## SEO Features
- Sitemap automatically generated at /sitemap.xml
- Robots.txt configured for search engines
- Open Graph and Twitter card metadata
- Proper structured metadata for all pages

## Custom Domain Setup
Update the metadata base URL in `src/app/layout.tsx` when using a custom domain:
```javascript
metadataBase: new URL('https://your-domain.com')
```

## Support
For deployment issues, refer to:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
