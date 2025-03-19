---
sidebar_position: 2
id: modular-exponentiation-powers
title: Modular Exponentiation and Powers
sidebar_label: Exponentiation and Powers
---

# Modular Exponentiation and Powers

This section covers advanced modular arithmetic operations, focusing on exponentiation and roots under a modulus. These operations are fundamental in cryptography, number theory, and modular equations.

---

## Functions Overview

1. `modExp(base: number, exp: number, mod: number): number`

Efficiently calculates $(\text{base}^{\text{exp}}) \% \text{mod}$ using **modular exponentiation** (e.g., repeated squaring).
- **Example**:
```typescript
modExp(2, 10, 1000); // Output: 24 (since (2^10) % 1000 = 24)44
```

2. `modRoot(a: number, n: number, mod: number): number[]`

Finds the modular roots of a under mod (if they exist). This solves modular equations such as: **x<sup>n</sup> ≡ a (mod mod)**

- **Example**:
Solve **x<sup>2</sup> ≡ a (mod p)** for a = 4 and p = 7:
```typescript
modRoot(4, 2, 7); // Output: [2, 5] (both are solutions since (2^2) % 7 = 4 and (5^2) % 7 = 4)
```

--- 

## Parameters

Each function accepts the following parameters:

- `base` / `a`: The base number or value for the operation.
- `exp` / `n`: The exponent or degree of the root to compute.
- `mod`: The modulus under which the operation is performed.

--- 

## Return Value

- `modExp`: Returns a single number, the result of the modular exponentiation.
- `modRoot`: Returns an array of numbers, representing all valid roots (if any exist).

--- 

## Examples

### modExp

Efficiently compute powers under a modulus:

```typescript
console.log(modExp(3, 5, 13)); // Output: 9 (since (3^5) % 13 = 9)
```

--- 

### modRoot

Find modular roots (if they exist):

```typescript
console.log(modRoot(9, 2, 11)); 
// Output: [3, 8] (both are solutions since (3^2) % 11 = 9 and (8^2) % 11 = 9)
```

--- 

## Error Handling

1. **Invalid Modulus**: If the modulus is not a positive integer, an error is thrown.

```typescript
modExp(2, 3, -5); 
// Throws: "Modulus must be a positive integer."
```
2. **No Modular Roots**: If no roots exist for a given input, modRoot returns an empty array.

```typescript
console.log(modRoot(10, 2, 7)); 
// Output: [] (no solutions exist)
```
3. **Invalid Input Types**: If inputs are not numbers, an error is thrown.

```typescript
modExp("2", 3, 5); 
// Throws: "Invalid input: must be a number."
```
---

## Advanced Use Cases: 

### Efficient Cryptographic Computations

The `modExp` function is commonly used in cryptography for large exponentiations:

```typescript
const largeExp = modExp(7, 1234567, 1000003); 
console.log(largeExp); // Output: Computed value
```

---

### Solving Quadratic Congruences
Use `modRoot` to find roots of modular quadratic equations:

```typescript
// Solve x^2 ≡ 4 (mod 13)
const roots = modRoot(4, 2, 13);
console.log(roots); // Output: [2, 11]
```

--- 

## Notes

- Modular exponentiation is highly efficient and can handle very large numbers.
- Modular roots are not always guaranteed to exist. Ensure the inputs are valid for the operation.
