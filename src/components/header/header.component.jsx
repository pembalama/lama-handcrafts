import React from 'react';

import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

// import CartItem from '../cart-icon/cart-icon.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartPreview from '../cart-preview/cart-preview.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles';

const signOut = () => {
	return auth.signOut();
};

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">Momo & Brooklyn</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as="div" onClick={signOut}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/signin">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartPreview />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
