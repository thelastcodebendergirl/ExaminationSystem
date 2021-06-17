import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Layout, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../componentts/Navbar';
import DashboardMenu from './Dashboard';
import './login.css';
import SizeContext from 'antd/lib/config-provider/SizeContext';
const { Header, Content, Sider } = Layout;

const Login = (props) => {
	const [userNo, setUserNo] = useState('');
	const [password, setPassword] = useState('');
	const onFinish = (values) => {
		document.getElementById('userno');
		localStorage.setItem('userId', userNo);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<Layout>
				<Header>
					<Navbar/>
				</Header>
				<Content className="loginmeto">
					<Form
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						name='login'
					>
						<Form.Item style={{marginLeft:"20%"}} label={'User No'} name='userNo' fieldKey='userNo'>
							<Input style={{width:"48%", marginLeft:"12px"}}
								placeholder={'Please enter your school number'}
								value={userNo}
								onChange={(e) => setUserNo(e.target.value)}
								rules={[
									{
										required: true,
									},
								]}
							/>
						</Form.Item>
						<Form.Item style={{marginLeft:"20%"}} label={'Password'} name='password' fieldKey='password'>
							<Input.Password style={{width:"50%"}}
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='Please enter your password'
							/>
						</Form.Item>
						<Form.Item style={{textAlign:"center"}}>
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
