/** @format */

import { FC, useState } from 'react';
import Infopanel from './Infopanel';
import Navbar from './Navbar';
import { WeaterData } from '../common/Types';

const WeatherCard: FC = () => {
    
	const [weatherData, setWeaterData] = useState<WeaterData | undefined>();
	function setData(data: WeaterData): void {
		setWeaterData(data);
	}
	return (
		<div className=' card items-center gap-2 shadow-xl bg-base-200 w-90'>
			<Navbar setWeaterData={setData} />

			{weatherData ? (
				<>
					<img
						className='w-80'
						src={`./icons/${weatherData.weather.icon}.png`}
						alt='non'
					/>
					<Infopanel WeaterData={weatherData} />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default WeatherCard;
