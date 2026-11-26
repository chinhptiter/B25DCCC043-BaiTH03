import { Link } from 'react-router-dom';
import { ShoppingCart, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useAppSelector } from '../app/hooks';
import { selectTotalQuantity } from '../features/cart/cartSlice';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const totalQuantity = useAppSelector(selectTotalQuantity);

  return (
    <header className="header">
      <Link to="/" className="logo">
        ShopMini
      </Link>

      <nav className="navigation">
        <Link to="/">Trang chủ</Link>

        <Link to="/cart">
          <ShoppingCart size={20} />
          Giỏ hàng ({totalQuantity})
        </Link>

        {user ? (
          <>
            <span>Xin chào, {user.username}</span>
            <button onClick={logout}>Đăng xuất</button>
          </>
        ) : (
          <Link to="/login">Đăng nhập</Link>
        )}

        <button onClick={toggleTheme} aria-label="Đổi giao diện">
          {theme === 'light' ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </button>
      </nav>
    </header>
  );
}
