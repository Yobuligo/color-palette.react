import { ISelectProps } from "./ISelectProps";

export function Select<T>(props: ISelectProps<T>) {
  let options = props.items.map((item, index) => (
    <option key={index + 1}>{props.renderOptionTitle(item)}</option>
  ));

  options = [<option key="">{props.placeholder}</option>, ...options];

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSelect?.(props.items[event.target.tabIndex]);
  };

  return <select onChange={onSelect}>{options}</select>;
}
