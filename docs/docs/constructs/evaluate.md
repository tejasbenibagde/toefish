---
id: big-number-big-int
title: BigNumber and BigInt Constructs
sidebar_position: 2
sidebar_label: BigNumber and BigInt Constructs
---

# BigNumber and BigInt Constructs

This page provides an overview of the `BigNumber` and `BigInt` constructs, designed to handle precise calculations and operations on large numbers.

---

## BigNumber

The `BigNumber` class is built on top of [Decimal.js](https://mikemcl.github.io/decimal.js/) and addresses common floating-point precision issues encountered in JavaScript.

### Features

- **Precision Arithmetic**: 
  - Handles addition, subtraction, multiplication, and division with precision.
  - Prevents common floating-point precision errors (e.g., `0.1 + 0.2 !== 0.3`).
- **Large Number Support**: 
  - Operates seamlessly on very large numbers.
- **Utility Methods**:
  - Comparisons: `isGreaterThan`, `isLessThan`, `isEqualTo`.
  - Conversion: Methods to convert between different formats.

### Example Usage

```typescript
import { BigNumber } from 'samasya';

// Create BigNumber instances
const num1 = new BigNumber('0.1');
const num2 = new BigNumber('0.2');

// Perform precise arithmetic
const result = num1.add(num2);
console.log(result.toString()); // "0.3"

// Comparisons
console.log(num1.isLessThan(num2)); // true
console.log(num1.isEqualTo(num2)); // false
```

---

## BigInt

The `BigInt` class is a custom implementation leveraging JavaScript's native BigInt type. It allows operations on integers of arbitrary size while ensuring compatibility with ES2020+ environments.

### Features

- **Arbitrary-Precision Integers**:
  - Perform arithmetic operations on extremely large or small integers.
- **Comparison Methods**:
  - Methods like isGreaterThan, isLessThan, and isEqualTo.
- **Environment Compatibility**:
  - Designed to work with modern JavaScript environments targeting ES2020 or higher.


### Example usage

```typescript
import { BigInt } from 'samasya';

// Create BigInt instances
const bigInt1 = new BigInt(123456789123456789123456789n);
const bigInt2 = new BigInt(987654321987654321987654321n);

// Perform arithmetic operations
const sum = bigInt1.add(bigInt2);
console.log(sum.toString()); // "1111111111111111111111111110"

// Comparisons
console.log(bigInt1.isLessThan(bigInt2)); // true
console.log(bigInt1.isEqualTo(bigInt2)); // false
```

--- 

## Why Use These Constructs?

- **Accurate Calculations**:
  - BigNumber ensures precision for floating-point arithmetic.
  - BigInt handles integer operations without overflow or rounding issues.
- **Large Number Operations**:
  - Work with extremely large numbers seamlessly.
- **Cross-Environment Compatibility**:
  - Leverages modern JavaScript features to ensure consistent behavior.

---

:::info Related Links

- [**Decimal.js Documentation**](https://mikemcl.github.io/decimal.js/)
- [**JavaScript BigInt Documentation**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

:::