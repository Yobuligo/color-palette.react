import { EnumType } from "./types/EnumType";

export class Enum {
  static getValues<T extends EnumType>(type: T): (keyof T)[] {
    const values: (keyof T)[] = [];
    for (const propName in type) {
      values.push(type[propName]);
    }
    return values;
  }
}
