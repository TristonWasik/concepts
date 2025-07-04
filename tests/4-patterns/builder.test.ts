import { describe, it, expect } from "vitest";
import { PizzaBuilder } from "../../src/4-patterns/builder";

describe("Builder", () => {
  it("should build pizza with size and toppings", () => {
    const pizza = new PizzaBuilder()
      .setSize("Large")
      .addTopping("Cheese")
      .addTopping("Pepperoni")
      .build();

    expect(pizza.size).toBe("Large");
    expect(pizza.toppings).toEqual(["Cheese", "Pepperoni"]);
  });
});
