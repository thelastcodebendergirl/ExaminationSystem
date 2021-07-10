import React, { useState, useEffect } from 'react';
import { Table, Button, Select, Form } from 'antd';

const Students = () => {
	const [courses, setCourses] = useState([]);
	const [students, setStudents] = useState([]);

	const getStudentdata = (selectedCourse) => {
		fetch('http://localhost:8888/api/course/getStudents', {
			// api port değişecek
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				courseId: selectedCourse,
			}),
		})
			.then((response) => response.json())
			.then((json) => setStudents(json));
	};
	useEffect(() => {
		getCourseData();
	}, []);

	const getCourseData = () => {
		fetch(
			`http://localhost:8888/api/course/getCourses/${localStorage.getItem(
				'username'
			)}`,
			{
				// api port değişecek
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
			.then((response) => response.json())
			.then((json) => setCourses(json));
	};
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Surname',
			dataIndex: 'lastname',
		},
	];
	const onFinish = (values) => {
		getStudentdata(values.selectedCourse);

		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<div style={{ marginBottom: 8 }}>
				<Form
					name='basic'
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item name='selectedCourse'>
						<Select
							style={{ width: '50%' }}
							placeholder='select one course'
							optionLabelProp='label'
							data={courses}
						></Select>
					</Form.Item>
					<Form.Item>
						<Button id='get-students-button' type='primary' htmlType='submit'>
							Create
						</Button>
					</Form.Item>
					<Form.Item>
						<Table dataSource={students} columns={columns} />
					</Form.Item>
				</Form>
			</div>
		</>
	);
};
export default Students;
