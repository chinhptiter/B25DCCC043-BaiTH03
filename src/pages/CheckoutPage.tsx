import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import {
  clearCart,
  selectTotalPrice,
  selectTotalQuantity,
} from '../features/cart/cartSlice';

export default function CheckoutPage() {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const items = useAppSelector(
    (state) => state.cart.items
  );

  const totalPrice = useAppSelector(selectTotalPrice);
  const totalQuantity = useAppSelector(selectTotalQuantity);

  const [success, setSuccess] = useState(false);

  const handleOrder = () => {
    if (items.length === 0) {
      return;
    }

    dispatch(clearCart());
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="order-success">
        <h1>Đặt hàng thành công!</h1>

        <p>Cảm ơn {user?.username} đã mua hàng tại ShopMini.</p>

        <Link to="/" className="button-link">
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <h1>Giỏ hàng đang trống</h1>

        <Link to="/">Tiếp tục mua sắm</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Thanh toán</h1>

      <div className="checkout-box">
        <h2>Thông tin khách hàng</h2>

        <p>Tên khách hàng: {user?.username}</p>

        <h2>Thông tin đơn hàng</h2>

        {items.map(({ product, quantity }) => (
          <div
            className="checkout-item"
            key={product.id}
          >
            <p>{product.title}</p>
            <p>Số lượng: {quantity}</p>
            <p>
              ${(product.price * quantity).toFixed(2)}
            </p>
          </div>
        ))}

        <hr />

        <p>Tổng số lượng: {totalQuantity}</p>

        <h2 className="price">
          Tổng thanh toán: ${totalPrice.toFixed(2)}
        </h2>

        <button onClick={handleOrder}>
          Đặt hàng
        </button>
      </div>
    </div>
  );
}
