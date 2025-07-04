export interface Animal {
  speak(): string;
}

export class Dog implements Animal {
  speak() {
    return "Woof";
  }
}

export class Cat implements Animal {
  speak() {
    return "Meow";
  }
}

export function animalFactory(type: string): Animal {
  return new Dog();
}
