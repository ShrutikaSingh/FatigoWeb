import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Menu, Icon, Select } from "antd";

import { AuthContext } from "../../containers/contexts/AuthContext";
import './index.less';

const { Option } = Select;
const { SubMenu } = Menu;

const Header = () => {
	const { signedIn, signout } = useContext(AuthContext)
	return (
		<header id="header" className="clearfix">
			<Row gutter={16}>
				<Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
					<Link to="/" id="logo">
						<h2>Jack My Motor</h2>
					</Link>
				</Col>
				<Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
					<Select defaultValue="english" size="small" style={{ width: 120 }} id="profile-select">
						<Option value="english">englist</Option>
						<Option value="chinese">chinese</Option>
					</Select>
					<div className="st-menu" id="nav">
						<Menu mode="horizontal" theme="light">
							<Menu.Item>
								<Icon type="home" />
								Home
									</Menu.Item>
							<Menu.Item>
								<Icon type="dingding" />
								Book My service
								<Link to="/book-service" />
							</Menu.Item>
							<SubMenu title="Service Offering">
								<Menu.ItemGroup>
									<Menu.Item key="repair"><Link to="#">repair</Link></Menu.Item>
									<Menu.Item key="service"><Link to="#">service</Link></Menu.Item>
									<Menu.Item key="car_towing"><Link to="#">cat towing</Link></Menu.Item>
									<Menu.Item key="used_car_detailing"><Link to="#">used car detailing</Link></Menu.Item>
									<Menu.Item key="service_packages"><Link to="#">service packages</Link></Menu.Item>
									<Menu.Item key="spares_and_accessories"><Link to="#">spares and accessories</Link></Menu.Item>
								</Menu.ItemGroup>
							</SubMenu>
							<SubMenu
								title={
									<span className="submenu-title-wrapper">
										<Icon type="user" />
										Profile
									</span>
								}
							>
								{
									signedIn ? (
										<Menu.ItemGroup>
											<Menu.Item key="signin" onClick={signout}>signout</Menu.Item>
										</Menu.ItemGroup>
									) : (
											<Menu.ItemGroup>
												<Menu.Item key="signin"><Link to="/auth/signin">signin</Link></Menu.Item>
												<Menu.Item key="signup"><Link to="/auth/signup">signup</Link></Menu.Item>
											</Menu.ItemGroup>
										)
								}
							</SubMenu>
							<Menu.Item>
								<Icon type="search" />
								Search
							</Menu.Item>
						</Menu>
					</div>
				</Col>
			</Row>
		</header>
	)
}


export default Header