"use client";

import css from "./ErrorInNotes.module.css";

interface ErrorInNotesProps {
  error: Error;
}

export default function ErrorInNotes({ error }: ErrorInNotesProps) {
  return (
    <p className={css.error}>
      Could not fetch the list of notes. {error.message}
    </p>
  );
}
