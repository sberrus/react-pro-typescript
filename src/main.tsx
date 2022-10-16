import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// styles
import "./style/global.scss";

//
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* 
		SUSPENSE: suspense es una especie de AWAIT para react
		el cual va a mostrar un fallback mientras se van cargando los módulos
		que se esten cargando con lazy().
		*/}
		<Suspense fallback={<span>CARGANDO...</span>}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</React.StrictMode>
);
