import React, { useState } from 'react';
import { Form, Button, InputNumber, Input, Layout } from 'antd';
import Navbar from '../componentts/Navbar';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const Register = () => {
	const [firstname, setfirstname] = useState('');
	const [lastname, setlastname] = useState('');
	const [password, setpassword] = useState('');
	const [user_id, setuser_id] = useState(0);
	const onFinish = (values) => {
		console.log('Success:', firstname, lastname, user_id, password);
	};
	const create_user = () => {
		fetch('http://localhost:3001/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ firstname, lastname, user_id, password }),
		})
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				alert(data);
			});
	};
	const onClick = () => {
		console.log('successful', firstname, lastname, user_id, password);
		create_user();
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const onChangeUser_id = (value) => {
		setuser_id(value);
	};

	return (
		<div>
			<Layout>
				<Header>
					<Navbar />
				</Header>
				<Content>
					<Form
						name='register'
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							fieldKey='firstname'
							label={'First Name'}
							rules={[
								{ required: true, message: 'Please input your first name!' },
							]}
						>
							<Input
								value={firstname}
								onChange={(e) => setfirstname(e.target.value)}
							></Input>
						</Form.Item>
						<Form.Item
							label={'Last Name'}
							fieldKey='lastname'
							rules={[
								{ required: true, message: 'Please input your last name!' },
							]}
						>
							<Input
								value={lastname}
								onChange={(e) => setlastname(e.target.value)}
							></Input>
						</Form.Item>
						<Form.Item
							label={'School No'}
							fieldKey='user_id'
							rules={[
								{ required: true, message: 'Please input your school number!' },
							]}
						>
							<InputNumber onChange={onChangeUser_id}></InputNumber>
						</Form.Item>
						<Form.Item
							fieldKey='password'
							label={'Password'}
							rules={[{ required: true, message: 'Please input password!' }]}
						>
							<Input.Password
								value={password}
								onChange={(e) => setpassword(e.target.value)}
							></Input.Password>
						</Form.Item>
						<Form.Item>
							<Link to='/login'>
								<Button type='primary' htmlType='submit' onClick={onClick}>
									Sign In
								</Button>
							</Link>
						</Form.Item>
					</Form>
				</Content>
			</Layout>
		</div>
	);
};

export default Register;
