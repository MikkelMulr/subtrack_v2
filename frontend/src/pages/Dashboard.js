import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Subscriptions from '../components/Subscriptions';
import MonthlyReport from '../components/MonthlyReport';
import Services from '../components/Services';
import Updates from '../components/Updates';
import Axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
	const [currentView, setCurrentView] = useState('subs');
	const [serviceData, setServiceData] = useState([]);

	const userLoggedIn = true;

	useEffect(() => {
		const getData = () => {
			Axios.get('./testData.json').then((res) => setServiceData(res.data)).catch((error) => console.log(error));
		};
		getData();
	}, []);

	const showView = (e) => {
		if (currentView === 'subs') {
			return <Subscriptions dbData={serviceData} />;
		} else if (currentView === 'monthly') {
			return <MonthlyReport />;
		} else if (currentView === 'services') {
			return <Services services={serviceData} />;
		} else if (currentView === 'updates') {
			return <Updates />;
		}
	};

	if (userLoggedIn) {
		return (
			<div className='Dashboard'>
				<Navbar />
				<div className='Main-container'>
					<div className='Dash-menu'>
						<div
							className='Dash-menu-link nav-bg-norm'
							onClick={() => {
								setCurrentView('subs');
							}}
						>
							<i className='fas fa-list-alt nav-icon' />My Subscriptions
						</div>
						<div
							className='Dash-menu-link nav-bg-norm'
							onClick={() => {
								setCurrentView('monthly');
							}}
						>
							<i className='fas fa-chart-bar nav-icon' />Monthly Report
						</div>
						<div
							className='Dash-menu-link nav-bg-norm'
							onClick={() => {
								setCurrentView('services');
							}}
						>
							<i className='fab fa-buffer nav-icon' />Services
						</div>
						<div
							className='Dash-menu-link nav-bg-norm'
							onClick={() => {
								setCurrentView('updates');
							}}
						>
							<i className='far fa-newspaper nav-icon' />Updates
						</div>
					</div>
					<div className='show-container'>{showView()}</div>
				</div>
				<Footer />
			</div>
		);
	} else {
		return <Redirect from='/Dashboard' to='/Login' />;
	}
};

export default Dashboard;
