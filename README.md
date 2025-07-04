# Typescript Concepts

This repo is designed to test someones understand of typescript. The idea is to update the code in the **src** folder to make all tests pass. It uses vitest for the tests.

## Rules

1. No tests should be updated. Only the files in **/src**
2. Don't use copilot or other AI.
3. Don't use _any_. Functions that have _any_ used for types should be modified to not have them.

## Setup

1. Clone repo

```bash
gh repo clone TristonWasik/concepts
```

2. Install dependencies

```bash
npm i
```

3. Start tests

```bash
npm run test:watch
```

4. Solve the challenges!

**Note**: There are compilation errors, these should be fixed first.

## Concepts included

- Utility Types
- Generators
- Discriminated Unions
- Hoisting
- OOP
- Inheritance
- Polymorphism
- TDZ
- Type Narrowing
- Events
- Data Manipulation
- this
- Generics
- Function Overloading

## Tips

- Use the information provided in the tests to determine your inputs and outputs of a function.
- Don't forget explicit return types.
- Some methods and functions include JSDoc comments, they can provide context and hints.
