class IdGeneratorDefault {
  private cursor = 1;

  next() {
    this.cursor++;
    return this.cursor;
  }
}

export const IdGenerator = new IdGeneratorDefault();
