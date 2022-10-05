import { Container } from "react-bootstrap";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducerComponent";
// import CounterReducerComponent from "./bases/CounterReducerComponent";

const App = () => {
	return (
		<Container fluid>
			<Counter />
			<hr />
			<CounterBy />
			<hr />
			<CounterEffect />
			<CounterHook />
			<CounterReducerComponent />
		</Container>
	);
};

export default App;
