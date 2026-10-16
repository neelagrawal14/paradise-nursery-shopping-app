import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice.jsx';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = () => window.alert('Coming Soon! Checkout will be available soon.');
  return (
    <main className="page-wrap">
      <section className="page-heading">
        <div><p className="section-kicker">YOUR LITTLE INDOOR JUNGLE</p><h1>Shopping cart</h1><p>{totalItems} {totalItems === 1 ? 'plant' : 'plants'} ready to find a home.</p></div>
        <Link className="button button-primary" to="/plants">← Continue shopping</Link>
      </section>
      {items.length === 0 ? (
        <section className="empty-state">
          <div className="empty-icon">♧</div><h2>Your cart is ready to grow.</h2><p>You haven’t added any plants yet. Find a leafy favorite to get started.</p>
          <Link className="button button-primary" to="/plants">Browse plants →</Link>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product">
                  <h3>{item.name}</h3><p>Unit price: ${item.price.toFixed(2)}</p>
                  <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                    <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                </div>
                <div className="cart-row-side">
                  <span className="line-total">${(item.price * item.quantity).toFixed(2)}</span>
                  <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </article>
            ))}
          </div>
          <aside className="summary-card">
            <h2>Order summary</h2>
            <div className="summary-line"><span>Plants ({totalItems})</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="summary-line"><span>Delivery</span><span>Calculated later</span></div>
            <div className="summary-total"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
            <button className="button button-primary" onClick={checkout}>Checkout →</button>
            <Link className="text-button" to="/plants">Continue shopping</Link>
          </aside>
        </section>
      )}
    </main>
  );
}

export default CartItem;
