import { Layout, Menu, Breadcrumb } from 'antd';
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import {
	Switch,
	Route,
	useRouteMatch,
	Link,
	BrowserRouter,
} from 'react-router-dom';
import CourseList from '../course/List';
import './Dashboard.css';
import User from '../course/User';
import CreateCourse from '../course/Create';
import EditCourse from '../course/Edit';
import CreateExam from '../exam/Create';
import ExamList from '../exam/List';
import DeleteExam from '../exam/Delete';
import Exam from '../exam/Exam';
import OnSubmitPage from '../exam/OnSubmit';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const TeacherDashboard = (props) => {
	const [collapsed, setCollapsed] = useState(false);
	const { url, path } = useRouteMatch();
	const onCollapse = () => {
		setCollapsed(!collapsed);
	};

	return (
		<>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
					<div className='logo' />
					<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
						<Menu.Item key='course' title='Kurs' icon={<PieChartOutlined />}>
							<Link to={`${url}/courses`}>Kurs</Link>
						</Menu.Item>
						<Menu.Item key='student' icon={<DesktopOutlined />}>
							<Link to={`${url}/student`}>Öğrenciler</Link>
						</Menu.Item>
						<Menu.Item key='user' title='kullanıcı' icon={<UserOutlined />}>
							<Link to={`${url}/user`}>Kullanıcı</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<Header className='site-layout-background' style={{ padding: 0 }} />

					<Content style={{ margin: '0 16px' }}>
						<div
							className='site-layout-background'
							style={{ padding: 24, minHeight: 360 }}
						>
							<Route path={`${path}/courses`}>
								<CourseList />
							</Route>
							<Route path={`${path}/user`}>
								<User />
							</Route>
							<Route path={`${path}/courses/exams`}>
								<ExamList />
							</Route>
							<Route path={`${path}/courses/create-course`}>
								<CreateCourse />
							</Route>
							<Route path={`${path}/courses/edit-course/:id`}>
								<EditCourse />
							</Route>
							<Route path={`${path}/courses/create-exam`}>
								<CreateExam />
							</Route>
							<Route path={`${path}/exam/:id`}>
								<Exam />
							</Route>
							<Route path={`${path}/delete-exam/:id`}>
								<DeleteExam />
							</Route>
							<Route path={`${path}/onSubmit`}>
								<OnSubmitPage />
							</Route>
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Examination System ©2020 Created by Hatice Durmaz
					</Footer>
				</Layout>
			</Layout>
		</>
	);
};
export default TeacherDashboard;
