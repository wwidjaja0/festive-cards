import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";

const ROUTES = [
	{ path: "/", element: <HomePage /> },
	{ path: "/:cardName", element: <CardPage /> },
];

export default ROUTES;
