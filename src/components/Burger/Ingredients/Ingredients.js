import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IngredientClass from './Ingredients.module.css';

class BurgerIngredient extends Component {
	render() {
		switch (this.props.type) {
			case ('bread-bottom'):
				return <div className={IngredientClass.BreadBottom} />;
			case ('bread-top'):
				return (
					<div className={IngredientClass.BreadTop}>
						<div className={IngredientClass.Seeds1} />
						<div className={IngredientClass.Seeds2} />
					</div>
				);
			case ('meat'):
				return <div className={IngredientClass.Meat} />;
			case ('cheese'):
				return <div className={IngredientClass.Cheese} />;
			case ('salad'):
				return <div className={IngredientClass.Salad} />;
			case ('bacon'):
				return <div className={IngredientClass.Bacon} />;
			default:
				return null;
		}
	}
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
