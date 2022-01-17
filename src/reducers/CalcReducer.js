const initialState = {
	currentOperand: null,
	previousOperand: null,
	operation: null,
	evaluated: false,
};

const evaluate = ({ calc: { currentOperand, previousOperand, operation } }) => {
	const prev = parseFloat(previousOperand);
	const current = parseFloat(currentOperand);
	if (isNaN(prev) || isNaN(current)) {
		return '0';
	}

	let computation = '';

	switch (operation) {
		case '+':
			computation = prev + current;
			break;
		case '-':
			computation = prev - current;
			break;
		case '/':
			computation = prev / current;
			break;
		case 'x':
			computation = prev * current;
			break;
		default:
			return '';
	}

	return computation.toString();
};

const CalcReducer = (state, { type, payload }) => {
	if (state === undefined) {
		return initialState;
	}
	switch (type) {
		case 'ADD_DIGIT':
			if (state.drag.constructorModeEnable) {
				return state.calc;
			}

			if (
				state.calc.evaluated ||
				(state.calc.currentOperand === null && payload !== '.')
			) {
				return {
					...state.calc,
					currentOperand: payload,
					evaluated: false,
				};
			}

			if (state.calc.currentOperand.length === 11) {
				return state.calc;
			}

			if (payload === '0' && state.calc.currentOperand === null) {
				return state.calc;
			}

			if (payload === '.' && state.calc.currentOperand.includes('.')) {
				return state.calc;
			}

			return {
				...state.calc,
				currentOperand: `${state.calc.currentOperand}${payload}`,
			};

		case 'CHOOSE_OPERATION':
			if (state.drag.constructorModeEnable) {
				return state.calc;
			}

			if (
				state.calc.currentOperand === null &&
				state.calc.previousOperand == null
			) {
				return state.calc;
			}

			if (
				(!state.calc.evaluated && state.calc.currentOperand === null) ||
				(state.calc.evaluated &&
					state.calc.currentOperand === state.calc.previousOperand)
			) {
				return {
					...state.calc,
					operation: payload,
				};
			}

			if (state.calc.previousOperand == null) {
				return {
					...state.calc,
					operation: payload,
					previousOperand: state.calc.currentOperand,
					currentOperand: null,
				};
			}

			return {
				...state.calc,
				currentOperand: evaluate(state),
				previousOperand: evaluate(state),
				evaluated: true,
				operation: payload,
			};

		case 'EVALUATE':
			if (state.drag.constructorModeEnable) {
				return state.calc;
			}

			if (
				state.calc.operation === null ||
				state.calc.currentOperand === null ||
				state.calc.previousOperand === null
			) {
				return state.calc;
			}

			return {
				...state.calc,
				evaluated: true,
				currentOperand: evaluate(state),
				previousOperand: null,
				operation: null,
			};

		default:
			return state.calc;
	}
};

export default CalcReducer;
