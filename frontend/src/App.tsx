import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import ROUTES from "./routesConfig";

const router = createBrowserRouter(
	createRoutesFromElements(
		ROUTES.map(({ path, element }) => (
			<Route key={path} path={path} element={element} />
		))
	)
);

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
