import React, { useState, useEffect } from 'react';
import { Button, Transfer, message } from 'antd';
import { useParams } from 'react-router';
const success = () => {
	message.success('This is a success message');
};

const AddStudents = () => {
	const params = useParams();
	const [mockData, setmockData] = useState([]);
	const [targetKeys, settargetKeys] = useState([]);
	const [isDirty, setIsdirty] = useState(false);

	useEffect(() => {
		getStudentTargetData(params);
		getStudentMockData(params);
	}, []);

	const getStudentTargetData = (courseId) => {
		fetch(`http://localhost:8280/api/course/getStudents/${courseId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => settargetKeys(json));
	};
	const getStudentMockData = (courseId) => {
		fetch(
			`http://localhost:8280/api/course/getStudentsExceptTakesCourse/${courseId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
			.then((response) => response.json())
			.then((json) => setmockData(json));
	};
	const save = () => {
		fetch('http://localhost:8280/api/course/addStudents', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				studentIds: targetKeys,
				courseIds: params,
			}),
		}).then((response) => {
			if (response.ok) {
				success();
			}
		});
	};

	const filterOption = (inputValue, option) =>
		option.description.indexOf(inputValue) > -1;

	const handleChange = (targetKeys) => {
		this.setState({ targetKeys });
	};
	const onSelectChange = () => {
		setIsdirty(true);
	};
	const handleSearch = (dir, value) => {
		console.log('search:', dir, value);
	};

	return (
		<>
			<div style={{ marginBottom: 16 }}>
				<Button type='primary' onClick={save} disabled={!isDirty}>
					Save
				</Button>
			</div>
			<Transfer
				listStyle={{
					width: 500,
					height: 400,
				}}
				dataSource={mockData}
				showSearch
				filterOption={filterOption}
				targetKeys={targetKeys}
				onChange={handleChange}
				onSearch={handleSearch}
				render={(item) => `${item.name}- ${item.lastname}`}
				onSelectChange={onSelectChange}
			/>
		</>
	);
};
export default AddStudents;
