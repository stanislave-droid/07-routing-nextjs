import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { Category } from "@/lib/categories";

interface NotesParams {
  params: Promise<{ slug: string[] }>;
}

export default async function Notes({ params }: NotesParams) {
  const { slug } = await params;
  const tag = slug[0] == "all" ? undefined : (slug[0] as Category);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1, tag],
    queryFn: () => fetchNotes(1, "", 12, tag),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient category={tag} />
      </HydrationBoundary>
    </>
  );
}
