import { useState } from "react";

interface Props {
	initialValue?: number;
}

const CounterBy = ({ initialValue = 5 }: Props) => {
	// states
	const [counter, setCounter] = useState({
		counter: initialValue,
		clicks: 0,
	});

	// methods
	const handleClick = (count: number) => {
		setCounter((prev) => ({
			counter: prev.counter + count,
			clicks: prev.clicks + 1,
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
