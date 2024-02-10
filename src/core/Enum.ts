import { EnumType } from "./types/EnumType";
import { KeyOf } from "./types/KeyOf";

export class Enum {
  static keys<T extends EnumType>(type: T): KeyOf<T>[] {
    const values: KeyOf<T>[] = [];
    for (const propName in type) {
      values.push(type[propName]);
    }
    return values;
  }
}
