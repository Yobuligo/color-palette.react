import { style } from "../../utils/style";
import { ColorPicker } from "../colorPicker/ColorPicker";
import styles from "./ColorPickerList.module.css";
import { IColorPickerListProps } from "./IColorPickerListProps";
import { useColorPickerListViewModel } from "./useColorPickerListViewModel";

export const ColorPickerList: React.FC<IColorPickerListProps> = (props) => {
  const viewModel = useColorPickerListViewModel(props);

  const items = viewModel.colors.map((color, index) => (
    <div key={index}>
      <ColorPicker
        color={color}
        displayControlUnits={props.displayControlUnits}
        onDuplicateColor={() => viewModel.onDuplicateColor(color)}
        onDeleteColor={() => viewModel.onDeleteColor(color)}
        onUpdateColor={(newValue: string) =>
          viewModel.onUpdateColor(color, newValue)
        }
      />
    </div>
  ));

  return (
    <div>
      <div
        className={style(
          styles.colorPickerList,
          props.displayControlUnits ? "" : styles.noGap
        )}
      >
        {items}
      </div>
    </div>
  );
};
