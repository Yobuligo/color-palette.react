import { ReactComponent as CopyIcon } from "../../assets/copy.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import styles from "./ColorPicker.module.css";
import { IColorPickerProps } from "./IColorPickerProps";
import { useColorPickerViewModel } from "./useColorPickerViewModel";

export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const viewModel = useColorPickerViewModel(props);

  return (
    <div className={styles.colorPicker}>
      <input
        className={styles.input}
        id={viewModel.inputId}
        type="color"
        value={viewModel.color}
        onChange={viewModel.onSetColor}
      />
      {props.displayControlUnits && (
        <>
          <label className={styles.label} htmlFor={viewModel.inputId}>
            {viewModel.color}
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
        </>
      )}
    </div>
  );
};
