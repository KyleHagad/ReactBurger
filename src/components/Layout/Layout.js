import React, { Component } from 'react';
import LayoutStyles from './Layout.module.css';
import Ribbon from '../../highComponents/Ribbon';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showDrawer: false,
	};
	sideDrawerClosedHandler = () => {
		this.setState({showDrawer: false})
	};
	drawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showDrawer: !prevState.showDrawer}
		});
	};
	render() {
		return (
			<Ribbon>
				<SideDrawer
					open={this.state.showDrawer}
					closed={this.sideDrawerClosedHandler} />
				<Toolbar
					drawerToggleClicked={this.drawerToggleHandler} />
				<main
					className={LayoutStyles.Content}>
					{this.props.children}
				</main>
			</Ribbon>
		)
	}
};

export default Layout;
