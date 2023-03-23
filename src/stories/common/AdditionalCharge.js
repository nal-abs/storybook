import React from 'react';
import PropTypes from 'prop-types';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const formatPrice = (price) => {
	// eslint-disable-next-line no-magic-numbers
	let priceInRupee = price / 100;

	priceInRupee = Math.round(priceInRupee);
	return priceInRupee;
};

const PriceNotesIcon = ({ text }) =>
	text && <span className="price-notes-icon info">
		<span className="icon" title={ text }>
			<FontAwesomeIcon icon={ faInfo }/>
		</span>
	</span>;

const AdditionalCharge = ({ item }) => <div className="price display-row">
	<div className="stretch">AED {formatPrice(item.additionalCharge)}</div>
	<div className="cart-with-items">
		<PriceNotesIcon text={ item.priceNotes }/></div>
</div>;

export default AdditionalCharge;

AdditionalCharge.propTypes = {
	item: PropTypes.object,
};
