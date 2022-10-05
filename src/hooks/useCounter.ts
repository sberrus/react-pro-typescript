// imports
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
	// states
	const [counter, setCounter] = useState(8);
	const counterElement = useRef<HTMLHeadingElement>(null);
	// gsap timeline reference
	const tl = useRef(gsap.timeline());

	// methods
	const handleClick = async () => {
		setCounter((prev) => Math.min(prev + 1, maxCount));
	};

	// useLayoutEffect
	useLayoutEffect(() => {
		// controlar que no genere un error si no se carga correctamente el counter
		if (!counterElement.current) return;

		// gsap animation config
		tl.current
			.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" })
			.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });

		return () => {
			// cleanup
		};
	}, [counter]);

	// effect
	useEffect(() => {
		tl.current.play(0);
		return () => {};
	}, [counter]);

	return {
		counter,
		handleClick,
		counterElement,
	};
};
