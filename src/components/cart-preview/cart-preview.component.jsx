import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-preview.styles.scss';

const CartPreview = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" />
			<CustomButton>Check Out</CustomButton>
		</div>
	);
};

export default CartPreview;
