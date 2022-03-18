/** @format */

import React,{ FC, useEffect, useState } from 'react';
import { WeaterData } from '../common/Types';
import axios from 'axios';
import ThemeMenu from './items/ThemeMenu';

interface NavbarProps {
	setWeaterData: (data: WeaterData) => void;
}



const Navbar: FC<NavbarProps> = ({ setWeaterData }) => {
	const [location, setLocation] = useState('Donetsk,UA');

	function WeatherInquiry(): void {
		if (location.length > 2) {
			axios
				.get(
					`http://api.openweathermap.org/data/2.5/weather?appid=8c93761f0cfd02f56a37c775dc01adf7&units=metric&q=${location}`
				)
				.then((e): any => {
					return e.data;
				})
				.then((e) => {
					let data: WeaterData = {
						weather: e.weather[0],
						main: e.main,
						wind: e.wind,
						name: e.name,
						visibility: e.visibility,
					};
					setWeaterData(data);
				});
		}
	}

	return (
		<div className='navbar bg-primary'>
			<label className=' flex-1 input-group input-group-sm'>
				<input
					type='text'
					className=' input input-sm input-bordered input-accent font-medium'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<button
					className=' btn btn-sm btn-accent'
					onClick={() => WeatherInquiry()}>
					<i className='fa-solid fa-magnifying-glass'></i>
				</button>
			</label>
			<ThemeMenu />
		</div>
	);
};

export default Navbar;
