import React from 'react';
import { Layout } from 'antd';
import TeacherSiderMenu from './TeacherSiderMenu';
import StudentSiderMenu from './StudentSiderMenu';

const { Sider } = Layout;

function SiderMenu({ handleOnCollapse, collapsed }) {
	const theme = 'dark';
	const typeOfUser =
		localStorage.getItem('userType') === 's' ? 'student' : 'teacher';

	return (
		<Sider
			breakpoint='lg'
			collapsedWidth='80'
			collapsible
			onCollapse={handleOnCollapse}
			collapsed={collapsed}
			width='256'
			theme={theme}
		>
			<a>
				<div className='menu-logo' />
			</a>
			{typeOfUser === 'teacher' ? (
				<TeacherSiderMenu theme={theme} />
			) : (
				<StudentSiderMenu theme={theme} />
			)}
		</Sider>
	);
}

export default SiderMenu;
