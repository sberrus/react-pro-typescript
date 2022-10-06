// imports
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
// pages
import { LazyPage, LazyPage2, LazyPage3 } from "./pages";
import Home from "./pages/Home";
// styles
import "./style/App.scss";
// templates
import MainTemplate from "./templates/MainTemplate";

//
const App = () => {
	return (
		<div className="wrapper">
			<nav className="navbar">
				<ul className="navMenu">
					<li className="navLink">
						<NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
							Home
						</NavLink>
					</li>
					<li className="navLink">
						<NavLink to="/lazy1" className={({ isActive }) => (isActive ? "link active" : "link")}>
							lazy1
						</NavLink>
					</li>
					<li className="navLink">
						<NavLink to="/lazy2" className={({ isActive }) => (isActive ? "link active" : "link")}>
							lazy2
						</NavLink>
					</li>
					<li className="navLink">
						<NavLink to="/lazy3" className={({ isActive }) => (isActive ? "link active" : "link")}>
							lazy3
						</NavLink>
					</li>
				</ul>
			</nav>
			<main className="main">
				<Routes>
					<Route path="/" element={<MainTemplate />}>
						<Route index element={<Home />} />
						<Route path="lazy1" element={<LazyPage />} />
						<Route path="lazy2" element={<LazyPage2 />} />
						<Route path="lazy3" element={<LazyPage3 />} />
						{/* 404 handles */}
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</main>
		</div>
	);
};

export default App;
