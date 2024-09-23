# Assignment 1: Basic Calculator with React and useReducer

## Overview

In this assignment, you are tasked with implementing the core logic of a basic calculator using React's `useReducer` hook. The calculator should allow users to input digits, select basic arithmetic operations (`+`, `-`, `*`, `÷`), clear the input, and evaluate the result of operations.

Your primary responsibility is to write the reducer function that will manage the calculator's state by handling various actions.

## Objective

The goal of this assignment is to make the calculator functional by implementing the reducer logic for the following actions:

- **ADD_DIGIT**: Handle user input for digits (0-9) and decimals.
- **CHOOSE_OPERATION**: Allow users to select arithmetic operations (`+`, `-`, `*`, `÷`).
- **CLEAR**: Reset the calculator.
- **EVALUATE**: Perform the calculation based on the selected operation and display the result.

## Tasks

You are required to implement the reducer logic for the following actions:

### 1. ADD_DIGIT
   - Append digits to `currentOperand` when the user presses number buttons.
   - Ensure there are no multiple leading zeros (e.g., `0001` should not be allowed).
   - Prevent multiple decimal points in a single number.

### 2. CHOOSE_OPERATION
   - Store the selected operation (`+`, `-`, `*`, `÷`).
   - Move the `currentOperand` to `previousOperand` when an operation is selected, and reset `currentOperand` to allow for new input.

### 3. CLEAR
   - Reset the entire state of the calculator when the "AC" (All Clear) button is pressed.

### 4. EVALUATE
   - Perform arithmetic calculations based on the `previousOperand`, `currentOperand`, and the selected operation.
   - Display the result after the evaluation.

## Code Structure

- **reducer function**: You need to implement the reducer logic for handling the above actions to make the calculator functional.


