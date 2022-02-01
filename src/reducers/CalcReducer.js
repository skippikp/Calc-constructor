import { ADD_DIGIT, CHOOSE_OPERATION, EVALUATE } from '../actions/constants';

const initialState = {
	currentOperand: null,
	previousOperand: null,
	operation: null,
	evaluated: false,
};

const evaluate = ({ currentOperand, previousOperand, operation }) => {
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

const calcReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_DIGIT:
			if (state.currentOperand === null && payload === '.') {
				return {
					...state,
					currentOperand: '0.',
				};
			}

			if (
				state.evaluated ||
				(state.currentOperand === null && payload !== '.')
			) {
				return {
					...state,
					currentOperand: payload,
					evaluated: false,
				};
			}

			if (state.currentOperand.length === 11) {
				return state;
			}

			if (
				payload === '0' &&
				(state.currentOperand === null || state.currentOperand === '0')
			) {
				return state;
			}

			if (payload === '.' && state.currentOperand.includes('.')) {
				return state;
			}

			return {
				...state,
				currentOperand: `${state.currentOperand}${payload}`,
			};

		case CHOOSE_OPERATION:
			if (state.currentOperand === null && state.previousOperand == null) {
				return state;
			}

			if (
				(!state.evaluated && state.currentOperand === null) ||
				(state.evaluated && state.currentOperand === state.previousOperand) ||
				(state.previousOperand &&
					state.currentOperand === null &&
					state.operation)
			) {
				return {
					...state,
					operation: payload,
				};
			}

			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload,
					previousOperand: state.currentOperand,
					currentOperand: null,
				};
			}

			return {
				...state,
				currentOperand: evaluate(state),
				previousOperand: evaluate(state),
				evaluated: true,
				operation: payload,
			};

		case EVALUATE:
			if (
				state.operation === null ||
				state.currentOperand === null ||
				state.previousOperand === null
			) {
				return state;
			}

			return {
				...state,
				evaluated: true,
				currentOperand: evaluate(state),
				previousOperand: null,
				operation: null,
			};

		default:
			return state;
	}
};

export default calcReducer;
