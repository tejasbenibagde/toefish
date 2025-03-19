---
sidebar_position: 2
id: chaining-operations
title: Chaining Operations
sidebar_label: Chaining Operations
---


# Chaining Operations

`samasya` provides a powerful **Chaining Class** that allows users to perform multiple arithmetic operations in a single, fluent syntax. This class is ideal for workflows where successive calculations need to be performed on a single value.

---

## Class Overview

### Constructor

- `Chain(value: number)`: Initializes a new chainable instance with a starting value.

### Methods

- `.add(value: number)`: Adds a number to the current value.
- `.subtract(value: number)`: Subtracts a number from the current value.
- `.multiply(value: number)`: Multiplies the current value by a number.
- `.divide(value: number)`: Divides the current value by a number.
- `.power(exponent: number)`: Raises the current value to the specified exponent.
- `.root(nthRoot: number)`: Calculates the nth root of the current value.
- `.getResult()`: Returns the final value after all operations.

--- 

## Examples

### Basic Chaining Example

```typescript
import { Chain } from 'samasya';

const result = new Chain(10)
  .add(5)       // 15
  .multiply(2)  // 30
  .subtract(10) // 20
  .divide(4)    // 5
  .getResult();

console.log(result); // Output: 5
```
### Advanced Example with Power and Root

```typescript
import { Chain } from 'samasya';

const result = new Chain(4)
  .power(3)    // 64
  .root(2)     // 8
  .subtract(2) // 6
  .getResult();

console.log(result); // Output: 6
```

--- 

## Error Handling

samasya's chaining class ensures robust error handling for edge cases:

1. **Division by Zero**: If a division by zero is attempted during chaining, an error is thrown.

```typescript
const result = new Chain(10)
  .divide(0); // Throws: "Division by zero is not allowed."
```

2. **Invalid Root Degree**: If the root degree is zero during chaining, an error is thrown.

```typescript
const result = new Chain(16)
  .root(0); // Throws: "Root cannot be zero."
```

--- 

## Advantages of Chaining

1. **Readable Syntax**: Perform multiple operations in a single, fluent syntax.
2. **Stateful Operations**: Maintain the intermediate state between operations.
3. **Error Handling**: Ensure safe and predictable results with built-in checks.

--- 

## Combining Chaining with Arrays

While chaining operates on single numbers, you can combine it with other `samasya` functions for advanced workflows.

```typescript

import { add, Chain } from 'samasya';

const arraySum = add([1, 2, 3]); // 6

const result = new Chain(arraySum)
  .power(2) // 36
  .divide(6) // 6
  .getResult();

console.log(result); // Output: 6
```

