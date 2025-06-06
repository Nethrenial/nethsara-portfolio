# Modern Software Engineer Portfolio

A modern, responsive portfolio website built with **Nuxt 3**, **Tailwind CSS v4**, and **TypeScript**. Features a complete blog system, smooth animations, and modern dark design.

## 🌟 Features

- **Modern Design**: Clean, dark theme with gradient accents and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Blog System**: Complete blog with search, filtering, and content management powered by Nuxt Content
- **Smooth Animations**: GSAP-powered animations and Lenis smooth scrolling
- **SEO Optimized**: Built-in SEO with meta tags, structured data, and social sharing
- **Fast Performance**: Optimized images, code splitting, and modern web practices
- **Contact Form**: Functional contact form with validation
- **TypeScript**: Full TypeScript support for better development experience

## 🚀 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Content**: [Nuxt Content](https://content.nuxtjs.org/)
- **Icons**: [Nuxt Icon](https://github.com/nuxt-modules/icon)
- **Images**: [Nuxt Image](https://image.nuxtjs.org/)
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Utilities**: [VueUse](https://vueuse.org/)
- **SEO**: [Nuxt SEO](https://nuxtseo.com/)

## 📁 Project Structure

```
├── app/
│   ├── assets/css/          # Global styles and Tailwind config
│   ├── components/          # Vue components
│   ├── layouts/            # Application layouts
│   └── pages/              # Application pages
├── content/
│   └── blog/               # Blog posts in Markdown
├── public/                 # Static assets
└── server/                 # Server-side code
```

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
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
   Navigate to `http://localhost:3000`

## 🎨 Customization

### 1. Personal Information
Update your personal information in:
- `app/components/HeroSection.vue` - Name and title
- `app/components/TheNavigation.vue` - Logo/brand
- `app/components/TheFooter.vue` - Contact information
- `nuxt.config.ts` - Site metadata

### 2. Colors and Theming
Customize the color scheme in `app/assets/css/main.css`:
```css
:root {
  --color-primary: #00f5ff;
  --color-primary-dark: #00d4e6;
  --color-secondary: #1a1a2e;
  /* ... other variables */
}
```

### 3. Content
- **About Page**: Edit `app/pages/about.vue`
- **Experience**: Update data in `app/components/ExperiencePreview.vue`
- **Projects**: Update project data in `app/components/ProjectsPreview.vue`
- **Skills**: Modify skills in `app/components/SkillsSection.vue`
- **Blog Posts**: Add markdown files to `content/blog/`

### 4. Images
Replace placeholder images in the `public/` directory:
- `profile-image.jpg` - Your profile photo
- `about-image.jpg` - About page image
- `og-image.jpg` - Social sharing image
- `blog/*.jpg` - Blog post featured images

## 📝 Adding Blog Posts

Create new blog posts as Markdown files in the `content/blog/` directory:

```markdown
---
title: 'Your Post Title'
description: 'Post description for SEO'
publishedAt: '2024-01-15'
tags: ['JavaScript', 'Vue.js', 'Web Development']
image: '/blog/your-image.jpg'
author: 'Your Name'
featured: false
---

# Your Post Title

Your content here...
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run generate`
2. Deploy the `.output/public` directory

### Other Platforms
The project can be deployed to any platform that supports Node.js or static hosting.

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

---

**Need help customizing this portfolio?** Feel free to reach out or check the documentation for each technology used.
