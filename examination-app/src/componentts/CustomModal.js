import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';
import CModal from './CModal';
const CustomModal = (props) => {
	const [visible, setVisible] = useState(true);
	const hideModel = () => {
		setVisible(!visible);
	};
	return ReactDOM.createPortal(
		<div>
			<Modal visible={visible} onOk={hideModel} destroyOnClose={true}>
				<a>Exam is not available</a>
			</Modal>
		</div>,
		document.getElementById('modal')
	);
};

export default CustomModal;
