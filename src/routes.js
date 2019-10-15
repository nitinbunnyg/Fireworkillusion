/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Marks from "views/Marks.jsx";
import Library from "views/Library.jsx";
import Attendance from "views/Attendance.jsx";
import UserProfile from "views/UserProfile.jsx";
import Payments from "views/Payments.jsx";

var routes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: "tim-icons icon-chart-pie-36",
		component: Dashboard,
		layout: "/admin"
	},
	{
		path: "/edit-profile",
		name: "Edit Profile",
		icon: "tim-icons icon-single-02",
		component: UserProfile,
		layout: "/admin"
	},
	{
		path: "/attendance",
		name: "Attendance",
		icon: "tim-icons icon-puzzle-10",
		component: Attendance,
		layout: "/admin"
	},
	{
		path: "/marks",
		name: "Marks",
		icon: "tim-icons icon-chart-pie-36",
		component: Marks,
		layout: "/admin"
	},
	{
		path: "/library",
		name: "Library",
		icon: "tim-icons icon-chart-pie-36",
		component: Library,
		layout: "/admin"
	},
	{
		path: "/payments",
		name: "Payments",
		rtlName: "لوحة القيادة",
		icon: "tim-icons icon-bank",
		component: Payments,
		layout: "/admin"
	}
];
export default routes;
