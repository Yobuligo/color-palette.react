import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { IColorPickerListProps } from "./IColorPickerListProps";

export const ColorPickerList: React.FC<IColorPickerListProps> = (props) => {
  const [colors, setColors] = useState<string[]>(["#000"]);

  const onDuplicateColor = (color: string) => {
    setColors((previous) => [...previous, color]);
  };

  const items = colors.map((color, index) => (
    <div key={index}>
      <ColorPicker initialColor={color} onDuplicateColor={onDuplicateColor} />
    </div>
  ));

  return <>{items}</>;
};
