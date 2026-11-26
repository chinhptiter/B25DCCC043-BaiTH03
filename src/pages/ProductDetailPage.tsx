import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { items, status, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const product = items.find(
    (item) => item.id === Number(id)
  );

  if (status === 'loading' || status === 'idle') {
    return <p>Đang tải sản phẩm...</p>;
  }

  if (status === 'failed') {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => dispatch(fetchProducts())}>
          Thử lại
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <h2>Không tìm thấy sản phẩm</h2>
        <Link to="/">Quay về trang chủ</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">← Quay về trang chủ</Link>

      <div className="product-detail">
        <img
          src={product.image}
          alt={product.title}
        />

        <div>
          <h1>{product.title}</h1>

          <p>Danh mục: {product.category}</p>

          <h2 className="price">
            ${product.price.toFixed(2)}
          </h2>

          <p>{product.description}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Thêm vào giỏ hàng
          </button>

          <Link to="/cart" className="button-link">
            Xem giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
}
