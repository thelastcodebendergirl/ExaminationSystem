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

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Login></Login>
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
