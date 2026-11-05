export const ParallaxImage = ({ src, alt, className = "" }) => {
  return (
    <div className="parallax-container h-full w-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`parallax-image w-full h-full object-cover ${className}`}
      />
    </div>
  );
};