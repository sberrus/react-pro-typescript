import { Container } from "react-bootstrap";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";

const App = () => {
	return (
		<Container fluid>
			<Counter />
			<hr />
			<CounterBy />
			<hr />
			<CounterEffect />
		</Container>
	);
};

export default App;
