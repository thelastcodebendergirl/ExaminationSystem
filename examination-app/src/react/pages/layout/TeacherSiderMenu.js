import React from 'react';
import { Menu } from 'antd';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import {
	PieChartOutlined,
	TeamOutlined,
	SettingOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

const TeacherSiderMenu = ({ theme }) => {
	const history = useHistory();
	const match = useRouteMatch();

	const handleSiderMenuClick = (action) => {
		console.log('menu:', action);
		switch (action.key) {
			case 'course':
				history.push('/courses');
				break;
			case 'studentList':
				history.push('/students');
				break;
			case 'settings':
				history.push('/settings');
				break;
			default:
				history.push('/');
		}
	};
	return (
		<Menu defaultSelectedKeys={['1']} mode='inline' theme={theme}>
			<Menu.Item key='course' title='Course' icon={<PieChartOutlined />}>
				<Link to={`${match.path}/courses`}> Course</Link>
			</Menu.Item>
			<SubMenu key='students' icon={<TeamOutlined />} title='Students'>
				<Menu.Item key='studentList'>
					<Link to={`${match.path}/students`}> Student List</Link>
				</Menu.Item>
			</SubMenu>
			<Menu.Item key='settings' title='settings' icon={<SettingOutlined />}>
				<Link to={`${match.path}/settings`}> Settings</Link>
			</Menu.Item>
		</Menu>
	);
};

export default TeacherSiderMenu;
