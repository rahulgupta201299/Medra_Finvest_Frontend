import LandingPage from "../component/LandingPage/LandingPage.Layout";
import { ROUTES } from "./Routes.constants";

export const APP_ROUTES = [
	{
		path: ROUTES.HOME,
		exact: true,
		element: <LandingPage />,
	},
]