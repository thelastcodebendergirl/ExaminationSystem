import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
const ExamList = () => {
	const typeOfUser =
		localStorage.getItem('userType') === 's' ? 'student' : 'teacher';

	const { path } = useRouteMatch();
	const id = useParams();
	const [isDateInterval, setIsDateInterval] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		getExamData();
	}, []);

	const getExamData = () => {
		fetch(`http://localhost:8888/api/exam/getAllExams/${id}`, {
			// api port değişecek
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => setData(json.examName));
	};

	const columns = [
		{
			title: 'Exam',
			dataIndex: 'examName',
		},
		{
			title: 'Start Date',
			dataIndex: 'startDate',
		},
		{
			title: 'End Date',
			dataIndex: 'endDate',
		},
		{
			title: 'Actions',
			key: 'actions',
			render: (record) =>
				typeOfUser === 'teacher' ? (
					<Space>
						<Link to={`${path}/delete-exam/`.concat(record.key)}>
							<a>delete</a>
						</Link>
					</Space>
				) : (
					<Space size='middle'>
						<Link
							onClick={() => {
								if (
									moment().isAfter(
										moment(record.startDate, 'YYYY-MM-DD HH:mm')
									) &&
									moment().isBefore(moment(record.endDate, 'YYYY-MM-DD HH:mm'))
								) {
									setIsDateInterval(true);
								} else {
								}
							}}
							to={() => {
								return `${path}/exam/`.concat(record.key);

								// if (isDateInterval) {
								// 	return '/exam/'.concat(record.key);
								// }
							}}
						>
							<a>take exam</a>
						</Link>
					</Space>
				),
		},
	];
	return <Table dataSource={data} columns={columns} />;
};
export default ExamList;
