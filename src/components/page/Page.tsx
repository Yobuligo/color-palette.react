import { IPageProps } from "./IPageProps";
import styles from "./Page.module.css";

export const Page: React.FC<IPageProps> = (props) => {
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.page}>{props.children}</div>
    </>
  );
};
