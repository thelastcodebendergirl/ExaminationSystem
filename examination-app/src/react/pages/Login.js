import React, { useState } from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../componentts/Navbar';
import './login.css';
const { Header, Content } = Layout;

const Login = () => {
	const history = useHistory();

	const formlayout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const onFinish = (values) => {
		console.log('onfinish', values.password);
		login(values.username, values.password);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const login = (username, password) => {
		localStorage.setItem('username', username);
		fetch('http://localhost:8280/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		}).then((response) => {
			if (response.ok) {
				localStorage.setItem('username', username);
				response.text().then(body => localStorage.setItem('token', body));
				isOk();
			}
		});
	};
	const isOk = () => {
		history.push('/dashboard');
	};
	return (
		<Layout>
			<Header>
				<Navbar />
			</Header>
			<Content className='loginmeto'>
				<Form
					{...formlayout}
					name='basic'
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						style={{ marginLeft: '20%' }}
						label='Username'
						name='username'
						rules={[
							{ required: true, message: 'Please input your username !' },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						style={{ marginLeft: '20%' }}
						label='Password'
						name='password'
						rules={[
							{ required: true, message: 'Please input your password !' },
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Login
						</Button>
					</Form.Item>
				</Form>
			</Content>
		</Layout>
	);
};

export default Login;
