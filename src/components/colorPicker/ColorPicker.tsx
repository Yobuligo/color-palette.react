import { useId, useState } from "react";
import styles from "./ColorPicker.module.css";
import { IColorPickerProps } from "./IColorPickerProps";

export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const inputId = useId();
  const [color, setColor] = useState(props.initialColor);

  const onSetColor = (event: React.ChangeEvent<HTMLInputElement>) =>
    setColor(event.target.value);

  const onDuplicateColor = () => props.onDuplicateColor?.(color);

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
      <button onClick={onDuplicateColor}>Duplicate</button>
    </div>
  );
};
