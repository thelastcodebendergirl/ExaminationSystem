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
	BrowserRouter as Router,
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

const TeacherDashboard = ({ match }) => {
	const [collapsed, setCollapsed] = useState(false);
	const { url, path } = useRouteMatch();
	const onCollapse = () => {
		setCollapsed(!collapsed);
	};

	return (
		<>
			<Router>
				<Layout style={{ minHeight: '100vh' }}>
					<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
						<div className='logo' />
						<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
							<Menu.Item key='course' title='Kurs' icon={<PieChartOutlined />}>
								<Link to={`/courses`}>Kurs</Link>
							</Menu.Item>
							<Menu.Item key='student' icon={<DesktopOutlined />}>
								<Link to={`/student`}>Öğrenciler</Link>
							</Menu.Item>
							<Menu.Item key='user' title='kullanıcı' icon={<UserOutlined />}>
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
									<Route path={`/create-course`}>
										<CreateCourse />
									</Route>
									<Route path={`/edit-course/:id`}>
										<EditCourse />
									</Route>
									<Route path={`/create-exam/:id`}>
										<CreateExam />
									</Route>
									<Route path={`/exam/:id`}>
										<Exam />
									</Route>
									<Route path={`/delete-exam/:id`}>
										<DeleteExam />
									</Route>
									<Route path={`/onSubmit`}>
										<OnSubmitPage />
									</Route>
								</div>
							</Content>
						</Switch>

						<Footer style={{ textAlign: 'center' }}>
							Examination System ©2020 Created by Hatice Durmaz
						</Footer>
					</Layout>
				</Layout>
			</Router>
		</>
	);
};
export default TeacherDashboard;
