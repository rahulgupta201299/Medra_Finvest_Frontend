import { ROUTES } from "./Routes.constants";
import LandingPage from "../component/LandingPage/LandingPage.Layout";
import Profile from "../component/Profile/Profile.Layout";
import Signup from "../component/Profile/Signup.Layout";

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
	{
		path: ROUTES.PROFILE,
		exact: true,
		element: <Profile />,
	},
]