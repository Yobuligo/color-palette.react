import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { ColorPickerList } from "../colorPIckerList/ColorPickerList";
import { ControlUnitIcon } from "../controlUnitIcon/ControlUnitIcon";
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
      <div className={styles.toolbar}>
        <AddIcon
          title="Add new color list"
          width={"3rem"}
          onClick={viewModel.onAddColorPickerList}
        />
        <ControlUnitIcon
          displayControlUnits={viewModel.displayControlUnits}
          onToggle={viewModel.onToggleDisplayControlUnits}
        />
      </div>
      <div className={styles.colorPickerLists}>{items}</div>
    </div>
  );
};
