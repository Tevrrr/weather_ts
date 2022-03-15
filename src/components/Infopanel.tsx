/** @format */

import { FC } from 'react';
import { WeaterData } from '../common/Types';

interface InfopanelProps {
	WeaterData: WeaterData;
}

const Infopanel: FC<InfopanelProps> = ({ WeaterData }) => {
	return (
		<div className=' grow w-full bg-base-300'>
			<h1 className=' text-center text-3xl font-bold'>
				{WeaterData.name}
			</h1>
			<div className=' flex gap-5 justify-center'>
				<ul className=' text-2xl flex flex-col gap-2 p-2'>
					<li className='flex items-center'>
						<i className='w-12 fa-solid fa-temperature-low'></i>
						{WeaterData.main.temp}
					</li>
					<li className='flex items-center'>
						<i className='w-12 fa-solid fa-temperature-high'></i>
						{WeaterData.main.feels_like}
					</li>
					<li className='flex items-center'>
						<i className='w-12 fa-solid fa-droplet'></i>
						{WeaterData.main.humidity}
					</li>
				</ul>
				<div className='divider divider-horizontal'></div>
				<ul className=' text-2xl flex flex-col gap-2 p-2'>
					<li className='flex items-center'>
						<i className='w-12 fa-solid fa-eye'></i>
						{WeaterData.visibility / 100}%
					</li>
					<li className='flex items-center'>
						<i className='w-12 fa-solid fa-wind'></i>
						{WeaterData.wind.speed}
					</li>
					<li className='flex items-center'>
						<div className='w-12 '>
							<i className='fa-solid fa-wind'></i>
							<i className='fa-solid fa-arrow-up-long'></i>
						</div>

						{WeaterData.wind.gust}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Infopanel;
