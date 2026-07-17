"use client";

import { useParams } from "next/navigation";
import css from "./NoteDetails.client.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p className={css.loading}>Loading, please wait...</p>;
  if (isError || !note)
    return <p className={css.error}>Something went wrong.</p>;

  return (
    <main className={css.main}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>
            {note.updatedAt
              ? "Updated date: " + note.updatedAt
              : "Created date: " + note.createdAt}
          </p>
        </div>
      </div>
    </main>
  );
}
