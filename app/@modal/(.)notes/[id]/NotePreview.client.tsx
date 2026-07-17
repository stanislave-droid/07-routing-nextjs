"use client";

import { useParams } from "next/navigation";
import css from "./NotePreview.client.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

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

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <button onClick={handleClose} className={css.backBtn}>
          Back
        </button>
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
    </Modal>
  );
}
