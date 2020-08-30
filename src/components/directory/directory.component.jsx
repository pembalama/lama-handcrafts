import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { Link } from 'react-router-dom';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => {
	return (
		<>
			<header class="hero">
				<div class="container spacing">
					<h1 class="primary-title">Feel the comfortness</h1>
					{/* <p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
						perspiciatis facilis beatae laudantium quidem enim sit sequi!
					</p> */}
					<Link to="/shop" class="btn">
						Shop Now
					</Link>
				</div>
			</header>
			<div class="shop-category">
				<div class="container">
					<h2 class="section-title">Shop by Category</h2>

					<div className="directory-menu">
						{sections.map(({ id, ...otherSectionProps }) => {
							return <MenuItem key={id} {...otherSectionProps} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
