import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import RootLayout from "../Route/RootLayout";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Product />} />
				<Route path="/dashboard " element={<Dashboard />} />
				<Route path="/cart" element={<Cart />} />
			</Route>
		)
	);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
