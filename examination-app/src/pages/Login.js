import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
const Login = (props) => {
	return (
		<>
			<Header>{'Examination System'}</Header>
			<Content>
				<Form>
					<Form.Item label={'User No'}>
						<Input placeholder={'please enter your school number'} />
					</Form.Item>
					<Form.Item label={'Password'}>
						<Input type='password' placeholder='Please enter your password' />
					</Form.Item>

					<Link to={'/dashboard'}>
						<Button>Login</Button>
					</Link>
				</Form>
			</Content>
		</>
	);
};

export default Login;
