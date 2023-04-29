import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ROUTES_CONSTANT } from "./constants/routes.constant";
import { CartPage, DetailProductPage, HomePage } from "./pages";

const router = createBrowserRouter([
	{
		path: ROUTES_CONSTANT.HOME,
		element: <HomePage />,
	},
	{
		path: ROUTES_CONSTANT.DETAIL_PRODUCT_WITH_PATH_PARAMS,
		element: <DetailProductPage />,
	},
	{
		path: ROUTES_CONSTANT.CART,
		element: <CartPage />,
	},
	{
		path: "*",
		element: <div>404</div>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
