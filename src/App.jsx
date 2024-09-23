import { useReducer } from "react";
import Buttons from "./components/Buttons"
import Operations from "./components/Operations"
import "./App.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  EVALUATE: "evaluate",
};

// Reducer function
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // Handle adding digits (make sure not to add multiple zeroes or multiple decimal points)
      break;

    case ACTIONS.CHOOSE_OPERATION:
      // Handle choosing operations (only if there is a current operand, otherwise store it)
      break;

    case ACTIONS.CLEAR:
      // Handle clearing the calculator (reset state)
      break;

    case ACTIONS.EVALUATE:
      // This is given for you as a example, uncomment it.
      // if (
      //   state.operation == null ||
      //   state.currentOperand == null ||
      //   state.previousOperand == null
      // ) {
      //   return state;
      // }

      // return {
      //   ...state,
      //   overwrite: true,
      //   previousOperand: null,
      //   operation: null,
      //   currentOperand: evaluate(state),
      // };

    default:
      return state;
  }
}

// Helper function to evaluate an expression
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return "";
  }
  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

// Main App component
function App() {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
      reducer,
      {}
    )
  
    return (
      <div className="calculator-grid">
        <div className="output">
          <div>
            {formatOperand(previousOperand)} {operation}
          </div>
          <div>{formatOperand(currentOperand)}</div>
        </div>
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
        <Operations operation="÷" dispatch={dispatch} />
        <Buttons digit="2" dispatch={dispatch} />
        <Buttons digit="1" dispatch={dispatch} />
        <Buttons digit="3" dispatch={dispatch} />
        <Operations operation="*" dispatch={dispatch} />
        <Buttons digit="4" dispatch={dispatch} />
        <Buttons digit="5" dispatch={dispatch} />
        <Buttons digit="6" dispatch={dispatch} />
        <Operations operation="+" dispatch={dispatch} />
        <Buttons digit="7" dispatch={dispatch} />
        <Buttons digit="8" dispatch={dispatch} />
        <Buttons digit="9" dispatch={dispatch} />
        <Operations operation="-" dispatch={dispatch} />
        <Buttons digit="." dispatch={dispatch} />
        <Buttons digit="0" dispatch={dispatch} />
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </div>
    )
  }

export default App;


// Export the reducer function
export { reducer };
