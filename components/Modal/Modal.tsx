"use client";

import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const handleKeydownClose = (event: KeyboardEvent) => {
    if (event.code == "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydownClose);
    document.body.style = "overflow: hidden";

    return () => {
      window.removeEventListener("keydown", handleKeydownClose);
      document.body.style = "overflow:";
    };
  }, []);

  const handleBackdropClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClose}
    >
      <div className={css.modal}>{children}</div>
    </div>,
    document.body,
  );
}
