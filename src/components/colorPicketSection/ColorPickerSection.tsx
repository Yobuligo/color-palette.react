import { ColorPickerList } from "../colorPIckerList/ColorPickerList";
import styles from "./ColorPickerSection.module.css";
import { IColorPickerSectionProps } from "./IColorPickerSectionProps";

export const ColorPickerSection: React.FC<IColorPickerSectionProps> = (
  props
) => {
  return (
    <div className={styles.colorPickerSection}>
      <ColorPickerList />
      <ColorPickerList />
    </div>
  );
};
