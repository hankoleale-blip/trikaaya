# Trikaaya Sports Website

Frontend-only React + Vite website, ready for Vercel.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`

## Build
`npm run build`

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

## Important
- This project has no backend, database, or server-side API.
- The registration form validates in the browser and opens WhatsApp with a prefilled message. It does not save registrations to a database.
- Monthly fee is set to ₹1,500 across all programs.
- WhatsApp, Instagram, and Maps links were taken from the details supplied in chat.
- Contact phone, Instagram and location from the supplied PDF were intentionally not used.
- Program descriptions, coach profiles, schedule and academy story are based on the supplied PDF. Verify operational details before publishing.


## Homepage hero video
Place your supplied landscape MP4 video at `public/hero-video.mp4`. The homepage will autoplay it muted, loop it, and play inline on mobile. Keep the important action near the centre so the video crops well on narrow screens. If the file is not present, the existing illustrated hero remains visible.

Recommended video export: 1920 × 1080 px, MP4 (H.264), 30 fps, 10–20 seconds, ideally under 15 MB.
