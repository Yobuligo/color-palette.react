import { useState } from "react";
import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { IdGenerator } from "../../utils/IdGenerator";
import { ColorPickerList } from "../colorPIckerList/ColorPickerList";
import styles from "./ColorPalette.module.css";

export const ColorPalette: React.FC = () => {
  const [numberColorPickerLists, setNumberColorPickerLists] = useState<
    number[]
  >([IdGenerator.next()]);

  const items = numberColorPickerLists.map((numberColorList) => (
    <div key={numberColorList}>
      <ColorPickerList />
    </div>
  ));

  const onAddColorPickerList = () =>
    setNumberColorPickerLists((previous) => [...previous, IdGenerator.next()]);

  return (
    <div className={styles.colorPalette}>
      <h2>Color Palette Generator</h2>
      <AddIcon
        title="Add new color list"
        className={styles.addButton}
        width={"3rem"}
        onClick={onAddColorPickerList}
      />
      <div className={styles.colorPickerLists}>{items}</div>
    </div>
  );
};
