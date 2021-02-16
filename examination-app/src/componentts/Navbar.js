import { Space, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { Text } = Typography;
const Navbar = () => {
	return (
		<div>
			<Space size='middle' direction={'horizontal'}>
				<Text type='warning'> Examination System</Text>
				<Link to='/register'>
					<a>Sign Up</a>
				</Link>
				<Link to='/login'>
					<a>Log In</a>
				</Link>
			</Space>
		</div>
	);
};

export default Navbar;
