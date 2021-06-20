import { Button, Space, Form, Typography, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
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
	const history = useHistory();
	const success = () => {
		message.success('Submitted successfully', [5]);
	};
	const handleClick = () => {
		success();
		history.goBack();
	};

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
					<Button onClick={handleClick}>Submit</Button>
				</Form.Item>
			</Space>
		</Form>
	);
};
export default Exam;
