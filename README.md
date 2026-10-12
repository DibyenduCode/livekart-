# LiveKart — TikTok-Style Live Shopping Prototype

A modern, mobile-first Live Shopping discovery web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, strictly modeled after TikTok's continuous vertical video feed and modern live commerce platforms.

---

## 📱 Core Concept & Wireframe Implementation

- **Immediate Live Feed Homepage**: Opening the app directly launches an immersive continuous live shopping feed.
- **Top-Right Shopping Cart** *(Hand-drawn sketch match)*: Floating circular cart button with real-time badge count. Opens the Cart Drawer while preserving background video playback.
- **Right-Side Vertical Action Bar** *(Hand-drawn sketch match)*:
  1. **Like**: Heart animation with real-time like count toggle and floating heart bursts.
  2. **Comment**: Slide-up live chat panel with pinned host messages, quick emojis, and live commentary.
  3. **Product / Shop Bag**: Showcases live products curated by the active seller.
- **Lower-Left Seller Information**: Host avatar with red LIVE ring, name, store handle, verified badge, Follow toggle, and live promotional title.
- **Bottom Product Tray**: Compact horizontal tray displaying discounted items, pinned deal tags, and quick `+ Add` actions.
- **Product Details Sheet**: Interactive modal with sizing (XS, S, M, L, XL), color variants, stock indicators, and instant `Buy Now`.
- **Bottom Navigation**: 4 clean tabs (`Live Feed`, `Discover`, `Orders`, `Profile`) without any content uploading or post-creation buttons.

---

## 🛠 Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Video Player**: YouTube IFrame Embed Player API with autoplay, mute state, infinite looping, and resilient fallback demo mode
- **State Management**: React Hooks + LocalStorage persistence for Cart & Orders

---

## 🚀 Getting Started

### 1. Install dependencies:
```bash
npm install
```

### 2. Start the development server:
```bash
npm run dev
```

The application runs locally at `http://localhost:8000/`.

---

## 🛍 Demo Sellers & Catalog

1. **Priya Sharma** (`Zara Luxe Studio`) — Festive Chikankari & Sharara Sets Under ₹2,500
2. **Vikram Malhotra** (`UrbanGentle Menswear`) — French Linen Shirts & Pleated Trousers
3. **Ananya Verma** (`GlowEssence Beauty`) — Peptide Glaze Lip Duo & Sunscreens
4. **Rohan Patel** (`Kicks & Drips Sneaker Lab`) — Italian Leather High-Tops & Retro Court Sneakers
5. **Meera Singhania** (`Royal Heirlooms Jewels`) — 18K Gold Plated Polki Chokers & Tennis Bracelets
6. **Kabir Sen** (`HyperTech Lifestyle`) — 45dB ANC Wireless Earbuds & AMOLED Smartwatches
