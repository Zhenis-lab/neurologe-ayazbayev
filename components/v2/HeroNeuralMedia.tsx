export function HeroNeuralMedia() {
  return (
    <div className="v2-hero-neural-layer" aria-hidden="true">
      <img
        className="v2-hero-neural-poster"
        src="/neural-hero-higgsfield.webp"
        alt=""
        width="2200"
        height="1258"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <video
        className="v2-hero-neural-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/neural-hero-higgsfield.webp"
        disablePictureInPicture
        tabIndex={-1}
      >
        <source
          src="/neural-hero-higgsfield.mp4"
          type="video/mp4"
          media="(min-width: 769px) and (prefers-reduced-motion: no-preference)"
        />
      </video>
    </div>
  );
}
