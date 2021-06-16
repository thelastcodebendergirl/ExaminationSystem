import React, { useState } from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
const ExamList = () => {
	const type = 'student';
	const { path } = useRouteMatch();
	const [isDateInterval, setIsDateInterval] = useState(false);
	const data = [
		{
			key: 1,
			sınav: 'cloud computing',
			startDate: '2021-02-08 11.30',
			endDate: '2021-02-08 12.30',
		},
		{
			key: 2,
			sınav: 'bulut bilişim',
			startDate: '2021-02-08 11.30',
			endDate: '2021-02-08 12.00',
		},
	];
	const columns = [
		{
			title: 'Exam',
			dataIndex: 'sınav',
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
				type === 'teacher' ? (
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
