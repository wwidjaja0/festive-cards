import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import ROUTES from "./routesConfig";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(
	createRoutesFromElements(
		ROUTES.map(({ path, element }) => (
			<Route key={path} path={path} element={element} />
		))
	)
);

const App = () => {
	return (
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	);
};

export default App;
