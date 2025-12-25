import { useEffect, useState } from "react";
import "../styles/portfolio.css";

type HeroProps = {
  compact: boolean;
};

export default function Hero({ compact }: HeroProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero ${compact ? "hero-compact" : ""}`}>
      <div className={`hero-bg ${active === 0 ? "visible" : ""}`} />
      <div className={`hero-bg ${active === 1 ? "visible" : ""}`} />
      <div className={`hero-bg ${active === 2 ? "visible" : ""}`} />
    </section>
  );
}
