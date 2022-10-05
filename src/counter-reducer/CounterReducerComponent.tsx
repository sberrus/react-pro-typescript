import { useReducer } from "react";
// interfaces
import { CounterState } from "./interfaces/interfaces";
// reducers
import { counterReducer } from "./state/counterReducer";
// actions
import * as CounterActions from "./actions/actions";

const INITIAL_STATE: CounterState = {
	counter: 10,
	previous: 0,
	changes: 0,
};

const CounterReducerComponent = () => {
	// reducer
	const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	// methods
	const handleReset = () => {
		dispatch(CounterActions.doReset());
	};
	const increaseBy = (value: number) => {
		dispatch(CounterActions.doIncreaseBy(value));
	};

	//
	return (
		<>
			<h1>Counter Reducer Segmentado</h1>
			<pre>{JSON.stringify(counterState, null, 2)}</pre>
			<button onClick={handleReset}>reset</button>
			<button
				onClick={() => {
					increaseBy(1);
				}}
			>
				+1
			</button>
			<button
				onClick={() => {
					increaseBy(5);
				}}
			>
				+5
			</button>
			<button
				onClick={() => {
					increaseBy(10);
				}}
			>
				+10
			</button>
		</>
	);
};

export default CounterReducerComponent;
