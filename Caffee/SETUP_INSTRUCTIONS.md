# Coffee Shop Vite React - Setup Instructions

## 🚀 Quick Start

### 1. Create Project
\`\`\`bash
npm create vite@latest coffee-shop-vite -- --template react
cd coffee-shop-vite
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

### 3. Replace Files
Copy all the provided files from the code project into your project directory, replacing the default files.

### 4. Create Image Directory
Create `public/images/` folder and add the following images:
- `coffee-hero.png` - Main hero image
- `coffee-cup-1.png`, `coffee-cup-2.png`, `coffee-cup-3.png` - Coffee cups
- `milkshake-1.png`, `milkshake-2.png`, `milkshake-3.png` - Milkshakes  
- `cake-1.png`, `cake-2.png`, `cake-3.png` - Cakes/desserts
- `green-cup.png` - Login/registration image
- `black-coffee.png` - Black coffee section image

### 5. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

### 6. Build for Production
\`\`\`bash
npm run build
npm run preview
\`\`\`

## 📁 Project Structure
\`\`\`
coffee-shop-vite/
├── public/
│   ├── images/           # Coffee shop images
│   └── vite.svg
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
\`\`\`

## 🎯 Features
- ✅ Modern React with Vite
- ✅ React Router for navigation
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ Cart functionality
- ✅ Scroll animations
- ✅ Social media integration
- ✅ Contact forms
- ✅ Developer profiles

## 🛠️ Technologies
- Vite
- React 18
- React Router
- Tailwind CSS
- Lucide React Icons
- JavaScript (ES6+)

## 📞 Support
If you encounter any issues:
1. Check console for errors
2. Ensure all dependencies are installed
3. Verify image paths are correct
4. Make sure port 3000 is available

Enjoy your coffee shop website! ☕
