# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.4.0] - Upcoming
### Added
- **Number Constructs**:\
Introducing two powerful new constructs designed to handle advanced numerical operations with precision and efficiency:
  - `BigNumber`:
    - A class built on top of Decimal.js to address common floating-point precision issues.
    - Supports arithmetic operations like addition, subtraction, multiplication, and division with complete precision.
    - Handles large numbers and operations seamlessly without precision loss.
    - Added utility methods for comparisons (isGreaterThan, isLessThan, isEqualTo).
  - `BigInt`:
    - A custom implementation leveraging native JavaScript BigInt for operations on integers of arbitrary size.
    - Supports arithmetic and comparison operations tailored for big integers.
    - Ensures compatibility with environments targeting ES2020 or higher.

## [1.3.0] - 2025-01-12

### Added

- **Algebra Section**:
  - Introduced a new section in the library dedicated to algebraic operations.
  - **Evaluator Class**:
    - A powerful new class to evaluate mathematical expressions with support for variables, constants, and custom functions.
    - Supports a wide range of algebraic operations and mathematical expressions.
    - Built-in constants like `pi` and `e` and functions such as `sqrt`, `log`, `sin`, `cos`, and many others.
    - Allows users to dynamically set variables and functions for evaluation.

## [1.2.0] - 2025-01-04

### Added

- **Prime and Factorial Functions**:

  - `modFactorial(n: number, mod: number): number`: Computes `n!` mod `mod` \). Example: `modFactorial(5, 7) => 3` (since `5! = 120` and `120 mod 7 = 3` ).

- **Cryptography-Oriented Modular Functions**:
  - `modularHash(data: string, mod: number): number`: Hashes a string using modular arithmetic.
  - `modularEncryption(base: number, key: number, mod: number): number`: Encrypts a value using modular exponentiation.
  - `modularDecryption(encrypted: number, key: number, mod: number): number`: Decrypts a value using modular arithmetic.

## [1.1.1] - 2025-01-01

### Updated

- Improved documentation for easier access to all features.
- Clarified usage examples and enhanced formatting in the README file.

## [1.1.0] - 2024-12-29

### First Stable Version

- Initial release of the package.
- Added support for various data types.
- Fixing various bugs and problems in the old functions
- Added a detaild documentation for easy access to all the features of the package
- Added a test suite to ensure the package works as expected.

## [1.1.0-beta.3] - 2024-12-08

### Added

- **Residue Classes and Operations**:
  - `isCoprime(a: number, b: number): boolean`: Checks if `a` and `b` are coprime (i.e., GCD(a, b) == 1).
  - `findResidue(a: number, mod: number): number`: Maps `a` to its residue class modulo `mod`. Example: `findResidue(-10, 3) => 2` (since -10 ≡ 2 (mod 3)).
  - `totient(n: number): number`: Computes Euler’s Totient Function, which gives the count of numbers coprime to `n`. Example: `totient(9) => 6` (1, 2, 4, 5, 7, 8 are coprime to 9).

## [1.1.0-beta.2] - 2024-12-01

### Added

- **Chain Class**:
  - `power(value: number)`: Raises the current value to the power of the given value.
  - `root(value: number)`: Calculates the nth root of the current value based on the given value.
- **Modular Operations**:

  - `modAdd`: Performs modular addition of two numbers.
  - `modSubtract`: Performs modular subtraction of two numbers.
  - `modMultiply`: Performs modular multiplication of two numbers.
  - `modDivide`: Performs modular division of two numbers.
  - `modulo`: Computes the modulo of a number by another number.

- **Exponentiation Operations**:

  - `modExp`: Performs modular exponentiation.
  - `modRoot`: Calculates modular roots.

- **Advanced Modular Operations**:
  - `modGCD`: Computes the greatest common divisor of two numbers using the modulus.
  - `modLCM`: Computes the least common multiple of two numbers using the modulus.
  - `modInverse`: Computes the modular inverse of a number under a given modulus.

## [1.1.0-beta.1] - 2024-11-24

### Added

- Initial release of the `Samasya` library as a beta version.
- Basic arithmetic operations: addition, subtraction, multiplication, division.
- Support for arithmetic operations with both numbers and arrays.
- Chainable arithmetic operations with the `Chain` class.
- API methods:
  - `add(a: number | number[], b?: number): number`
  - `subtract(a: number | number[], b?: number): number`
  - `multiply(a: number | number[], b?: number): number`
  - `divide(a: number | number[], b?: number): number`
  - `Chain(value: number)` for chaining operations.
  - `.add(value: number)`, `.subtract(value: number)`, `.multiply(value: number)`, `.divide(value: number)`, `.getResult()` for chaining arithmetic.
