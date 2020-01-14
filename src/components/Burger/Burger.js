import React from 'react';
import BurgerClasses from './Burger.module.css';
import BurgerIngredient from './Ingredients/Ingredients';

const Burger = (props) => {
	let ingredientValues = Object.keys(props.ingredients)
			.map(ingredientKey => {
				return [...Array(props.ingredients[ingredientKey])]
					.map((x, i) => {
						return <BurgerIngredient type={ingredientKey} key={ingredientKey + i} />
					});
			})
		.reduce((arr, el) => {
			return arr.concat(el)
		}, []);
	if (ingredientValues.length === 0) { ingredientValues = <p>Please Select Ingredients</p> }
	console.log(ingredientValues);
	return (
		<div className={BurgerClasses.Burger}>
			<BurgerIngredient type={'bread-top'} />
			{ingredientValues}
			<BurgerIngredient type={'bread-bottom'} />
		</div>
	)
};

export default Burger;
