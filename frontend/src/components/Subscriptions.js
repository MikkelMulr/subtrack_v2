import React, { useState, useEffect } from 'react';
import ServiceItem from './ServiceItem';
import './Subscriptions.css';

const Subscriptions = ({ dbData }) => {
	const [subList, setSubList] = useState([]);
	const [userInfo, setUserInfo] = useState({});
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
			setUserInfo(dbData);
		}, 800);
	});

	useEffect(
		() => {
			const getData = () => {
				try {
					let userSubs = userInfo.data.services.map((serv) => {
						if (userInfo.data.users[0].subs.includes(serv.id)) {
							return <ServiceItem servName={serv.name} servPrice={serv.price} key={serv.id} />;
						}
					})
					console.log(userSubs);
					setSubList(userSubs);
					setLoading(false);
				} catch (error) {
					console.log(error);
					// setSubList([<h2>{`Loading...`}</h2>]);
				}
			};
			getData();
		},
		[userInfo]
	);

	return (
		<div className='Subscriptions'>
			<header className='Sub-header'>
				<h2>{`Your Subscriptions`}</h2>
			</header>
			{Loading ? (
				<div className='Services-list'>{subList}</div>
			) : (
					<img style={{ width: '260px', margin: '0 auto' }} src={require('../images/spinner.gif')} alt='spinner' />
				)}
		</div>
	);
};

export default Subscriptions;
