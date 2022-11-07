import { Routes, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
const MainRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<MainTemplate />}></Route>
		</Routes>
	);
};

export default MainRouter;
