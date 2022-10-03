// imports
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
// constant
const MAX_VALUE = 10;

//
const CounterEffect = () => {
	// states
	const [counter, setCounter] = useState(8);
	const counterHTML = useRef<HTMLHeadingElement>(null);

	// methods
	const handleClick = async () => {
		if (counter >= MAX_VALUE) {
			console.log("Se llego al máximo válido");

			// gsap animation config
			const tl = gsap.timeline();
			tl.to(counterHTML.current, { y: -10, duration: 0.2, ease: "ease.out" });
			tl.to(counterHTML.current, { y: 0, duration: 1, ease: "bounce.out" });
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
			<h1>Counter effect: </h1>
			<h2 ref={counterHTML}>{counter}</h2>
			<button onClick={handleClick}>+1</button>
		</>
	);
};

export default CounterEffect;
