import { useState } from "react";

export const useToggle = (
  initialValue: boolean
): [value: boolean, toggleValue: (newValue?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = (newValue?: boolean) => {
    if (newValue) {
      setValue(newValue);
    } else {
      setValue((previous) => !previous);
    }
  };

  return [value, toggleValue];
};
