import React from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { PieChartOutlined, SettingOutlined } from '@ant-design/icons';
const StudentSiderMenu = ({ theme }) => {
	const history = useHistory();

	const handleSiderMenuClick = (action) => {
		console.log('menu:', action);
		switch (action.key) {
			case 'course':
				history.push('/courses');
				break;
			default:
				history.push('/dashboard');
		}
	};
	return (
		<Menu
			defaultSelectedKeys={['1']}
			mode='inline'
			onClick={handleSiderMenuClick}
			theme={theme}
		>
			<Menu.Item key='course' title='Course' icon={<PieChartOutlined />}>
				<span className='nav-text'>Course</span>
			</Menu.Item>
			<Menu.Item key='settings' title='settings' icon={<SettingOutlined />}>
				<span className='nav-text'>Settings</span>
			</Menu.Item>
		</Menu>
	);
};

export default StudentSiderMenu;
