import { Button, Space, Form, Typography, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import Question from './Question';
const { Text } = Typography;
const Exam = () => {
	const { id } = useParams();
	const [now, setNow] = useState(moment());

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
