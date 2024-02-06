import { useState } from "react";
import { IColor } from "../../model/IColor";
import { IdGenerator } from "../../utils/IdGenerator";
import { IColorPickerListProps } from "./IColorPickerListProps";

export const useColorPickerListViewModel = (props: IColorPickerListProps) => {
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

  const onAddColor = () => {
    setColors((previous) => [
      ...previous,
      { id: IdGenerator.next(), value: "#000" },
    ]);
  };

  const onDeleteColor = (color: IColor) => {
    let deletedLast = false;
    setColors((previous) => {
      const index = findColorIndex(previous, color);
      previous.splice(index, 1);
      deletedLast = previous.length === 0;
      return [...previous];
    });

    if (deletedLast) {
      props.onDeleteLastColorPicker?.();
    }
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

  const onUpdateColor = (color: IColor, newValue: string) => {
    setColors((previous) => {
      const index = findColorIndex(previous, color);
      color.value = newValue;
      previous.splice(index, 1, color);
      return [...previous];
    });
  };

  return {
    colors,
    onAddColor,
    onDeleteColor,
    onDuplicateColor,
    onUpdateColor,
  };
};
