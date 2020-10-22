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
			<header className="hero">
				<div className="container spacing">
					<h1 className="primary-title">Momo & Brooklyn</h1>
					<h2>An Urban Living</h2>
					<Link to="/shop" className="btn">
						Shop Now
					</Link>
				</div>
			</header>
			<div className="shop-category">
				<div className="container">
					{/* <h2 class="section-title">Shop by Category</h2> */}

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
