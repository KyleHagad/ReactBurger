import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Ribbon from '../../../highComponents/Ribbon';

class OrderSummary extends Component {
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[OrderSummary - componentDidUpdate]')
	}

	render() {
		const ingredientSumamry = Object.keys(this.props.ingredients)
		.map(ingredientKey => {
			return (
				<li key={ingredientKey}>
					<span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
				</li>
			)
		});
		return (
			<Ribbon>
				<h3>Your Order</h3>
				<p>Burger Description: </p>
				<ul>
					{ingredientSumamry}
				</ul>
				<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to Checkout?</p>
				<Button
					clicked={this.props.purchaseCanceled}
					btnType='Danger'>
					Cancel
				</Button>
				<Button
					clicked={this.props.purchaseContinue}
					btnType='Success'>
					Continue
				</Button>
			</Ribbon>
		)
	}
}

export default OrderSummary;
