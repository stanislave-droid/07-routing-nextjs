import css from "./layout.module.css";

interface FilterNotesLayout {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function FilterNotesLayout({
  children,
  sidebar,
}: FilterNotesLayout) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}
