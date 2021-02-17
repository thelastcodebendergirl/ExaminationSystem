import { Button, Space, Form, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import Question from './Question';
const { Text } = Typography;
const Exam = () => {
	const userId = localStorage.getItem('userId');
	const { id } = useParams();
	const [now, setNow] = useState(moment());

	const endDate = moment('2021-02-09 23:16', 'YYYY-MM-DD HH:mm');
	const [remainHour, setHour] = useState(
		endDate.subtract(now.format('HH'), 'hour')
	);
	const [remainMinute, setMinute] = useState(
		endDate.subtract(now.format('mm'), 'minute')
	);
	useEffect(() => {
		let Interval = setTimeout(() => {
			if (remainMinute !== 0) {
				setMinute(remainMinute.subtract(1, 'minutes'));
			} else {
				if (remainHour !== 0) {
					setHour(remainHour.subtract(1, 'hours'));
					setMinute(59);
				} else {
					//submit form
				}
			}
		}, 60000);
		return () => {
			return () => clearTimeout(Interval);
		};
	});

	return (
		<Form>
			<Space direction={'vertical'}>
				<Form.Item>
					<Text>
						Remain Time : {remainHour.format('HH')} hour
						{remainMinute.format('mm')} minute
					</Text>
				</Form.Item>

				<Form.Item>
					<Question />
				</Form.Item>
				<Form.Item>
					<Link to={`/onSubmit`}>
						<Button>Submit</Button>
					</Link>
				</Form.Item>
			</Space>
		</Form>
	);
};
export default Exam;
