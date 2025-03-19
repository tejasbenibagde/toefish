---
sidebar_position: 6
id: cryptography-modular
title: Cryptography-Oriented Modular Functions
sidebar_label: Cryptography Functions
---

# Cryptography-Oriented Modular Functions

This section focuses on modular arithmetic functions designed for cryptographic applications. These functions can handle hashing, encryption, and decryption tasks using modular techniques.

---

## Functions Overview

### Cryptographic Modular Functions

- `modularHash(data: string, mod: number): number`  
  Hashes a string using modular arithmetic.

- `modularEncryption(base: number, key: number, mod: number): number`  
  Performs encryption via modular exponentiation.

- `modularDecryption(encrypted: number, key: number, mod: number): number`  
  Decrypts an encrypted value using modular arithmetic.

---

## Detailed Documentation

### modularHash

**Description**:  
Hashes a string using modular arithmetic. The hash value is computed by iterating over the characters of the input string and applying modular arithmetic.

**Example**:
```typescript
console.log(modularHash('hello', 97)); // Output: 24
console.log(modularHash('world', 101)); // Output: 78
```

**Validation**:

- Throws an error if `data` is not a string.
- Throws an error if `mod` is not a positive integer.

**Error Handling**:
```typescript
expect(() => modularHash(123, 97)).toThrow('Data must be a string.');
expect(() => modularHash('hello', -5)).toThrow('Modulus must be a positive integer.');
```

--- 

### modularEncryption

**Description**:

Encrypts a value using modular exponentiation:

**Example**:

```typescript
console.log(modularEncryption(5, 3, 13)); // Output: 8
console.log(modularEncryption(7, 4, 10)); // Output: 1
```
**Validation**:

- Throws an error if `mod` is less than or equal to 0.
- Throws an error if `base`, `key`, or `mod` are not integers.

---


### modularDecryption

**Description**:

Decrypts a value using modular arithmetic. This function is typically used with encryption algorithms that rely on modular exponentiation.

**Example**:

```typescript
console.log(modularDecryption(8, 3, 13)); // Output: 5
console.log(modularDecryption(1, 4, 10)); // Output: 7
```

**Validation**:

- Throws an error if `mod` is less than or equal to 0.
- Throws an error if `encrypted`, `key`, or `mod` are not integers.

--- 

## Additional Notes

### Applications of modularHash
- **Data Integrity**: Used to verify the integrity of data using hash comparisons.
- **Key Derivation**: Can serve as a simplified hash function for cryptographic keys.
### Applications of modularEncryption and modularDecryption
- **RSA Algorithm**: Modular exponentiation is a core component of RSA encryption and decryption.
- **Secure Communication**: Helps in securely encrypting and decrypting messages.