import { ISectionProps } from "./ISectionProps";
import styles from "./Section.module.css";

export const Section: React.FC<ISectionProps> = (props) => {
  return (
    <div className={styles.section}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};
