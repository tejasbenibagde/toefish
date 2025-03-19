---
sidebar_position: 3
id: advanced-modular-functions
title: Advanced Modular Functions
sidebar_label: Advanced Modular Functions
---

# Advanced Modular Functions

This section covers advanced modular functions that handle specific cases such as finding inverses, greatest common divisors, and least common multiples in modular arithmetic.

---

## Functions Overview

- `modInverse(a: number, mod: number): number`
  Finds the modular multiplicative inverse of `a` under `mod`.

- `modGCD(a: number, b: number): number`
  Finds the greatest common divisor (GCD) of two numbers using modular arithmetic.

- `modLCM(a: number, b: number, mod: number): number`
  Computes the least common multiple (LCM) modulo `mod`.

---

## Detailed Documentation

### modInverse

#### Description:
Finds the modular multiplicative inverse of `a` under `mod`, such that:

(a × x) % mod = 1

#### Example:
```typescript
console.log(modInverse(3, 7)); // Output: 5 (since (3 * 5) % 7 = 1)
```
---

### modGCD

#### Description:
Finds the greatest common divisor (GCD) of two numbers using modular arithmetic.

#### Example:
```typescript
console.log(modGCD(9, 6)); // Output: 3
```
---

### modLCM

#### Description:
Computes the least common multiple (LCM) modulo mod, such that:

LCM(a, b) = (|a × b|) / GCD(a, b)

#### Example:
```typescript
console.log(modLCM(4, 6, 5)); // Output: 4 (since LCM(4, 6) % 5 = 4)
```
--- 

## Error Handling

1. **Division by zero**

- If a modular inverse does not exist (e.g., when `a` and `mod` are not coprime), an error is thrown.

```typescript
console.log(modInverse(6, 9)); // Throws: "Modular inverse does not exist."
```

2. **Invalid Inputs**:

- If inputs are not numbers, an error is thrown.

```typescript
console.log(modGCD("9", 6)); // Throws: "Invalid input: must be numbers."
```

--- 

## Advanced use Cases

### Combining with Other Functions
You can use these advanced modular functions in conjunction with basic operations for complex calculations.

```typescript
const result = modLCM(modGCD(9, 6), modInverse(3, 7), 10);
console.log(result); // Outputs: Combined result
```