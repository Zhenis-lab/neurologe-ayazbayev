import Link from "next/link";

export default function NotFound() {
  return <section className="empty-state shell"><span>404</span><h1>Страница не найдена</h1><Link className="button" href="/">На главную</Link></section>;
}
