import React, { useState, useEffect, useParams } from 'react';
import { Typography, Radio, Space } from 'antd';
export default function Question() {
	const [questions, setQuestions] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		getExam(id);
	}, [id]);

	const getExam = (examid) => {
		fetch(`http://localhost:8281/api/exam/getExam/${examid}`, {
			// api port değişecek
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => setQuestions(json.examQestions));
	};

	return (
		<div className='app'>
			{
				<>
					<Space direction='vertical' size='middle'>
						{questions.map((question, index) => (
							<>
								<div className='question-section'>
									<div className='question-count'>
										<span>Question {index + 1}</span>/{questions.length}
									</div>
									<Typography>{question.question}</Typography>
								</div>
								<div className='optionA-section'>
									<Radio id={1}>{question.optionA}</Radio>
								</div>
								<div className='optionB-section'>
									<Radio id={2}>{question.optionB}</Radio>
								</div>
								<div className='optionC-section'>
									<Radio id={3}>{question.optionC}</Radio>
								</div>
								<div className='optionD-section'>
									<Radio id={4}>{question.optionD}</Radio>
								</div>
							</>
						))}
					</Space>
				</>
			}
		</div>
	);
}
