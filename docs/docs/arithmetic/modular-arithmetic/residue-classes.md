---
sidebar_position: 4
id: residue-classes
title: Residue Classes and Operations
sidebar_label: Residue Classes
---

# Residue Classes and Operations

This section focuses on working with equivalence classes of numbers under a modulus, as well as related mathematical concepts.

---

## Functions Overview

### Residue Classes

- `isCoprime(a: number, b: number): boolean`  
  Checks if `a` and `b` are coprime (i.e., their greatest common divisor (GCD) is 1).

- `findResidue(a: number, mod: number): number`  
  Maps `a` to its residue class modulo `mod`.

- `totient(n: number): number`  
  Computes Euler’s Totient Function, which gives the count of integers less than `n` that are coprime to `n`.

---

## Detailed Documentation

### isCoprime

**Description**:  
Determines if two integers `a` and `b` are coprime by checking if their GCD is equal to 1.

**Example**:
```typescript
console.log(isCoprime(8, 15)); // Output: true (GCD(8, 15) = 1)
console.log(isCoprime(12, 18)); // Output: false (GCD(12, 18) = 6)
```
---

### findResidue

**Description**:
Maps the integer `a` to its residue class modulo `mod`. This ensures the result is a non-negative integer in the range [0, mod).

**Example**:
```typescript
console.log(findResidue(-10, 3)); // Output: 2 (since -10 ≡ 2 (mod 3))
console.log(findResidue(10, 4));  // Output: 2 (since 10 ≡ 2 (mod 4))
```

---

### totient

**Description**:
Calculates Euler’s Totient Function, which counts the number of integers less than `n` that are coprime to `n`.

**Example**:
```typescript
console.log(totient(9)); // Output: 6 (1, 2, 4, 5, 7, 8 are coprime to 9)
console.log(totient(10)); // Output: 4 (1, 3, 7, 9 are coprime to 10)
```

--- 

## Additional Notes

### Applications of *findResidue*

The `findResidue` function is useful for preprocessing numbers into their modular equivalence classes, ensuring they fall within the expected range for subsequent operations.

**Example**:
```javascript
const residue = findResidue(-20, 7); // Maps -20 to its residue class modulo 7
console.log(residue); // Output: 1
```

### Combining *totient* with Other Modular Operations

Euler’s Totient Function is fundamental in modular arithmetic and number theory, particularly in applications like RSA encryption or finding modular inverses.



