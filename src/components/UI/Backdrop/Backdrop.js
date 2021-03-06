import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
	return (!props.show)
		? null
		: <div
				className={classes.Backdrop}
				onClick={props.clicked}
			/>
};

export default Backdrop;
