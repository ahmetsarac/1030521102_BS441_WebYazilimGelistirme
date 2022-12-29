import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Root from "./routes/root";
import Classic from "./routes/classic";
import Fight from "./routes/fight";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />
	},
	{
		path: "/classic",
		element: <Classic />
	},
	{
		path: "/fight",
		element: <Fight />
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
