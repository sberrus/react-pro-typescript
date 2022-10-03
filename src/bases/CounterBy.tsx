import { useState } from "react";

interface Props {
	initialValue?: number;
}

interface CounterState {
	counter: number;
	clicks: number;
}

const CounterBy = ({ initialValue = 5 }: Props) => {
	// states
	const [counter, setCounter] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	});

	// methods
	const handleClick = (count: number) => {
		setCounter(({ clicks, counter }) => ({
			counter: counter + count,
			clicks: clicks + 1,
		}));
	};

	//
	return (
		<>
			<h1>Counter By: {counter.counter}</h1>
			<h1>Clicks: {counter.clicks}</h1>
			<button
				onClick={() => {
					handleClick(1);
				}}
			>
				+1
			</button>
			<button
				onClick={() => {
					handleClick(5);
				}}
			>
				+5
			</button>
		</>
	);
};

export default CounterBy;
