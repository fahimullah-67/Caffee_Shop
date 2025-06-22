# Caffee_Shop
Web Development Project



# ☕ Coffee Shop - Vite React Project

A modern and beautiful coffee shop website built with Vite, React, and Tailwind CSS.

## 🚀 Features

- ✅ **Modern React with Vite** - Fast development and build
- ✅ **React Router** - Client-side routing
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Responsive Design** - Works on all devices
- ✅ **Cart Functionality** - Add/remove items, quantity management
- ✅ **Scroll Animations** - Smooth scroll-triggered animations
- ✅ **Sticky Order Icon** - Quick access to ordering
- ✅ **Social Media Integration** - Interactive developer profiles
- ✅ **Modern UI Components** - Cards, buttons, forms, modals

## 📁 Project Structure

\`\`\`
coffee-shop-vite/
├── public/
│   ├── images/           # Coffee shop images
│   └── vite.svg
├── src/
│   ├── components/       # Reusable components
│   │   ├── CartContext.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Cart.jsx
│   │   ├── ProductSlider.jsx
│   │   └── StickyOrderIcon.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Order.jsx
│   │   ├── Categories.jsx
│   │   ├── Registration.jsx
│   │   └── Login.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
\`\`\`

## 🛠️ Installation & Setup

### 1. Create New Vite Project
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
- Copy all the provided files into your project
- Create `public/images/` folder and add coffee images
- Replace default files with the provided code

### 4. Add Images
Add these images to `public/images/`:
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

## 📱 Pages

1. **Home** - Hero section with product sliders
2. **About** - Company story and developer team
3. **Contact** - Contact form and developer profiles
4. **Order** - Product catalog with cart functionality
5. **Categories** - Organized product categories
6. **Registration** - User signup form
7. **Login** - User login form

## 🎨 Design Features

- **Gradient Backgrounds** - Beautiful color combinations
- **Hover Effects** - Interactive elements
- **Scroll Animations** - Smooth reveal animations
- **Mobile Responsive** - Works on all screen sizes
- **Modern Typography** - Clean and readable fonts
- **Card Components** - Consistent design patterns

## 🛒 Cart Functionality

- Add items to cart
- Update quantities
- Remove items
- Clear entire cart
- Persistent cart state
- Cart badge with item count

## 👨‍💻 Developer Features

- Social media integration
- Interactive developer profiles
- Contact information
- Skills showcase
- Social media modals with stats

## 🔧 Technologies Used

- **Vite** - Build tool
- **React 18** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **JavaScript (ES6+)** - Programming language

## 📞 Support

If you need help with setup or have questions:
- Check the console for any errors
- Ensure all dependencies are installed
- Verify image paths are correct
- Make sure port 3000 is available

## 🚀 Deployment

Ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

This project is for educational purposes. Feel free to use and modify as needed.

---

**Enjoy your coffee shop website! ☕**
