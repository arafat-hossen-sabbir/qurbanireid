# QurbaniHat – Livestock Booking Platform

QurbaniHat is a modern livestock marketplace where users can explore animals for Qurbani such as cows and goats, view detailed information, and place a booking after authentication.

## 🔗 Live URL
[https://qurbanihat.vercel.app](https://your-live-url.vercel.app)

## 🔗 GitHub Repository
[https://github.com/arafat-hossen-sabbir/qurbanireid](https://github.com/your-username/qurbanihat)

## ✨ Key Features

- Browse and sort livestock animals by price
- Detailed animal view with full specifications
- Booking form for authenticated users
- Firebase Authentication (Email/Password + Google Login)
- User Registration with name, email, photo URL
- My Profile page with update information feature
- Fully responsive design (mobile, tablet, desktop)
- Toast notifications for user feedback
- Loading states while fetching data
- Custom 404 Not Found page
- Secure Firebase configuration using environment variables

## 🛠️ Technologies & NPM Packages Used

- **Next.js** – React framework (App Router)
- **Tailwind CSS** – Utility-first CSS framework
- **Firebase** – Authentication
- **react-hot-toast** – Toast notifications
- **animate.css** – Animation effects
- **react-icons** – Icon library

## 📦 Getting Started Locally

\`\`\`bash
git clone https://github.com/arafat-hossen-sabbir/qurbanihat.git
cd qurbanihat
npm install
npm run dev
\`\`\`

Create a `.env.local` file with your Firebase credentials:

\`\`\`env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
\`\`\`

## 📁 Routes

**Public:** `/`, `/animals`, `/login`, `/register`
**Private:** `/details-page/:id`, `/my-profile`, `/update-profile`