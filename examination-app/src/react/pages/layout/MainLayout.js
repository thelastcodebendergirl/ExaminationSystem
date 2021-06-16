import React, { useState } from 'react';
import { Layout } from 'antd';
import SiderMenu from './SiderMenu';
import { Switch } from 'react-router-dom';
import RoutingList from '../../router/RoutingList';

const { Content, Footer } = Layout;

function MainLayout() {
	const [collapsed, setCollapsed] = useState(false);

	const handleOnCollapse = () => {
		setCollapsed((prevState) => !prevState);
	};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<SiderMenu collapsed={collapsed} handleOnCollapse={handleOnCollapse} />
			<Layout>
				<Content style={{ margin: '24px 16px 0' }}>
					<Switch>
						<div style={{ padding: 24, background: '#fff', minHeight: 20 }}>
							<RoutingList />
						</div>
					</Switch>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Examination System ©2021 Created by Hatice Durmaz
				</Footer>
			</Layout>
		</Layout>
	);
}

export default MainLayout;
