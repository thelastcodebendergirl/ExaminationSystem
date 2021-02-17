import React from 'react';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';

const Sider = () => {
	const userId = localStorage.getItem('userId');
	const type = 'teacher';

	return (
		<>
			{type === 'teacher' && <TeacherDashboard />}
			{type === 'student' && <StudentDashboard />}
		</>
	);
};
export default Sider;
