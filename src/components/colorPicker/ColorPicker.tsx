import { useEffect, useId, useState } from "react";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import styles from "./ColorPicker.module.css";
import { IColorPickerProps } from "./IColorPickerProps";

export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const inputId = useId();
  const [color, setColor] = useState(props.color.value);

  useEffect(() => {
    setColor(props.color.value);
  }, [props.color, props.color.value]);

  const onSetColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    props.onUpdateColor(event.target.value);
  };

  return (
    <div className={styles.colorPicker}>
      <input
        className={styles.input}
        id={inputId}
        type="color"
        value={color}
        onChange={onSetColor}
      />
      <label className={styles.label} htmlFor={inputId}>
        {color}
      </label>
      <CopyIcon
        width={"2rem"}
        onClick={props.onDuplicateColor}
        className={styles.button}
      />
      <DeleteIcon
        width={"2rem"}
        onClick={props.onDeleteColor}
        className={styles.button}
      />
    </div>
  );
};
