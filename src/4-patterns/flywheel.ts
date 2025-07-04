export class SharedData {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}

export class Icon {
  private static shared: { [key: string]: SharedData } = {};

  sharedData: SharedData;

  constructor(type: string) {
    this.sharedData = new SharedData(type);
  }
}
