import Link from "next/link";

export default function NotFound() {
  return (
    <section className="v2-page v2-empty-state">
      <span>404</span>
      <h1>Страница не найдена</h1>
      <Link className="v2-button v2-button-primary" href="/">На главную</Link>
    </section>
  );
}
