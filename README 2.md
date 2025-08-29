# CodeInstitute - Coding & Full-Stack Development Institute

A professional and modern website for a Coding & Full-Stack Development Institute built with Next.js, featuring dark/light mode, 3D animations, and a responsive design.

![CodeInstitute](https://img.shields.io/badge/CodeInstitute-Website-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)

## 🌟 Features

- **📱 Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **🌓 Dark/Light Mode**: Toggle between themes with smooth transitions
- **✨ 3D Animations**: Interactive 3D elements using React Three Fiber
- **🎨 Modern UI**: Clean, professional design with Framer Motion animations
- **⚡ Fast Performance**: Built with Next.js App Router for optimal performance
- **🔍 SEO Optimized**: Comprehensive metadata and SEO best practices
- **📋 Contact Form**: Functional contact form with validation
- **🎯 Course Filtering**: Interactive course catalog with category filters

## 🏗️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Drei
- **Icons**: Lucide React
- **Theme**: next-themes
- **Font**: Inter (Google Fonts)

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── courses/           # Courses page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── 3d/               # 3D components
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation
│   ├── testimonials.tsx  # Testimonials section
│   ├── theme-provider.tsx # Theme context
│   └── theme-toggle.tsx  # Theme toggle button
└── lib/
    └── utils.ts          # Utility functions
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coding-institute-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📄 Pages

### 🏠 Home Page
- Hero section with 3D animated laptop
- Call-to-action buttons
- Statistics showcase
- Student testimonials

### ℹ️ About Page
- Institute mission and vision
- Interactive timeline
- Instructor profiles with hover effects
- Achievement statistics

### 📚 Courses Page
- Course catalog with filtering
- 3D hover effects on course cards
- Detailed course information
- Enrollment call-to-action

### 📞 Contact Page
- Contact form with validation
- Institute contact information
- Map placeholder
- Office hours and location

## 🎨 Design Features

### Dark/Light Mode
- System preference detection
- Smooth theme transitions
- Consistent design across themes
- Theme toggle in navigation

### 3D Elements
- Animated laptop with floating effect
- Code particles background
- Interactive course cards
- Smooth camera movements

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects and micro-interactions
- Loading states and transitions

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for tablets
- **Desktop Enhanced**: Full-featured desktop experience
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.ts` with:
- Extended color palette
- Custom animations
- Responsive utilities
- Dark mode support

### ESLint
Configured for Next.js with TypeScript support and custom rules.

### TypeScript
Strict TypeScript configuration for better development experience.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Other Platforms
Build the project and deploy the generated files:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for 3D graphics
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

For support, email info@codeinstitute.com or join our Discord community.

---

**Built with ❤️ by the CodeInstitute Team**
