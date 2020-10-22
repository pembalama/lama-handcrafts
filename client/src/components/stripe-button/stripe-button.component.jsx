import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_Wbws1dYC56rDTsTovvcUOdIM00cVjJ9tzx';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then(response => {
				alert('Payment successful');
			})
			.catch(error => {
				console.log('Payment error: ', JSON.parse(error));
				alert('There was an issue with your payment. Please try again.');
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Momo & Brooklyn"
			billingAddress
			shippingAddress
			// image=''
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
