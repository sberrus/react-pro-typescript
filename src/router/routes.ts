import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../pages/NoLazy";
// import { LazyPage, LazyPage2, LazyPage3 } from "../pages";

type JSXElement = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: JSXElement | LazyExoticComponent<JSXElement>;
	name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../layout/LazyLayout"));

export const routes: Route[] = [
	{
		to: "/lazyload/",
		path: "/lazyload/*",
		Component: LazyLayout,
		name: "Lazy Layout",
	},
	{
		to: "/no-lazy",
		path: "no-lazy",
		Component: NoLazy,
		name: "No Lazy",
	},
];
