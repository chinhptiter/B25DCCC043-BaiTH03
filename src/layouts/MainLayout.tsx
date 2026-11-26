import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="app-layout">
      <Header />

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 ShopMini - Bài thực hành 03</p>
      </footer>
    </div>
  );
}
