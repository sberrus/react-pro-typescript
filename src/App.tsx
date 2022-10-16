// imports
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home";
import { routes } from "./router/routes";
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
					{routes.map(({ name, to }) => (
						<li className="navLink" key={to}>
							<NavLink to={to} className={({ isActive }) => (isActive ? "link active" : "link")}>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<main className="main">
				<Routes>
					<Route path="/" element={<MainTemplate />}>
						<Route index element={<Home />} />
						{routes.map(({ path, Component }) => (
							<Route path={path} element={<Component />} key={path} />
						))}
						{/* 404 handles */}
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</main>
		</div>
	);
};

export default App;
