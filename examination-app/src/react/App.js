import React from 'react';
import {
	Route,
	BrowserRouter,
	RouteComponentProps,
	Switch,
	Redirect,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import Sider from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
					<Route path='/dashboard'>
						<Sider />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}
export default App;
