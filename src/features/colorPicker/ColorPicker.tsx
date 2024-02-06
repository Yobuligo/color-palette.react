import { CSSProperties } from "react";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { style } from "../../utils/style";
import { Card } from "../../components/card/Card";
import styles from "./ColorPicker.module.css";
import { IColorPickerProps } from "./IColorPickerProps";
import { useColorPickerViewModel } from "./useColorPickerViewModel";

export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const viewModel = useColorPickerViewModel(props);

  const styling = {
    "--color": `${viewModel.color}`,
  } as CSSProperties;

  return (
    <Card
      className={style(
        styles.colorPicker,
        props.displayControlUnits ? "" : styles.noPadding
      )}
    >
      {props.displayControlUnits ? (
        <input
          className={styles.tile}
          id={viewModel.inputId}
          type="color"
          value={viewModel.color}
          onChange={viewModel.onSetColor}
        />
      ) : (
        <div className={style(styles.tile, styles.tileColor)} style={styling} />
      )}
      {props.displayControlUnits && (
        <div className={styles.footer}>
          <label className={styles.label} htmlFor={viewModel.inputId}>
            {viewModel.color}
          </label>
          <CopyIcon
            width={"1.5rem"}
            onClick={props.onDuplicateColor}
            className={styles.button}
            title="Copy color"
          />
          <DeleteIcon
            width={"1.5rem"}
            onClick={props.onDeleteColor}
            className={styles.button}
            title="Delete color"
          />
        </div>
      )}
    </Card>
  );
};
