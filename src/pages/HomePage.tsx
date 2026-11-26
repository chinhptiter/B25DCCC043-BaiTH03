import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector(
    (state) => state.products
  );

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(
      search.trim().toLowerCase()
    )
  );

  return (
    <div>
      <section className="hero">
        <h1>Chào mừng đến với ShopMini</h1>
        <p>Mua sắm dễ dàng - Chất lượng - Tiện lợi</p>
      </section>

      <h2>Danh sách sản phẩm</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {status === 'loading' && (
        <p>Đang tải sản phẩm...</p>
      )}

      {status === 'failed' && (
        <div>
          <p className="error">{error}</p>
          <button onClick={() => dispatch(fetchProducts())}>
            Thử lại
          </button>
        </div>
      )}

      {status === 'succeeded' && (
        <>
          <p>Tìm thấy {filteredProducts.length} sản phẩm</p>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p>Không tìm thấy sản phẩm phù hợp.</p>
          )}
        </>
      )}
    </div>
  );
}
