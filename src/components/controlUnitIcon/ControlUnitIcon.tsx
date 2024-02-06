import { ReactComponent as DisplayIcon } from "../../assets/display.svg";
import { ReactComponent as HideIcon } from "../../assets/hide.svg";
import { IControlUnitIconProps } from "./IControlUnitIconProps";

export const ControlUnitIcon: React.FC<IControlUnitIconProps> = (props) => {
  return (
    <>
      {props.displayControlUnits ? (
        <HideIcon width={"3rem"} onClick={props.onToggle} />
      ) : (
        <DisplayIcon width={"3rem"} onClick={props.onToggle} />
      )}
    </>
  );
};
