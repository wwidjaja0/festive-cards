import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";

/**
 * A base for a festive-card that I can send to anyone in the world.
 *
 * What does it contain?
 * 1. A sticky calendar that updates as we scroll through the photos with dates.
 * 2. Photos that animate in with animated text that is stylized to the occasion.
 * 3. A main page that describes what the website is about where you can view the sylized cards for others.
 * 4. A particle system.
 * 5. A nice note section at the end.
 * 6. A copyright/crediting section at the end.
 */

const ROUTES = [
	{ path: "/", element: <HomePage /> },
	{ path: "/:id", element: <CardPage /> },
];

const router = createBrowserRouter(
	createRoutesFromElements(
		ROUTES.map((route) => (
			<Route key={route.path} path={route.path} element={route.element} />
		))
	)
);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}
export default App;
