import LandingPage from "../component/LandingPage/LandingPage.Layout";
import Signup from "../component/Profile/Signup.Layout";
import { ROUTES } from "./Routes.constants";

export const APP_ROUTES = [
	{
		path: ROUTES.HOME,
		exact: true,
		element: <LandingPage />,
	},
	{
		path: ROUTES.LOGIN,
		exact: true,
		element: <Signup />,
	},
]