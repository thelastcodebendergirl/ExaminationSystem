import React, { useState } from 'react';
import { Form, Button, InputNumber, Input, Layout, Select, Space } from 'antd';
import Navbar from '../componentts/Navbar';
import { Link, useHistory } from 'react-router-dom';
import FirstLastName from '../componentts/FirstLastName';
import PasswordField from '../componentts/Password';
import SchoolNoField from '../componentts/SchoolNo';
import ButtonField from '../componentts/ButtonRegisterLogin';

const { Header, Content, Footer, Sider } = Layout;
const Register = () => {
	const history = useHistory();

	const onFinish = (values) => {
		console.log(
			'Success:',
			values.firstname,
			values.lastname,
			values.username,
			values.password
		);
		create_user(
			values.firstname,
			values.lastname,
			values.username,
			values.password,
			values.userType
		);
	};
	const create_user = (firstname, lastname, username, password, userType) => {
		fetch('http://localhost:8280/api/user/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
				name: firstname,
				lastname: lastname,
				userType: userType,
			}),
		}).then((response) => {
			if (response.ok) {
				isOk();
			}
		});
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const isOk = () => {
		history.push('/login');
	};

	return (
		<div>
			<Layout>
				<Header>
					<Navbar />
				</Header>
				<Content className='loginmeto'>
					<Form
						style={({ width: '50%' }, { fontSize: '20px' })}
						name='register'
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 16 }}
					>
						<Form.Item
							fieldKey='firstname'
							label={'First Name'}
							name='firstname'
							rules={[
								{ required: true, message: 'Please input your first name!' },
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label={'Last Name'}
							fieldKey='lastname'
							name='lastname'
							rules={[
								{ required: true, message: 'Please input your last name!' },
							]}
						>
							<Input />
						</Form.Item>
						<Space style={{ marginLeft: '14%' }} direction='horizontal'>
							<Form.Item
								label={'Username'}
								fieldKey='username'
								name='username'
								rules={[
									{ required: true, message: 'Please input your username!' },
								]}
							>
								<Input style={{ marginLeft: '3%' }} />
							</Form.Item>
							<Form.Item
								label={'User Type'}
								fieldKey='userType'
								name='userType'
								style={{ marginLeft: '5%' }}
								rules={[
									{ required: true, message: 'Please input your user type!' },
								]}
							>
								<Select style={{ marginLeft: '20%' }}>
									<Select.Option value='s'>Student</Select.Option>
									<Select.Option value='t'>Teacher</Select.Option>
								</Select>
							</Form.Item>
						</Space>

						<Form.Item
							fieldKey='password'
							label={'Password'}
							name='password'
							rules={[{ required: true, message: 'Please input password!' }]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item style={{ textAlign: 'center' }}>
							<Button type='primary' htmlType='submit'>
								Sign Up
							</Button>
						</Form.Item>
					</Form>
				</Content>
			</Layout>
		</div>
	);
};

export default Register;
