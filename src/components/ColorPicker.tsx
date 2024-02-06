import { useId, useState } from "react";
import styles from "./ColorPicker.module.css";
import { IColorPickerProps } from "./IColorPickerProps";

export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const inputId = useId();
  const [color, setColor] = useState(props.initialColor ?? "#000");

  const onSetColor = (event: React.ChangeEvent<HTMLInputElement>) =>
    setColor(event.target.value);

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
    </div>
  );
};
