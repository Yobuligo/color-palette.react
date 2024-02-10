export interface ISelectProps<T> {
  items: T[];
  onSelect?: (item: T) => void;
  placeholder?: string;
  selected?: T;
  renderOptionTitle: (item: T) => string;
}
