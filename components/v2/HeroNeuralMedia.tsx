export function HeroNeuralMedia() {
  return (
    <div className="v2-hero-neural-layer" aria-hidden="true">
      <img
        className="v2-hero-neural-poster"
        src="/hero-neural-poster.webp"
        alt=""
        width="768"
        height="428"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <video
        className="v2-hero-neural-video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-neural-poster.webp"
        tabIndex={-1}
      >
        <source
          src="/hero-neural.mp4"
          type="video/mp4"
          media="(min-width: 721px) and (prefers-reduced-motion: no-preference)"
        />
      </video>
    </div>
  );
}
