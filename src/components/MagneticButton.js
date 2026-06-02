import React, { useRef } from "react";

/**
 * Effet "magnétique" : au survol, la carte suit un peu la position du curseur.
 * Déclenche uniquement lors des mouvements pour rester léger.
 */
export default function MagneticButton({
  children,
  onClick,
  active = false,
  className = "",
  strength = 12,
}) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  const setVars = (clientX, clientY) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width; // 0..1
    const y = (clientY - rect.top) / rect.height; // 0..1

    const dx = (x - 0.5) * strength;
    const dy = (y - 0.5) * strength;

    // Pour éviter trop de reflows, on applique via rAF.
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--tx", `${dx}px`);
      el.style.setProperty("--ty", `${dy}px`);
    });
  };

  const onMouseMove = (e) => setVars(e.clientX, e.clientY);

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tx", `0px`);
    el.style.setProperty("--ty", `0px`);
  };

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={active}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`magnetic-button ${active ? "magnetic-button--active" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

