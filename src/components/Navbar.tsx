/** @format */

import React,{ FC, useState } from 'react';
import { IThemeSelectItem, WeaterData } from '../common/Types';
import axios from 'axios';
import Themes from '../common/Themes';

interface NavbarProps {
	setWeaterData: (data: WeaterData) => void;
}



const Navbar: FC<NavbarProps> = ({ setWeaterData }) => {
	const HTML = document.querySelector('html');
	const [location, setLocation] = useState('Donetsk,UA');

	function click(theme: string): () => void {
		return () => {
			if (HTML) {
				HTML.dataset.theme = theme;
			}
		};
	}

	function WeatherInquiry(): void {
		if (location.length > 3) {
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
		<div className='navbar bg-base-300'>
			<label className=' flex-1 input-group input-group-sm'>
				<input
					type='text'
					className=' input input-sm bg-base-200 input-bordered input-info'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<button
					className=' btn btn-sm btn-info'
					onClick={() => WeatherInquiry()}>
					<i className='fa-solid fa-magnifying-glass'></i>
				</button>
			</label>
			<div className=' dropdown dropdown-end'>
				<label
					tabIndex={0}
					className='btn btn-sm normal-case flex gap-1'>
					Themes <i className='fa-solid fa-angle-down'></i>
				</label>
				<div className=' dropdown-content menu bg-base-300 min-w-[6rem] p-2 p rounded-box overflow-x-hidden overflow-y-auto max-h-52 shadow-lg'>
					<ul>
						{Themes.map((item: IThemeSelectItem) => {
							return (
								<li>
									<button
										className='btn btn-sm btn-ghost justify-start normal-case '
										onClick={click(item.theme)}>
										<div className='flex gap-1'>
											{item.theme}
											<p>{item.themeIcon}</p>
										</div>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
