import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { IdGenerator } from "../../utils/IdGenerator";

export const useColorPaletteViewModel = () => {
  const [displayControlUnits, toggleDisplayControlUnits] = useToggle(true);
  const [numberColorPickerLists, setNumberColorPickerLists] = useState<
    number[]
  >([IdGenerator.next()]);

  const findNumberColorPickerListIndex = (
    numberColorPickerLists: number[],
    numberColorPickerList: number
  ): number => {
    const index = numberColorPickerLists.findIndex(
      (item) => item === numberColorPickerList
    );

    if (index === -1) {
      throw new Error(
        `Error while finding color picker list number. Color picker list number not found.`
      );
    }

    return index;
  };

  const onAddColorPickerList = () =>
    setNumberColorPickerLists((previous) => [...previous, IdGenerator.next()]);

  const onDeleteLastColorPicker = (numberColorPickerList: number) => {
    setNumberColorPickerLists((previous) => {
      const index = findNumberColorPickerListIndex(
        previous,
        numberColorPickerList
      );
      previous.splice(index, 1);
      return [...previous];
    });
  };

  const onToggleDisplayControlUnits = () => toggleDisplayControlUnits();

  return {
    displayControlUnits,
    numberColorPickerLists,
    onAddColorPickerList,
    onDeleteLastColorPicker,
    onToggleDisplayControlUnits,
  };
};
