import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../src/store/store";
const RootLayout = () => {
	return (
		<Provider store={store}>
			<Header />
			<Outlet />
		</Provider>
	);
};

export default RootLayout;
