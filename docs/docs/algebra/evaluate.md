---
sidebar_position: 1
id: evaluator
title: Evaluator Class
sidebar_label: Evaluator
---

# Evaluator Class

The `Evaluator` class is designed to evaluate mathematical expressions with support for variables and functions. It allows you to perform arithmetic operations, use mathematical constants, and define custom functions and variables for evaluation.

:::tip Hands-On Example  

Explore the [CLI Expression Evaluator Example](../examples/cli-expression-evaluator.md) to see how the `Evaluator` class can be used in a real-world project.  

This example provides step-by-step guidance for practical implementation.  

[View the Example](../examples/cli-expression-evaluator.md)  
:::

---

## Features

- Evaluate mathematical expressions with variables and functions.
- Support for standard mathematical functions (e.g., `sqrt`, `sin`, `cos`, etc.).
- Built-in support for common constants like `pi` and `e`.
- Allow dynamic addition of variables and custom functions.

--- 

## Installation

To use the `Evaluator` class in your project, simply import it as follows:

```typescript
import { Evaluator } from 'samasya';
```

---

## Class Definition

### Evaluator

**constructor**

```typescript
constructor(variables: { [key: string]: number } = {});
```
The constructor accepts an optional `variables` object, which can be used to initialize the evaluator with predefined variables.

- **variables**: A key-value object where the key is the variable name (e.g., `x`, `y`) and the value is its corresponding number.

**Methods**
`evaluate(expression: string): number`

Evaluates the given mathematical expression.

- **expression**: A string representing a mathematical expression to evaluate.
- **returns**: The result of the evaluated expression.

Example: 

```typescript
const evaluator = new Evaluator({ x: 5, y: 10 });
const result = evaluator.evaluate('x * pi + y'); // Evaluates to 25.70796
```

`setVariable(name: string, value: number): void`

Sets a variable for the evaluator.

- **name**: The name of the variable (e.g., x, y).
- **value**: The value to assign to the variable.

Example:
```typescript
const evaluator = new Evaluator();
evaluator.setVariable('x', 5);
```

`setFunction(name: string, func: (...args: number[]) => number): void`

Sets a custom function for the evaluator.

- `name`: The name of the function (e.g., customFunc).
- `func`: The function to associate with the name.

Example: 

```typescript
const evaluator = new Evaluator();
evaluator.setFunction('customFunc', (a, b) => a + b);
const result = evaluator.evaluate('customFunc(2, 3)'); // Evaluates to 5
```

---

## Built-in Functions and Constants

The `Evaluator` class comes with several built-in functions and constants:

### Functions

- `sqrt(x)`: Returns the square root of `x`.
- `sin(x)`: Returns the sine of `x` (in radians).
- `cos(x)`: Returns the cosine of `x` (in radians).
- `log(x)`: Returns the natural logarithm of `x`.
- `abs(x)`: Returns the absolute value of `x`.
- `tan(x)`: Returns the tangent of `x` (in radians).
- `exp(x)`: Returns e^x (Euler's number raised to the power of `x`).
- `round(x)`: Returns x rounded to the nearest integer.
- `floor(x)`: Returns the largest integer less than or equal to `x`.
- `ceil(x)`: Returns the smallest integer greater than or equal to `x`.
- `max(a, b, ...)`: Returns the maximum of the given numbers.
- `min(a, b, ...)`: Returns the minimum of the given numbers.
- `pow(x, y)`: Returns `x` raised to the power of `y`.
- `random()`: Returns a random number between `0` and `1`.

### Constants 

- `pi`: The mathematical constant π (approximately `3.14159`).
- `e`: The mathematical constant Euler's number (approximately `2.71828`).

Example: 

```typescript
const evaluator = new Evaluator({ x: 5, y: 10 });
const result = evaluator.evaluate('x * pi + y'); // Uses the pi constant
```

### Example Usage

Here are a few example usages of the `Evaluator` class:

```typescript
const evaluator = new Evaluator({ x: 5, y: 10 });

// Basic evaluation with variables
const result1 = evaluator.evaluate('x * pi + y'); // Expected output: 25.70796

// Using the `e` constant
const result2 = evaluator.evaluate('2 + e * x + y'); // Expected output: 25.5914

// Custom function
evaluator.setFunction('multiply', (a, b) => a * b);
const result3 = evaluator.evaluate('multiply(x, y)'); // Expected output: 50
```

### Error Handling

The `Evaluator` class provides error handling for the following cases:

- **Invalid characters in the expression**: If the expression contains invalid characters (such as letters other than variables or functions), an error will be thrown.
- **Unrecognized variables**: If the expression references variables that have not been defined, an error will be thrown.
- **Invalid function calls**: If a function is called with incorrect arguments, an error will be thrown.

Example: 

```typescript
try {
  const result = evaluator.evaluate('x + z'); // z is not defined
} catch (error) {
  console.error(error.message); // Output: Unrecognized variable(s): z
}
```

