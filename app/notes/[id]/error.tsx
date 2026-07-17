"use client";

import css from "./ErrorInNote.module.css";

interface ErrorInNoteProps {
  error: Error;
}

export default function ErrorInNote({ error }: ErrorInNoteProps) {
  return (
    <p className={css.error}>Could not fetch note details. {error.message}</p>
  );
}
