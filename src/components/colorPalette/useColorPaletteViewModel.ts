import { useState } from "react";
import { IdGenerator } from "../../utils/IdGenerator";

export const useColorPaletteViewModel = () => {
  const [numberColorPickerLists, setNumberColorPickerLists] = useState<
    number[]
  >([IdGenerator.next()]);

  const onAddColorPickerList = () =>
    setNumberColorPickerLists((previous) => [...previous, IdGenerator.next()]);

  return {
    numberColorPickerLists,
    onAddColorPickerList,
  };
};
