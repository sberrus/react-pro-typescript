// imports
import { useCounter } from "../hooks/useCounter";

//
const CounterHook = () => {
	const { counter, counterElement, handleClick } = useCounter({ maxCount: 15 });
	//
	return (
		<>
			<h1>Counter effect: </h1>
			<h2 ref={counterElement}>{counter}</h2>
			<button onClick={handleClick}>+1</button>
		</>
	);
};

export default CounterHook;
