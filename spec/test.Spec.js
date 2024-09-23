import { reducer, ACTIONS } from '../src/App'; 

describe('Calculator Reducer Functionality', () => {

  // Test for adding digits
  it('should append a digit to the currentOperand', () => {
    const state = { currentOperand: "1" };
    const action = { type: ACTIONS.ADD_DIGIT, payload: { digit: "2" } };
    const result = reducer(state, action);
    expect(result.currentOperand).toBe("12");
  });

  // Test to prevent multiple leading zeros
  it('should prevent multiple leading zeroes', () => {
    const state = { currentOperand: "0" };
    const action = { type: ACTIONS.ADD_DIGIT, payload: { digit: "0" } };
    const result = reducer(state, action);
    expect(result.currentOperand).toBe("0");
  });

  // Test for choosing an operation
  it('should set the operation and move currentOperand to previousOperand', () => {
    const state = { currentOperand: "5" };
    const action = { type: ACTIONS.CHOOSE_OPERATION, payload: { operation: "+" } };
    const result = reducer(state, action);
    expect(result.operation).toBe("+");
    expect(result.previousOperand).toBe("5");
    expect(result.currentOperand).toBe(null);
  });

  // Test for clearing the calculator
  it('should clear the calculator state', () => {
    const state = {
      currentOperand: "123",
      previousOperand: "456",
      operation: "+",
    };
    const action = { type: ACTIONS.CLEAR };
    const result = reducer(state, action);
    expect(result.currentOperand).toBeUndefined();
    expect(result.previousOperand).toBeUndefined();
    expect(result.operation).toBeUndefined();
  });

  // Test for evaluating the expression
  it('should evaluate the expression correctly', () => {
    const state = {
      currentOperand: "3",
      previousOperand: "9",
      operation: "÷",
    };
    const action = { type: ACTIONS.EVALUATE };
    const result = reducer(state, action);
    expect(result.currentOperand).toBe("3");
    expect(result.previousOperand).toBeNull();
    expect(result.operation).toBeNull();
  });

});
