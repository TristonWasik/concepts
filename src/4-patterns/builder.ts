export class Pizza {
  size: string = "";
  toppings: string[] = [];
}

export class PizzaBuilder {
  private pizza = new Pizza();

  setSize(size: string): this {
    return this;
  }

  addTopping(topping: string): this {
    return this;
  }

  build(): Pizza {
    return this.pizza;
  }
}
