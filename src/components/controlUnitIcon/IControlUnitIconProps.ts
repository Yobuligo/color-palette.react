import { IHaveDisplayControlUnits } from "../../types/IHaveDisplayControlUnits";

export interface IControlUnitIconProps extends IHaveDisplayControlUnits {
  onToggle: () => void;
}
