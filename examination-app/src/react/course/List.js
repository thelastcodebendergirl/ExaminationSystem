import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

const CourseList = () => {
	const typeOfUser =
		localStorage.getItem('userType') === 's' ? 'student' : 'teacher';
	const match = useRouteMatch();
	//const { id } = localStorage.getItem('userId');
	const [data, setData] = useState([]);

	useEffect(() => {
		getCourses(localStorage.getItem('username'));
	}, []);

	const getCourses = (username) => {
		fetch(`http://localhost:8281/api/course/getCourses/${username}`, {
			// api port değişecek
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem('token'),
				'Access-Control-Allow-Origin': '*',
            	'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            	'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,authorization,content-type',
			},
		})
			.then((response) => response.json())
			.then((json) => setData(json));
	};

	const columns = [
		{
			title: 'Course',
			dataIndex: 'name',
		},
		{
			title: 'Actions',
			key: 'actions',
			render: (record) =>
				typeOfUser === 'teacher' ? (
					<Space size={'middle'}>
						<Link to={`${match.path}/addStudents/`.concat(record.key)}>
							<a>add student</a>
						</Link>
						<Link to={`${match.path}/edit-course/`.concat(record.key)}>
							<a>edit course</a>
						</Link>

						<Link to={`${match.path}/create-exam/`.concat(record.key)}>
							<a>create exam</a>
						</Link>
						<Link to={`${match.path}/exams`}>
							<a>list exams</a>
						</Link>
					</Space>
				) : (
					<Space size='middle'>
						<Link to={`${match.path}/exams`}>
							<a>list exams</a>
						</Link>
					</Space>
				),
		},
	];

	return typeOfUser === 'teacher' ? (
		<>
			<Link to={`${match.path}/create-course`}>
				<Button>Create Course</Button>
			</Link>

			<Table dataSource={data} columns={columns} />
		</>
	) : (
		<Table dataSource={data} columns={columns} />
	);
};
export default CourseList;
