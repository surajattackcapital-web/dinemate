# DineMate.ai - Next.js Website

AI-Powered Hospitality Solutions for Modern Restaurants

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
DineMate/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Home page
│   ├── layout.tsx             # Root layout with navbar & footer
│   ├── globals.css            # Global styles & design system
│   ├── solutions/             # AI Solutions pages
│   │   ├── ai-waitlist-assistant/
│   │   ├── ai-ordering-assistant/
│   │   ├── ai-reservation-assistant/
│   │   └── ai-feedback-assistant/
│   ├── industries/            # Industry-specific pages
│   │   ├── restaurants/
│   │   ├── cafes/
│   │   ├── hotels/
│   │   └── bars/
│   ├── blog/                  # Blog listing
│   ├── case-studies/          # Success stories
│   ├── faqs/                  # FAQ page with accordion
│   ├── about/                 # Company info
│   ├── careers/               # Job openings
│   └── contact/               # Contact form
├── components/                # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
└── public/                    # Static assets
```

## 🎨 Design Theme

Based on the provided design specifications:

- **Color Scheme:** Black background with purple gradient accents (#8009FF → #F200FF)
- **Typography:** 
  - Headings: Rethink Sans
  - Body: Poppins
- **Effects:**
  - Glassmorphism cards with backdrop blur
  - Animated gradient text
  - Floating background drops
  - Hover glow effects

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### Home (`/`)
- Hero section with animated gradient heading
- 4 AI Solutions showcase
- 4 Industries served
- Benefits section
- CTA sections

### Solutions (`/solutions/*`)
- AI Waitlist Assistant - Reduce no-shows, manage guests
- AI Ordering Assistant - Voice/chat ordering
- AI Reservation Assistant - 24/7 booking
- AI Feedback Assistant - Automated surveys

### Industries (`/industries/*`)
- Restaurants - Full-service dining solutions
- Cafes - Mobile ordering, rush hour management
- Hotels - Room service automation
- Bars - VIP reservations, event management

### Resources
- **Blog** - Latest insights and trends
- **Case Studies** - Success stories with metrics
- **FAQs** - Common questions with accordion UI

### Company
- **About** - Mission, vision, values, team
- **Careers** - Open positions with timeline
- **Contact** - Contact form with business info

## 🎯 Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO-optimized with meta tags
- ✅ Interactive components (dropdowns, accordions, forms)
- ✅ Smooth animations and transitions
- ✅ Glassmorphism design system
- ✅ Purple gradient brand identity
- ✅ Fast-loading with Next.js optimization

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables

No environment variables required for basic deployment.

## 📝 Customization

### Update Colors

Edit `app/globals.css` CSS variables:

```css
:root {
  --color-accent-start: #8009FF;
  --color-accent-end: #F200FF;
  /* ... */
}
```

### Add New Pages

Create new files in the `app/` directory following Next.js App Router conventions.

### Modify Components

Edit `components/Navbar.tsx` and `components/Footer.tsx` for global navigation changes.

## 📧 Contact

For questions or support, contact: hello@dinemate.ai

---

Built with ❤️ using Next.js and Tailwind CSS

