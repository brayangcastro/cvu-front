import React, { useState, useEffect } from "react";
import "./PhotoModal.css";

const PhotoModal = ({ src, alt }) => {
  const [open, setOpen] = useState(false);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Foto en sidebar */}
      <img
        src={src}
        alt={alt}
        className="cvu-photo"
        onClick={() => setOpen(true)}
        style={{ cursor: "zoom-in" }}
      />

      {/* Modal ampliado */}
      {open && (
        <div className="photo-modal" onClick={() => setOpen(false)}>
          <img src={src} alt={alt} className="photo-modal-img" />
        </div>
      )}
    </>
  );
};

export default PhotoModal;
