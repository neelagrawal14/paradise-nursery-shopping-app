import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';

function Navbar() {
  const count = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-mark">✿</span>
        <span>Paradise <b>Nursery</b></span>
      </Link>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart">Cart <span className="cart-count">{count}</span></Link>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-overlay" />
      <section className="landing-content">
        <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
        <h1>Bring nature<br /><em>into your home.</em></h1>
        <p className="landing-copy">Thoughtfully chosen houseplants to make every corner feel more alive. Find your next leafy companion at Paradise Nursery.</p>
        <Link className="button button-light" to="/plants">Get Started <span aria-hidden="true">→</span></Link>
        <div className="landing-note"><span>✦</span> Good plants. Good days.</div>
      </section>
      <div className="landing-caption">YOUR HOME, A LITTLE GREENER</div>
    </main>
  );
}

function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  return (
    <div className="app-shell">
      {!isLanding && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      {!isLanding && <footer className="footer">© {new Date().getFullYear()} Paradise Nursery <span>·</span> Grow something beautiful.</footer>}
    </div>
  );
}

export default App;
