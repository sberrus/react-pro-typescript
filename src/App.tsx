import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";

const App = () => {
	return (
		<>
			<Counter />
			<hr />
			<CounterBy />
			<hr />
			<CounterEffect />
		</>
	);
};

export default App;
