import { ROUTES } from "./Routes.constants";
import LandingPage from "../component/LandingPage/LandingPage.Layout";
import Profile from "../component/Profile/Profile.Layout";
import Signup from "../component/Profile/Signup.Layout";
import AboutUs from "../component/AboutUs/AboutUs";
import QAWrapper from '../component/QABonds/QAWrapper';

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
	{
		path: ROUTES.ABOUT_US,
		exact: true,
		element: <AboutUs />,
	},
	{
		path: `/:id`,
		exact: true,
		element: <QAWrapper />
	}
]