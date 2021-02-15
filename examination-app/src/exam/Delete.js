import { useParams } from 'react-router-dom';

import React from 'react';
const DeleteExam = () => {
	const { id } = useParams();
	return <div>{id}</div>;
};
export default DeleteExam;
