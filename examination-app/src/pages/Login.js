import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Layout, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../componentts/Navbar';
const { Header, Content, Sider } = Layout;

const Login = (props) => {
	const [userNo, setUserNo] = useState('');
	const [password, setPassword] = useState('');
	const onFinish = (values) => {
		document.getElementById('userno');
		console.log('deneme');
		console.log('Success:', userNo, 'password', password);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<Layout>
				<Header>
					<Navbar />
				</Header>
				<Content>
					<Form
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						name='login'
					>
						<Form.Item label={'User No'} name='userNo'>
							<Input
								placeholder={'please enter your school number'}
								value={userNo}
								onChange={(e) => setUserNo(e.target.value)}
								rules={[
									{
										required: true,
									},
								]}
							/>
						</Form.Item>
						<Form.Item label={'Password'} name='password'>
							<Input.Password
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='Please enter your password'
							/>
						</Form.Item>
						<Form.Item>
							<Link to={'/dashboard'}>
								<Button type='primary' htmlType='submit' onClick={onFinish}>
									Login
								</Button>
							</Link>
						</Form.Item>
					</Form>
				</Content>
			</Layout>
		</>
	);
};

export default Login;
