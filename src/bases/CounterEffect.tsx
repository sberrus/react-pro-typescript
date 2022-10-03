import { useEffect, useState } from "react";
// constant
const MAX_VALUE = 10;

//
const CounterEffect = () => {
	// states
	const [counter, setCounter] = useState(8);

	// methods
	const handleClick = () => {
		if (counter >= MAX_VALUE) {
			return;
		}
		setCounter((prev) => prev + 1);
	};

	// effect
	useEffect(() => {
		return () => {};
	}, []);

	//
	return (
		<>
			<h1>Counter effect: {counter}</h1>
			<button onClick={handleClick}>+1</button>
		</>
	);
};

export default CounterEffect;
