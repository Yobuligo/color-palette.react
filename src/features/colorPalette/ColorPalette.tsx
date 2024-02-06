import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { style } from "../../utils/style";
import { ColorPickerList } from "../colorPickerList/ColorPickerList";
import { ControlUnitIcon } from "../controlUnitIcon/ControlUnitIcon";
import { Section } from "../../components/section/Section";
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
    <Section title="Pick and combine your colors">
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
      <div
        className={style(
          styles.colorPickerLists,
          viewModel.displayControlUnits ? "" : styles.noRowGap
        )}
      >
        {items}
      </div>
    </Section>
  );
};
