import { IColor } from "../../model/IColor";
import { IHaveDisplayControlUnits } from "../../types/IHaveDisplayControlUnits";

export interface IColorPickerProps extends IHaveDisplayControlUnits {
  color: IColor;
  onDuplicateColor: () => void;
  onDeleteColor: () => void;
  onUpdateColor: (newValue: string) => void;
}
