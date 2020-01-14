import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Ribbon from '../../../highComponents/Ribbon';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {
	const attachedClasses = (props.open)
		? [classes.SideDrawer, classes.Open]
		: [classes.SideDrawer, classes.Close];
	return (
		<Ribbon>
			<Backdrop
				show={props.open}
				clicked={props.closed}/>
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Ribbon>
	)
};

export default SideDrawer;
