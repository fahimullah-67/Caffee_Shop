import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import StickyOrderIcon from "./components/StickyOrderIcon"
import { CartProvider } from "./components/CartContext"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Order from "./pages/Order"
import Categories from "./pages/Categories"
import Registration from "./pages/Registration"
import Login from "./pages/Login"

function App() {
  const location = useLocation()
  const hideOrderIcon = location.pathname === "/registration" || location.pathname === "/login"

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        {!hideOrderIcon && <StickyOrderIcon />}
      </div>
    </CartProvider>
  )
}

export default App
