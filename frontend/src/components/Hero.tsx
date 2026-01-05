import { useState, useEffect } from "react";

type HeroProps = {
  compact: boolean;
};

export default function Hero({ compact }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`hero ${compact ? "hero-compact" : ""}`}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`hero-bg ${i === current ? "visible" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}