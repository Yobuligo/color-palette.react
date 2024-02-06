import { ReactComponent as AddIcon } from "../../assets/add.svg";
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
    <div className={styles.colorPickerList}>
      {viewModel.colors.length === 0 && (
        <AddIcon width={"5rem"} onClick={viewModel.onAddColor} />
      )}
      {items}
    </div>
  );
};
