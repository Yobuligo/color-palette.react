import { useState } from "react";
import { IColor } from "../../model/IColor";
import { IdGenerator } from "../../utils/IdGenerator";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { IColorPickerListProps } from "./IColorPickerListProps";

export const ColorPickerList: React.FC<IColorPickerListProps> = (props) => {
  const [colors, setColors] = useState<IColor[]>([
    { id: IdGenerator.next(), value: "#000" },
  ]);

  const findColorIndex = (colors: IColor[], color: IColor): number => {
    const index = colors.findIndex((item) => item.id === color.id);
    if (index === -1) {
      throw new Error(`Error while finding color. Color not found.`);
    }
    return index;
  };

  const copyColor = (origin: IColor): IColor => {
    return {
      id: IdGenerator.next(),
      value: origin.value,
    };
  };

  const onDuplicateColor = (color: IColor) => {
    setColors((previous) => {
      const index = findColorIndex(previous, color);
      const clone = copyColor(color);

      // add new colors
      previous.splice(index, 1, ...[color, clone]);
      return [...previous];
    });
  };

  const onDeleteColor = (color: IColor) => {
    setColors((previous) => {
      const colors = [...previous];
      const index = findColorIndex(colors, color);
      colors.splice(index, 1);
      return colors;
    });
  };

  const onUpdateColor = (color: IColor, newValue: string) => {
    setColors((previous) => {
      const colors = [...previous];
      const index = findColorIndex(colors, color);
      color.value = newValue;
      colors.splice(index, 1, color);
      return colors;
    });
  };

  const items = colors.map((color, index) => (
    <div key={index}>
      <ColorPicker
        color={color}
        onDuplicateColor={() => onDuplicateColor(color)}
        onDeleteColor={() => onDeleteColor(color)}
        onUpdateColor={(newValue: string) => onUpdateColor(color, newValue)}
      />
    </div>
  ));

  return (
    <>
      {/* <AddIcon width={"2rem"} /> */}
      {items}
    </>
  );
};
