import { IHaveDisplayControlUnits } from "../../types/IHaveDisplayControlUnits";

export interface IColorPickerListProps extends IHaveDisplayControlUnits {
  onDeleteLastColorPicker?: () => void;
}
