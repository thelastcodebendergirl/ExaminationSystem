import { Layout, Menu, Breadcrumb } from 'antd';
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CourseList from '../course/List';
import User from '../course/User';
import ExamList from '../exam/List';
import OnSubmitPage from '../exam/OnSubmit';
import Exam from '../exam/Exam';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const StudentDashboard = (props) => {
	const [collapsed, setCollapsed] = useState(false);
	const onCollapse = (collapsed) => {
		setCollapsed({ collapsed });
	};
	return (
		<BrowserRouter>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
					<div className='logo' />
					<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
						<Menu.Item key='1' title='Kurs' icon={<PieChartOutlined />}>
							<Link to={`/courses`}>Kurs</Link>
						</Menu.Item>
						<Menu.Item key='3' title='Kullanıcı' icon={<UserOutlined />}>
							<Link to={`/user`}>Kullanıcı</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<Header className='site-layout-background' style={{ padding: 0 }} />
					<Switch>
						<Content style={{ margin: '0 16px' }}>
							<div
								className='site-layout-background'
								style={{ padding: 24, minHeight: 360 }}
							>
								<Route path={`/courses`}>
									<CourseList />
								</Route>
								<Route path={`/user`}>
									<User />
								</Route>
								<Route path={`/exams`}>
									<ExamList />
								</Route>
								<Route path={`/onSubmit`}>
									<OnSubmitPage />
								</Route>
								<Route path={`/exam/:id`}>
									<Exam />
								</Route>
							</div>
						</Content>
					</Switch>

					<Footer style={{ textAlign: 'center' }}>
						Examination System ©2020 Created by Hatice Durmaz
					</Footer>
				</Layout>
			</Layout>
		</BrowserRouter>
	);
};
export default StudentDashboard;
