---
sidebar_position: 5
id: prime-factorial
title: Prime and Factorial Functions
sidebar_label: Prime & Factorial
---

# Prime and Factorial Functions

This section focuses on functions that deal with prime numbers and factorial operations under modular constraints.

---

## Functions Overview

### Prime and Factorial Operations

- `modFactorial(n: number, mod: number): number`  
  Computes the factorial of a number `n`, reduced modulo `mod`.

---

## Detailed Documentation

### modFactorial

**Description**:  
Calculates `n! % mod` using modular arithmetic to avoid overflow for large values of `n`.

**Example**:

```typescript
console.log(modFactorial(5, 7)); // Output: 1 (since 5! = 120, 120 % 7 = 1)
console.log(modFactorial(4,10)) // Output: 4 (since 4! = 24, 24 % 10 = 4)
console.log(modFactorial(0, 13)); // Output: 1 (0! is defined as 1)
```

**Validation Checks**:

- Throws an error if `n` is negative, as factorials are only defined for non-negative integers.
- Throws an error if `mod` is zero or negative.
- Throws an error if either `n` or `mod` is not an integer.

---

## Additional Notes

### Performance Optimization

The `modFactorial` function uses modular reduction at each step of the multiplication, making it efficient even for relatively large values of `n`.

**Example:**

```typescript
console.log(modFactorial(20, 13));
// Output: 9 (calculating 20! % 13 without directly computing 20!)
```

### Applications

- **Cryptographic Algorithms**: Modular arithmetic is heavily used in cryptographic algorithms, including RSA.
- **Combinatorics**: When computing combinations or permutations modulo a number, factorial computations modulo `mod` are often required.

---

## Full Code Example

Here’s how you can combine `modFactorial` with other modular operations:

```typescript
import { modFactorial } from './modFactorial';

const factorial = modFactorial(7, 5);
console.log(`7! % 5 = ${factorial}`); // Output: 3
```
