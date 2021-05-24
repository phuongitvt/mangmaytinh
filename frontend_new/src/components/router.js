import React from 'react';
import Detail from '../home/Detail';
import MainScreen from '../home/MainScreen';
import LoginScreen from '../home/LoginScreen';
import Signup from '../home/Signup';
import NotFound from '../home/NotFound';

const routes = [
	{
		path: '/login',
		component: LoginScreen,
		isPrivate: false,
	},
	{
		path: '/signup',
		component: Signup,
		isPrivate: false,
	},
	{
		path: '/home',
		component: MainScreen,
		isPrivate: true,
	},
	{
		path: '/detail',
		component: Detail,
		isPrivate: true,
	},
	{
		path: '/*',
		component: NotFound,
		isPrivate: true,
	},
];

export default routes;
