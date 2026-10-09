# Grace Fellowship — GIFT Ministries Web Application

A modern, production-grade frontend application built with **React**, **Vite**, and **Tailwind CSS v3**.

## 📁 Project Structure

```
c:\Personal
├── public/
│   ├── GIFT.png                 # Main GIFT Ministries Brand Logo
│   └── GIFT_Ministries.png      # High-res Brand Asset
├── src/
│   ├── assets/
│   │   └── logo.png             # Local logo reference
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive Sticky Navigation with GIFT Logo
│   │   ├── Hero.jsx             # Hero Section with CTA & Background Gradients
│   │   ├── WelcomeSection.jsx   # Welcome cards & vision points
│   │   ├── PastorProfile.jsx    # Sticky pastor profile, facts, vision, education
│   │   ├── SermonsSection.jsx   # Interactive Sermons grid
│   │   ├── SermonModal.jsx      # Video popup preview modal
│   │   ├── PrayerAndGive.jsx    # Interactive prayer request form & giving modal
│   │   ├── WhatsAppCTA.jsx      # WhatsApp contact banner & floating button
│   │   └── Footer.jsx           # Footer with links and branding
│   ├── data/
│   │   ├── pastorInfo.js        # Structured pastor details, facts, education
│   │   └── sermons.js           # Sermons data & video links
│   ├── App.jsx                  # Main application layout
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind CSS & custom design rules
├── index.html                   # HTML template & SEO meta tags
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS custom theme settings
└── vite.config.js               # Vite bundler configuration
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## 🎨 Key Features
- **Tailwind CSS Styling**: Customized palette (`navy`, `churchBlue`, `cream`, `gold`).
- **GIFT.png Branding**: Utilized as the core identity across header, hero card, pastor profile, and footer.
- **Interactive Components**:
  - Sermons modal preview
  - Interactive Prayer Request form with feedback toast
  - Giving modal placeholder for Razorpay / UPI integration
  - WhatsApp Floating Action button
