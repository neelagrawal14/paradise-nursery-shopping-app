import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/CartSlice.jsx';
import { plantCategories } from '../data/plants.js';

function ProductCard({ plant, isAdded, onAdd }) {
  return (
    <article className="plant-card">
      <img className="plant-image" src={plant.image} alt={plant.name} loading="lazy" />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div className="plant-card-bottom">
          <span className="price">${plant.price.toFixed(2)}</span>
          <button className={`add-button ${isAdded ? 'added' : ''}`} disabled={isAdded} onClick={onAdd}>
            {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const addedIds = new Set(items.map((item) => item.id));
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="page-wrap">
      <section className="page-heading">
        <div><p className="section-kicker">THE HOUSEPLANT COLLECTION</p><h1>Find your kind of green.</h1><p>Leafy companions for every room, rhythm, and growing journey.</p></div>
        <Link className="button button-primary" to="/cart">View cart ({count}) →</Link>
      </section>
      {plantCategories.map((category) => (
        <section className="category-section" key={category.id}>
          <h2 className="category-title">{category.name}</h2>
          <p className="category-description">{category.description}</p>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <ProductCard key={plant.id} plant={plant} isAdded={addedIds.has(plant.id)} onAdd={() => dispatch(addToCart(plant))} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
