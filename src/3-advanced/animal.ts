export class Animal {
  private breed: string = "Unknown";

  constructor(private name: string) {}

  speak(): string {
    return "Sound";
  }

  get Name(): string {
    throw new Error("Method not implemented.");
  }

  get Breed(): string {
    return this.breed;
  }
}

export class Dog extends Animal {
  speak(): string {
    return "Bark";
  }
}

export class Cat {
  speak(): string {
    return "Meow";
  }
}
