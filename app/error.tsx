"use client";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: Error;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <p className={css.error}>Error occurred while loading: {error.message}</p>
  );
}
