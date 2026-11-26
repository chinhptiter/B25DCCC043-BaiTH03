import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import {
  removeFromCart,
  updateQuantity,
  clearCart,
  selectTotalPrice,
  selectTotalQuantity,
} from '../features/cart/cartSlice';

export default function CartPage() {
  const dispatch = useAppDispatch();

  const items = useAppSelector(
    (state) => state.cart.items
  );

  const totalPrice = useAppSelector(selectTotalPrice);
  const totalQuantity = useAppSelector(selectTotalQuantity);

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Giỏ hàng</h1>
        <p>Giỏ hàng của bạn đang trống.</p>

        <Link to="/" className="button-link">
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Giỏ hàng của bạn</h1>

      <div className="cart-list">
        {items.map(({ product, quantity }) => (
          <div className="cart-item" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
            />

            <div className="cart-info">
              <Link to={`/products/${product.id}`}>
                <h3>{product.title}</h3>
              </Link>

              <p>${product.price.toFixed(2)}</p>

              <div className="quantity-control">
                <button
                  disabled={quantity <= 1}
                  onClick={() =>
                    dispatch(updateQuantity({
                      id: product.id,
                      quantity: quantity - 1,
                    }))
                  }
                >
                  -
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({
                      id: product.id,
                      quantity: quantity + 1,
                    }))
                  }
                >
                  +
                </button>
              </div>

              <p>
                Thành tiền:
                ${(product.price * quantity).toFixed(2)}
              </p>
            </div>

            <button
              className="danger-button"
              onClick={() =>
                dispatch(removeFromCart(product.id))
              }
            >
              Xóa
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Tổng số lượng: {totalQuantity}</p>

        <h2>Tổng tiền: ${totalPrice.toFixed(2)}</h2>

        <button
          className="danger-button"
          onClick={() => dispatch(clearCart())}
        >
          Xóa toàn bộ giỏ hàng
        </button>

        <Link to="/checkout" className="button-link">
          Thanh toán
        </Link>
      </div>
    </div>
  );
}
