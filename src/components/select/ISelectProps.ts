export interface ISelectProps<T> {
  defaultOption?: string;
  items: T[];
  onSelect?: (item: T) => void;
  selected?: T;
  renderTitle: (item: T) => string;
}
