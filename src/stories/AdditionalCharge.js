import React from 'react';
import PropTypes from 'prop-types';

const formatPrice = (price) => {
	// eslint-disable-next-line no-magic-numbers
	let priceInRupee = price / 100;

	priceInRupee = Math.round(priceInRupee);
	return priceInRupee;
};

const AdditionalCharge = ({ item }) => <div className="price">
	<span>Hello</span>
	<div>AED {formatPrice(item.additionalCharge)}</div>
</div>;

export default AdditionalCharge;

AdditionalCharge.propTypes = {
	item: PropTypes.object,
};
