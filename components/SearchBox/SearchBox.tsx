import css from "./SearchBox.module.css";

interface SearchBoxProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ handleChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}
