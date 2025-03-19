---
sidebar_position: 1
id: basic-arithmetic-operations
title: Basic Arithmetic Operations
sidebar_label: Basic Arithmetic Operations
---

# Basic Arithmetic Operations

samasya provides a set of functions to perform basic arithmetic operations such as `addition`, `subtraction`, `multiplication`, and `division`. These functions support both individual `numbers` and `arrays of numbers`, making them versatile for a wide range of applications.

Additionally, `samasya` includes advanced operations for **power** and **roots**, allowing you to perform exponential and root-based calculations efficiently.

## Functions Overview

- `add(a: number | number[], b?: number): number`
- `subtract(a: number | number[], b?: number): number`
- `multiply(a: number | number[], b?: number): number`
- `divide(a: number | number[], b?: number): number`
- `power(base: number, exponent: number): number`
- `root(value: number, n: number): number`

### Parameters

#### Basic Arithmetic

- `a`: A number or an array of numbers to perform the operation on.
- `b`: (Optional) A second number to perform the operation with. When `a` is an array, `b` is ignored.

#### Power and Roots

- `base`: A number to be raised to the power of `exponent`.
- `exponent`: The power to which the base number will be raised.
- `value`: A number for which the nth root will be calculated.
- `n`: The degree of the root to calculate (e.g., square root, cube root).

### Return Value

The result of the operation, either a single number or a processed result from an array of numbers.

---

## Examples

### Using Two Numbers

```typescript
import { add, multiply, divide, subtract } from 'samasya';

// Addition
console.log(add(2, 3)); // Output: 5

// Multiplication
console.log(multiply(4, 5)); // Output: 20

// Division
console.log(divide(10, 2)); // Output: 5

// Subtraction
console.log(subtract(7, 3)); // Output: 4
```

### Using Two Numbers

samasya allows operations on arrays, processing them sequentially.

```typescript
import { add, multiply, divide, subtract } from 'samasya';

// Addition
console.log(add([1, 2, 3, 4])); // Output: 10

// Multiplication
console.log(multiply([2, 3, 4])); // Output: 24

// Subtraction
console.log(subtract([10, 2, 1])); // Output: 7

// Division
console.log(divide([100, 2, 5])); // Output: 10
```

---

## Power 

The `power` function raises a base number to a specified exponent.

```typescript
import { power } from 'samasya';

console.log(power(2, 3)); // Output: 8 (2^3 = 8)
console.log(power(5, 0)); // Output: 1 (Any number^0 = 1)
console.log(power(3, -2)); // Output: 0.111... (~1/9)

```
---

## Roots

The `root` function calculates the nth root of a number.

```typescript
import { root } from 'samasya';

console.log(root(9, 2)); // Output: 3 (Square root of 9)
console.log(root(27, 3)); // Output: 3 (Cube root of 27)
console.log(root(16, 4)); // Output: 2 (Fourth root of 16)
console.log(root(16, -2)); // Output: 0.25 (Inverse square root)
```

--- 

## Error Handling

Samasya includes error handling for invalid inputs:

1. **Division by Zero**: If any division involves a zero denominator, an error is thrown.

```typescript
console.log(divide(10, 0)); // Throws: "Division by zero is not allowed."
```

2. **Empty Arrays**: If an empty array is provided, an error is thrown.

```typescript
console.log(add([])); // Throws: "Input array must not be empty."
```

3. **Non-Numeric Inputs**: If inputs are not numbers or arrays of numbers, an error is thrown.

```typescript
console.log(add("2", "3")); // Throws: "Invalid input: must be a number or array of numbers
```

4. **Invalid Root Degree**: If the root degree is zero, an error is thrown.

```typescript
console.log(root(16, 0)); // Throws: "Root cannot be zero."
```

5. **Non-Numeric Inputs**: If inputs are not numbers or arrays of numbers, an error is thrown.

```typescript
console.log(add("2", "3")); // Throws: "Invalid input: must be a number or array of numbers."
```

--- 

## Advanced Use Cases

### Chaining with other operations: 
samasya’s chaining functionality allows combining basic arithmetic with more complex operations.

```typescript
import { Chain } from 'samasya';

const result = new Chain(5)
  .add(3)
  .multiply(2)
  .subtract(4)
  .divide(2)
  .getResult();

console.log(result); // Output: 6
```

### Mixing arrays and numbers:

You can mix arrays and numbers in your workflow by combining multiple functions.

```typescript
import { add, multiply } from 'samasya';

const arrayResult = multiply(add([1, 2, 3]), 2);
console.log(arrayResult); // Output: 12 ( (1 + 2 + 3) * 2 )
```
