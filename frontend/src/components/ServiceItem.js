import React from 'react';
import './Services.css';

const ServiceItem = ({ servName, servPrice }) => {
	return (
		<div className='Services-list-item'>
			<header className='list-item-icon'>
				<h2>Icon 1</h2>
			</header>
			<div className='list-item-details'>
				<h2>{servName}</h2>
				<p>Monthly price: ${servPrice}</p>
			</div>
			<div className='list-item-btns'>
				<button className='list-item-btn btn-green'>
					<i className='fas fa-plus' /> Add
				</button>
			</div>
		</div>
	);
};

export default ServiceItem;
