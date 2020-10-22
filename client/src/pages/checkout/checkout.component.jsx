import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, grandTotal }) => {
	return (
		<div className="checkout-page">
			<h2>Your Bag</h2>
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => {
				return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
			})}
			<div className="total">
				<span>GRAND TOTAL: ${grandTotal}</span>
			</div>
			<StripeCheckoutButton price={grandTotal} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	grandTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
