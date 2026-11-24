# Trikaaya Sports Website

Frontend-only sports academy website built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

Deploy the project to Vercel. The included `vercel.json` supports the Vite SPA fallback.

## Homepage video

Your supplied video is included at `public/hero-video.mp4` and is used as the homepage hero background. It is configured to autoplay, loop, play inline, and remain muted for browser autoplay compatibility.

Video details: MP4 / H.264, 1920 × 1080, 30 FPS, approximately 13.7 seconds.

To replace it later, keep the filename `hero-video.mp4` and overwrite the file in `public/`.

## Registration

This is a frontend-only project. The registration form opens WhatsApp with the submitted enquiry; it does not save registrations to a database.
