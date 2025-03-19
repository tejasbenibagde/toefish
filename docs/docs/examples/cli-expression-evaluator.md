---
id: cli-expression-evaluator-tutorial
title: Build a CLI Expression Evaluator
description: Learn how to use Samasya to create a powerful command-line tool for evaluating expressions, managing variables, and defining custom functions.
sidebar_label: CLI Expression Evaluator
---

# Build a CLI Expression Evaluator

In this tutorial, you'll learn how to use the **samasya** library to create a command-line application that:

- Evaluates mathematical expressions.
- Allows users to define and manage variables.
- Adds custom functions dynamically.
- Saves evaluation history for later review.

By the end of this tutorial, you'll have a fully functional **CLI Expression Evaluator** that demonstrates the power and flexibility of the samasya library.

:::tip

This Project Heavily Uses the `Evaluator` Class, please read it's documentation for more information [here](../algebra/evaluate.md)

:::

---

## Step 1: Setting Up the Project

1. **Create a new directory** for your project:

```bash
mkdir cli-expression-evaluator
cd cli-expression-evaluator
```

2. **Initialize the project**:

```bash
npm init -y
```

3. **Install dependencies**:

```bash
npm install samasya readline-sync
```

4. **Set up the project structure**:

```bash
cli-expression-evaluator/
├── index.js
├── variables.json
├── functions.json
├── history.json
```

- `index.js`: Main application file.
- `variables.json`: Stores user-defined variables.
- `functions.json`: Stores user-defined functions.
- `history.json`: Logs the evaluation history.

---

## Step 2: Writing the code

Copy the following code into your `index.js` file:

```javascript
const readline = require('readline-sync');
const fs = require('fs');
const { Evaluator } = require('samasya');

// File paths
const variablesFile = './variables.json';
const functionsFile = './functions.json';
const historyFile = './history.json';

// Load predefined variables and functions
let variables = {};
if (fs.existsSync(variablesFile)) {
  variables = JSON.parse(fs.readFileSync(variablesFile, 'utf8'));
}

let customFunctions = {};
if (fs.existsSync(functionsFile)) {
  customFunctions = JSON.parse(fs.readFileSync(functionsFile, 'utf8'));
}

// Initialize Evaluator
const evaluator = new Evaluator(variables);

// Load custom functions into the evaluator
for (const [name, funcBody] of Object.entries(customFunctions)) {
  evaluator.setFunction(name, eval(funcBody));
}

// Function to save evaluation history
function saveHistory(expression, result) {
  let history = [];
  if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
  }
  history.push({ expression, result, timestamp: new Date().toISOString() });
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2), 'utf8');
}

// Function to add a variable
function addVariable(name, value) {
  evaluator.setVariable(name, value);
  variables[name] = value;
  fs.writeFileSync(variablesFile, JSON.stringify(variables, null, 2), 'utf8');
  console.log(`Variable "${name}" set to ${value}`);
}

// Function to add a custom function
function addCustomFunction(name, funcBody) {
  try {
    const func = eval(funcBody); // Create a function from the body
    evaluator.setFunction(name, func);
    customFunctions[name] = funcBody;
    fs.writeFileSync(functionsFile, JSON.stringify(customFunctions, null, 2), 'utf8');
    console.log(`Function "${name}" added successfully.`);
  } catch (error) {
    console.error(`Failed to add function: ${error.message}`);
  }
}

// Main CLI loop
while (true) {
  console.log('\n--- Command-Line Expression Evaluator ---');
  console.log('1. Evaluate an expression');
  console.log('2. Add a variable');
  console.log('3. Add a custom function');
  console.log('4. View evaluation history');
  console.log('5. Exit');

  const choice = readline.question('Enter your choice: ');

  switch (choice) {
    case '1':
      const expression = readline.question('Enter the expression: ');
      try {
        const result = evaluator.evaluate(expression);
        console.log(`Result: ${result}`);
        saveHistory(expression, result);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
      break;

    case '2':
      const varName = readline.question('Enter variable name: ');
      const varValue = parseFloat(readline.question('Enter variable value: '));
      addVariable(varName, varValue);
      break;

    case '3':
      const funcName = readline.question('Enter function name: ');
      const funcBody = readline.question('Enter the function body (e.g., (a, b) => a + b): ');
      addCustomFunction(funcName, funcBody);
      break;

    case '4':
      if (fs.existsSync(historyFile)) {
        const history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
        console.log('\nEvaluation History:');
        history.forEach((entry, index) => {
          console.log(`${index + 1}. ${entry.expression} = ${entry.result}`);
        });
      } else {
        console.log('No history found.');
      }
      break;

    case '5':
      console.log('Goodbye!');
      process.exit();

    default:
      console.log('Invalid choice. Please try again.');
  }
}
```

---

## Step 3: Run the Program

1. Run the program:

```bash
node index.js
```

2. Follow the on-screen prompts to evaluate expressions, add variables, and create custom functions.

---

## Step 4: Download the Example Project

To save time you can also download the entire project as a zip file below.

[Download Zip](../../static/projects/cli-expression-evaluator.rar)

Unzip the project and then install the necessary dependencies.

---


