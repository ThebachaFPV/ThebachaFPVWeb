import React, { useContext, useState } from 'react';
import StoreNavBar from '../components/StoreNavBar';
import { CartContext } from '../context/CartContext';
import products from '../products';

const Store: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { cart, addToCart, removeFromCart, clearCart } = cartContext;

  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <div>
      <h1>Store Page</h1>
      <StoreNavBar />
      <div className="store-content">
        {categories.map((category) => (
          <section key={category} id={category}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductDisplay key={product.id} product={product} addToCart={addToCart} />
              ))}
          </section>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

const ProductDisplay: React.FC<{ product: any, addToCart: (product: any) => void }> = ({ product, addToCart }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <div className="product-images">
        <div className="thumbnail-strip">
          {product.images.map((img: any, index: number) => (
            <img
              key={index}
              src={`${import.meta.env.BASE_URL}/assets/product-images/${img.image}`}
              alt={img.alt}
              title={img.alt}
              className="thumbnail"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={`${import.meta.env.BASE_URL}/assets/product-images/${mainImage.image}`} alt={mainImage.alt} />
          <p>{mainImage.alt}</p>
        </div>
      </div>
      <p>Part Number: {product.id}</p>
      <p>Price: ${product.price}</p>
      <pre>{product.description}</pre>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>Add to Cart</button>
    </div>
  );
};

export default Store;