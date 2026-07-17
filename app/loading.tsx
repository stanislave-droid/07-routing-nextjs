import css from "./Loader.module.css";

export default function Loader() {
  return <p className={css.loading}>Loading notes, please wait...</p>;
}
