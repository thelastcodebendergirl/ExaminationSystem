import React from 'react';
import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
const CourseList = () => {
	const type = 'teacher';
	const data = [
		{ key: 1, kurs: 'cloud computing' },
		{ key: 2, kurs: 'bulut bilişim' },
	];
	const columns = [
		{
			title: 'Course',
			dataIndex: 'kurs',
		},
		{
			title: 'Actions',
			key: 'actions',
			render: (record) =>
				type === 'teacher' ? (
					<Space>
						<Link to={`/edit-course/`.concat(record.key)}>
							<a>add student</a>
						</Link>

						<Link to={`/create-exam/`.concat(record.key)}>
							<a>create exam</a>
						</Link>
						<Link to={`/exams`}>
							<a>list exams</a>
						</Link>
					</Space>
				) : (
					<Space size='middle'>
						<Link to={`/exams`}>
							<a>list exams</a>
						</Link>
					</Space>
				),
		},
	];
	return type === 'teacher' ? (
		<>
			<Link to={`/create-course`}>
				<Button>Create Course</Button>
			</Link>

			<Table dataSource={data} columns={columns} />
		</>
	) : (
		<Table dataSource={data} columns={columns} />
	);
};
export default CourseList;
