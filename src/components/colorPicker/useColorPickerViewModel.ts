import { useEffect, useId, useState } from "react";
import { IColorPickerProps } from "./IColorPickerProps";

export const useColorPickerViewModel = (props: IColorPickerProps) => {
  const inputId = useId();
  const [color, setColor] = useState(props.color.value);

  useEffect(() => {
    setColor(props.color.value);
  }, [props.color, props.color.value]);

  const onSetColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    props.onUpdateColor(event.target.value);
  };

  return {
    color,
    inputId,
    onSetColor,
    setColor,
  };
};
