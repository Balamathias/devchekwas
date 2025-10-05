# DEVCHEKWAS GLOBAL LIMITED - Corporate Website

A modern, professional corporate website for DEVCHEKWAS GLOBAL LIMITED, a Nigerian multi-sector service provider. Built with Next.js 15, Tailwind CSS v4, and Framer Motion for smooth animations.

## 🏢 About DEVCHEKWAS GLOBAL LIMITED

- **RC Number**: 6910062
- **Tax ID**: 31330201-0001
- **Registration**: March 20, 2023
- **Status**: Active, CAMA 2020 Compliant
- **Location**: Abuja, FCT, Nigeria

## ✨ Features

- 🎨 Modern UI with Tailwind CSS v4
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🖼️ Image gallery with lightbox and lazy loading
- 📧 Contact form with embedded Google Maps
- 🚀 Optimized for performance and SEO
- 🎭 Professional gradient effects and transitions
- 🌐 9 comprehensive service categories

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- pnpm installed globally

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

### Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd devchekwas
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Run the development server**

```bash
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
devchekwas/
├── public/
│   ├── gallery/          # Project images (24 photos)
│   └── logo.png          # Company logo
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles and Tailwind config
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx    # Navigation bar
│       │   └── Footer.tsx    # Footer component
│       ├── sections/
│       │   ├── Hero.tsx      # Hero section with background
│       │   ├── About.tsx     # About company section
│       │   ├── Services.tsx  # 9 service categories
│       │   ├── Gallery.tsx   # Image gallery with lightbox
│       │   └── Contact.tsx   # Contact form and info
│       └── ui/
│           ├── Button.tsx    # Reusable button component
│           ├── Container.tsx # Container wrapper
│           └── Section.tsx   # Section wrapper
├── package.json
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## 🎨 Customization

### Colors

Custom brand colors are defined in `src/app/globals.css`:

```css
@theme {
  --color-primary: #2C5F2D;        /* Deep Green */
  --color-primary-light: #3a7d3c;  /* Light Green */
  --color-primary-dark: #1f4520;   /* Dark Green */
  --color-secondary: #3A3B7C;      /* Purple/Navy */
  --color-accent: #C41E3A;         /* Red */
  --color-yellow: #FFD700;         /* Gold */
}
```

### Content

- **Company Info**: Update in `src/components/sections/About.tsx`
- **Services**: Modify in `src/components/sections/Services.tsx`
- **Contact Details**: Edit in `src/components/sections/Contact.tsx`
- **Hero Background**: Replace `/public/gallery/picture-22.jpeg`

## 📜 Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🌐 Sections

1. **Hero** - Eye-catching introduction with team background photo
2. **About** - Company information, values, and registration details
3. **Services** - 9 comprehensive service categories:
   - General Contracting & Procurement
   - Office Equipment & Furniture Supply
   - Furniture Manufacturing & Interior Design
   - IT Services & Training
   - Printing & Publishing
   - Business Consultancy
   - Event Management
   - Agribusiness
   - Oil & Gas Services
4. **Gallery** - 24 project images with lightbox navigation
5. **Contact** - Contact form, information cards, and map

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Build Locally

```bash
pnpm build
pnpm start
```

## 🔧 Environment Variables

No environment variables required for basic deployment. For production features like contact form submission, you may want to add:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📱 Responsive Design

- **Mobile**: Optimized layout with minimal spacing
- **Tablet**: Adjusted grid layouts
- **Desktop**: Full multi-column layouts with animations

## 🎭 Key Features

- **Smooth Animations**: Framer Motion for all interactions
- **Lazy Loading**: Images load on-demand for performance
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation
- **Professional UI**: Modern gradients and hover effects

## 📄 License

© 2023 DEVCHEKWAS GLOBAL LIMITED. All rights reserved.

## 📞 Contact

- **Phone**: +234 810 555 5200, +234 906 491 2684
- **Email**: devchekwasgloballtd@gmail.com
- **Address**: Suite 1, Farida Plaza, Gudu District, FCT, Abuja, Nigeria

---

Built with ❤️ using Next.js 15 and Tailwind CSS v4
