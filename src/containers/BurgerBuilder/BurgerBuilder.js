import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import Ribbon from '../../highComponents/Ribbon/Ribbon';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
	meat: 1.2,
	salad: 0.3,
	bacon: 0.9,
	cheese: 0.6
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0 ,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 3,
		purchasable: false,
		purchaseMode: false,
	};

	purchaseHandler = () => { this.setState({purchaseMode: true}) };

	purchaseCancelHandler = () => { this.setState({purchaseMode: false}) };

	purchaseContinueHandler = () => { alert('You Continue!') };

	updatePurchaseState = (ingredientList) => {
		const sum = Object.keys(ingredientList)
			.map(ingredientKey => {
				return ingredientList[ingredientKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({purchasable: sum > 0})
	};

	addIngredientHandler = (type) => {
		const
			oldCount = this.state.ingredients[type],
			updatedCount = oldCount + 1,
			updatedIngredients = {...this.state.ingredients};
			updatedIngredients[type] = updatedCount;
		const
			priceIncrease = INGREDIENTS_PRICE[type],
			oldPrice = this.state.totalPrice,
			newPrice = oldPrice + priceIncrease;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) return;

		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = oldCount - 1;

		const
			priceDecrease = INGREDIENTS_PRICE[type],
			oldPrice = this.state.totalPrice,
			newPrice = oldPrice - priceDecrease;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	render() {
		const disableConfig = {
			...this.state.ingredients
		};
		for (let key in disableConfig) {
			disableConfig[key] = disableConfig[key] <= 0
		}
		return (
			<Ribbon>
				<Modal
					show={this.state.purchaseMode}
					modalClosed={this.purchaseCancelHandler}>
					<OrderSummary
						price={this.state.totalPrice}
						ingredients={this.state.ingredients}
						purchaseCanceled={this.purchaseCancelHandler}
						purchaseContinue={this.purchaseContinueHandler}
					/>
				</Modal>
				<Burger
					ingredients={this.state.ingredients}
				/>
				<BuildControls
					purchaseMode={this.purchaseHandler}
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					purchasable={this.state.purchasable}
					price={this.state.totalPrice}
					disabled={disableConfig}
				/>
			</Ribbon>
		);
	}
}

export default BurgerBuilder;
