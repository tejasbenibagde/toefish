---
sidebar_position: 1
id: basic-modular-operations
title: Basic Modular Operations
sidebar_label: Basic Modular Operations
---

# Basic Modular Operations

In this section, we will cover the fundamental operations in modular arithmetic. These operations are essential for performing calculations within a specified modulus.

---

## Functions Overview

- `modulo(a: number, b: number): number`
Computes the remainder when `a` is divided by `b`.

- `modAdd(a: number, b: number, mod: number): number`
Adds two numbers modulo `mod`.

- `modSubtract(a: number, b: number, mod: number): number`
Subtracts two numbers modulo `mod`.

- `modMultiply(a: number, b: number, mod: number): number`
Multiplies two numbers modulo `mod`.

- `modDivide(a: number, b: number, mod: number): number`
Divides `a` by `b` modulo `mod`. This operation requires the modular multiplicative inverse of `b`.

## Parameters

- **a**: The first number (or array of numbers) to operate on.
- **b**: The second number (or array of numbers) to operate with (if applicable).
- **mod**: The modulus to apply for the operation.

## Return Value

Each function returns a number representing the result of the modular operation.

---

## Examples

### `modulo`

```typescript
console.log(modulo(10, 3)); // Output: 1
```

### `modAdd`

```typescript
console.log(modAdd(5, 7, 6)); // Output: 0 (since (5 + 7) % 6 = 0)
```

### `modSubtract`

```typescript
console.log(modSubtract(7, 5, 6)); // Output: 2 (since (7 - 5) % 6 = 2)
```

### `modMultiply`

```typescript
console.log(modMultiply(5, 7, 6)); // Output: 5 (since (5 * 7) % 6 = 5)
```

### `modDivide`

```typescript
console.log(modDivide(4, 3, 5)); // Output: 3 (since 4 * 3^-1 mod 5 = 3)
```
--- 

## Error Handling

1. `Division by Zero`: If a division by zero is attempted during modDivide, an error is thrown.

```typescript
console.log(modDivide(4, 0, 5)); // Throws: "Division by zero is not allowed."
```

2. `Invalid Inputs`: If inputs are not numbers, an error is thrown.

```typescript
console.log(modAdd("5", 7, 6)); // Throws: "Invalid input: must be a number."
```

--- 

## Advanced Use Cases

### Chaining with Other Operations

You can combine these modular operations with other arithmetic operations for complex calculations.

```typescript
const result = new Chain(10)
  .add(modulo(10, 3)) // Adds the result of modulo operation
  .subtract(2)
  .getResult();
console.log(result); // Output: 9
```

--- 

## Notes
- Ensure the modulus (`mod`) is always positive and non-zero for valid results.
- For `modDivide`, ensure that the divisor has a modular multiplicative inverse under the given modulus.