import "./index.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Toaster />

			<NextUIProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</NextUIProvider>
		</BrowserRouter>
	</React.StrictMode>
);
