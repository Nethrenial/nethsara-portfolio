# Technology Icons Guide

## Best Free Sources for Technology Logos

### 1. Developer Icons (RECOMMENDED)
- **Website**: https://developer-icons.vercel.app
- **NPM**: `npm install developer-icons`
- **Usage in React/Vue**: Import as components
- **Direct Download**: SVG files available
- **Features**: Consistent design, light/dark variants, optimized

### 2. Simple Icons
- **Website**: https://simpleicons.org
- **NPM**: `npm install simple-icons`
- **Coverage**: 2,900+ brand icons
- **Format**: SVG (single color, customizable)

### 3. Vector Logo Zone
- **Website**: https://www.vectorlogo.zone
- **Coverage**: 3,000+ logos
- **Format**: High-quality SVG
- **Best for**: README files, documentation

### 4. IconScout Programming Pack
- **URL**: https://iconscout.com/free-icon-pack/programming-language-logos
- **Coverage**: 90 programming language icons
- **Formats**: SVG, PNG
- **License**: Free digital license

## Skills Coverage

### Programming Languages ✅
- JavaScript, TypeScript, Python, Java, PHP, C/C++, Dart, HTML/CSS

### Frontend Frameworks ✅
- Vue.js, Nuxt.js, React, Next.js, Angular, SCSS

### Backend Frameworks ✅
- Node.js, Express.js, NestJS, Spring Boot, Laravel

### Databases ✅
- PostgreSQL, MongoDB, MySQL, Firestore, Prisma, Mongoose, Hibernate

### Cloud & Services ✅
- AWS, Firebase, VPS Deployment

### DevOps & Tools ✅
- Git & GitHub, VS Code, JetBrains IDEs, Postman, Draw.io

### Mobile & Other ✅
- Flutter, RxJS, GraphQL, LangChain, Gemini, Bun Runtime, etc.

## Implementation Options

### Option 1: Download SVGs directly
1. Visit recommended sources above
2. Search for your technology
3. Download SVG files
4. Place in `public/images/skills/` folder

### Option 2: Use Developer Icons (React/Vue)
```bash
npm install developer-icons
```

```vue
<template>
  <div>
    <JavaScriptIcon size="48" />
    <VueIcon size="48" />
    <NodeIcon size="48" />
  </div>
</template>

<script setup>
import { JavaScriptIcon, VueIcon, NodeIcon } from 'developer-icons'
</script>
```

### Option 3: Use Simple Icons API
```javascript
// Fetch icon data
const response = await fetch('https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg')
const svgContent = await response.text()
```

## Recommended File Structure
```
public/images/
├── skills/
│   ├── languages/
│   │   ├── javascript.svg
│   │   ├── typescript.svg
│   │   ├── python.svg
│   │   └── ...
│   ├── frameworks/
│   │   ├── vue.svg
│   │   ├── react.svg
│   │   ├── nuxt.svg
│   │   └── ...
│   ├── databases/
│   │   ├── postgresql.svg
│   │   ├── mongodb.svg
│   │   └── ...
│   ├── cloud/
│   │   ├── aws.svg
│   │   ├── firebase.svg
│   │   └── ...
│   └── tools/
│       ├── git.svg
│       ├── vscode.svg
│       └── ...
```

## License Notes
- Most sources provide free usage for personal/commercial projects
- Always check specific license terms
- Attribution may be required for some sources
- Developer Icons and Simple Icons are fully open source 