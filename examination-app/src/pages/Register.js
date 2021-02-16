import React from 'react';
import { Form, Button, InputNumber, Input, Layout } from 'antd';
import Navbar from '../componentts/Navbar';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const Register = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div>
			<Layout>
				<Header>
					<Navbar />
				</Header>
				<Content>
					<Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
						<Form.Item
							label={'First Name'}
							rules={[
								{ required: true, message: 'Please input your first name!' },
							]}
						>
							<Input></Input>
						</Form.Item>
						<Form.Item
							label={'Last Name'}
							rules={[
								{ required: true, message: 'Please input your last name!' },
							]}
						>
							<Input></Input>
						</Form.Item>
						<Form.Item
							label={'School No'}
							rules={[
								{ required: true, message: 'Please input your school number!' },
							]}
						>
							<InputNumber></InputNumber>
						</Form.Item>
						<Form.Item
							label={'Password'}
							rules={[{ required: true, message: 'Please input password!' }]}
						>
							<Input.Password></Input.Password>
						</Form.Item>
						<Form.Item>
							<Link to='/login'>
								<Button type='primary' htmlType='submit'>
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
