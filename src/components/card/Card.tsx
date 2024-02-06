import { styles } from "../../utils/styles";
import style from "./Card.module.css";
import { ICardProps } from "./ICardProps";

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <div className={styles(style.card, props.className)}>{props.children}</div>
  );
};
