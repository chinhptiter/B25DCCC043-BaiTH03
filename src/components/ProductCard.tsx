import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useAppDispatch } from '../app/hooks';
import { addToCart } from '../features/cart/cartSlice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        <h3>{product.title}</h3>
      </Link>

      <p className="category">{product.category}</p>

      <p className="price">
        ${product.price.toFixed(2)}
      </p>

      <button onClick={() => dispatch(addToCart(product))}>
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}
