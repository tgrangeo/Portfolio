// import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { School } from '@mui/icons-material'
import Mypic from "../../assets/photo_pro_rounded.png"
import React, { useState, useEffect } from 'react';

export default function HomeSlide() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8080/api/v1/example')
			.then(response => response.json())
			.then(json => setData(json))
			.catch(error => console.error(error));
	}, []);

	function submit() {
		fetch('http://localhost:8080/api/v1/example')
			.then(response => response.json())
			.then(json => setData(json))
			.catch(error => console.error(error));
		console.log(data)
	}
	return (
		<div className='homeContent'>

			<div className='ImgBorder'>
				<div style={{ backgroundImage: `url(${Mypic})` }} className='myImage' />
			</div>
			<div style={{ padding: "10px" }}>
				<h2>Thomas GRANGEON</h2>
				<div className='sub'>
					<School fontSize='60' />
					<h1>Student Software Developer</h1>
				</div>
				<div>
					<button onClick={submit}>api</button>
					{/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}
				</div>
			</div>
		</div>
	)
}
