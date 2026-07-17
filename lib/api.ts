import axios from "axios";
import type { Note } from "../types/note";
import { Category } from "./categories";

const axiosClient = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

interface fetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  page: number,
  query: string,
  perPage: number,
  tag?: Category | undefined,
): Promise<fetchNotesResponse> {
  const { data } = await axiosClient.get<fetchNotesResponse>("/notes", {
    params: {
      page,
      search: query,
      perPage,
      tag,
    },
  });

  return data;
}

interface createNoteProps {
  title: string;
  content: string;
  tag: string;
}

export async function createNote(newNote: createNoteProps): Promise<Note> {
  const { data } = await axiosClient.post<Note>("/notes", newNote);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await axiosClient.delete<Note>(`/notes/${id}`);
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await axiosClient.get<Note>(`/notes/${id}`);
  return data;
}
