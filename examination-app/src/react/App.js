import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './router/history';
import MainLayout from './pages/layout/MainLayout';
import 'antd/dist/antd.css';
import Sider from 'antd/lib/layout/Sider';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardMenu from './pages/Dashboard';
function App() {
	return (
		<BrowserRouter>
			<Route exact path={'/'} component={Login} key={'/'} />
			<Route exact path={'/login'} component={Login} key={'/login'} />
			<Route exact path={'/register'} component={Register} key={'/register'} />
			<Route path={'/dashboard'} component={DashboardMenu} key={'/dashboard'} />
		</BrowserRouter>
	);
}
export default App;
