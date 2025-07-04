export class Config {
  public value: number;

  constructor() {
    this.value = Math.random();
  }
}

export function getConfigInstance(): Config {
  return new Config();
}
