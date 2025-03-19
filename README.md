# [samasya](https://samasya-docs.netlify.app)

[![NPM Version](https://img.shields.io/npm/v/samasya)](https://www.npmjs.com/package/samasya)
[![License](https://img.shields.io/npm/l/samasya)](https://github.com/tejasbenibagde/samasya/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/samasya)](https://www.npmjs.com/package/samasya)

samasya is a TypeScript-based mathematical library inspired by math.js, designed to provide a comprehensive set of mathematical functions and utilities for JavaScript and TypeScript projects.

## 📚 Documentation

Explore the full documentation at **[https://samasya-docs.netlify.app](https://samasya-docs.netlify.app)**. It includes detailed usage examples, API references, and more.


## 🌟 Features

### Core Arithmetic Operations
- **Basic Arithmetic**: Addition, subtraction, multiplication, and division for both numbers and arrays.
- **Modular Arithmetic**: Operations such as modulo, modular addition, subtraction, multiplication, and exponentiation.

### Advanced Mathematical Capabilities
- **Power and Root Calculations**: Compute powers and nth roots of numbers.
- **Prime and Factorial Functions**: Compute factorials with modulus and enhance prime-related functionalities.

### Algebraic and Expression Evaluation
- **Algebraic Evaluator**: A new `Evaluator` class that supports algebraic expressions with variables, constants, and built-in functions (e.g., `sqrt`, `log`, `sin`, `cos`).
- **Chaining Operations**: Chain multiple arithmetic operations in a fluent API style.
- **Dynamic Expressions**: Evaluate complex algebraic expressions dynamically, with support for custom functions and variables.

### Cryptography-Oriented Features
- **Modular Cryptographic Functions**: Perform modular hashing, encryption, and decryption.

### High-Precision and Big Numbers
- **BigNumber**: Built on [Decimal.js](https://mikemcl.github.io/decimal.js/) for handling large floating-point numbers with complete precision.
- **BigInt**: A custom implementation leveraging JavaScript's native `BigInt` for arbitrary-sized integer operations.

### Robust Design
- **Error Handling**: Comprehensive error handling for invalid inputs and edge cases.


## 📦 Installation

You can install samasya using npm:

```bash
npm install samasya
```

## 🚀 Quick Start

### Basic Arithmetic Example

```typescript
import { add, multiply } from 'samasya';

console.log(add(2, 3)); // Output: 5
console.log(multiply([2, 3, 4])); // Output: 24
```

### Chaining Example

```typescript
import { Chain } from 'samasya';

const result = new Chain(5).add(3).multiply(2).getResult();
console.log(result); // Output: 16
```

## 🛠 Development

To set up the project for development:

1. Clone the repository:

   ```bash
   git clone https://github.com/tejasbenibagde/samasya.git
   cd samasya
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests:

   ```bash
   npm test
   ```

4. Build the project:
   ```bash
   npm run build
   ```

## Contributing

We welcome contributions to samasya! Please see our [Contributing Guide](CONTRIBUTING.md) for more details on how to get started.

## License

samasya is [MIT licensed](LICENSE).

## Author

samasya is created and maintained by [Tejas Benibagde](https://github.com/tejasbenibagde).

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub issues page](https://github.com/tejasbenibagde/samasya/issues).

## Acknowledgements

This project is inspired by [math.js](https://mathjs.org/). We're grateful to the math.js team for their excellent work, which has served as a reference for many of the features planned for samasya.

## Roadmap

- Add expression parsing and evaluation
- Develop unit conversion capabilities
- Implement matrix and vector operations
- Add complex number support
- Develop statistical functions
- Implement symbolic computation features

Stay tuned for updates!
