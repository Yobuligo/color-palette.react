import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { ColorPickerList } from "../colorPIckerList/ColorPickerList";
import styles from "./ColorPalette.module.css";
import { useColorPaletteViewModel } from "./useColorPaletteViewModel";

export const ColorPalette: React.FC = () => {
  const viewModel = useColorPaletteViewModel();

  const items = viewModel.numberColorPickerLists.map((numberColorList) => (
    <div key={numberColorList}>
      <ColorPickerList
        displayControlUnits={viewModel.displayControlUnits}
        onDeleteLastColorPicker={() =>
          viewModel.onDeleteLastColorPicker(numberColorList)
        }
      />
    </div>
  ));

  return (
    <div className={styles.colorPalette}>
      <h2>Color Palette Generator</h2>
      <AddIcon
        title="Add new color list"
        className={styles.addButton}
        width={"3rem"}
        onClick={viewModel.onAddColorPickerList}
      />
      <div className={styles.colorPickerLists}>{items}</div>
    </div>
  );
};
