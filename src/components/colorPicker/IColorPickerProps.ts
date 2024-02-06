import { IColor } from "../../model/IColor";

export interface IColorPickerProps {
  color: IColor;
  onDuplicateColor: () => void;
  onDeleteColor: () => void;
  onUpdateColor: (newValue: string) => void;
}
