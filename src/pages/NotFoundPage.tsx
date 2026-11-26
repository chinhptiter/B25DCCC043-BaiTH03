import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>Không tìm thấy trang</h2>

      <p>Trang bạn đang tìm kiếm không tồn tại.</p>

      <Link to="/" className="button-link">
        Quay về trang chủ
      </Link>
    </div>
  );
}
