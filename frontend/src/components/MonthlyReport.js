import React from 'react';
import './MonthlyReport.css';
import { Bar } from 'react-chartjs-2';

const MonthlyReport = () => {
	const data = [0.2, 0.1, 0.66, 0.24, 1];
	return (
		<div className='MonthlyReport'>
			<div className='Monthly-chart'>
				<Bar data={data} width={100} height={50} options={{ maintainAspectRatio: false }} />
			</div>
		</div>
	);
};

export default MonthlyReport;
