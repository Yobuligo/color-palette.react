import { useState } from "react";
import { IColor } from "../../model/IColor";
import { IdGenerator } from "../../utils/IdGenerator";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { IColorPickerListProps } from "./IColorPickerListProps";

export const ColorPickerList: React.FC<IColorPickerListProps> = (props) => {
  const [colors, setColors] = useState<IColor[]>([
    { id: IdGenerator.next(), value: "#000" },
  ]);

  const onDuplicateColor = (color: IColor) => {};

  const onDeleteColor = (color: IColor) => {};

  const onUpdateColor = (color: IColor) => {};

  const items = colors.map((color, index) => (
    <div key={index}>
      <ColorPicker
        color={color}
        onDuplicateColor={() => onDuplicateColor(color)}
        onDeleteColor={() => onDeleteColor(color)}
        onUpdateColor={() => onUpdateColor(color)}
      />
    </div>
  ));

  return <>{items}</>;
};
