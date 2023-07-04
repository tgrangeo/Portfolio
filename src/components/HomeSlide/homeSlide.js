// import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { School } from '@mui/icons-material'
import Mypic from "../../assets/photo_pro_rounded.png"
import React from 'react';

export default function HomeSlide() {
	return (
		<div className='homeContent'>

			<div className='ImgBorder'>
				<div style={{ backgroundImage: `url(${Mypic})` }} className='myImage' />
			</div>
			<div style={{ padding: "10px" }}>
				<div className="slideTitle">Thomas Grangeon</div>
				<div className='sub'>
					<School fontSize='60' />
					<h1>Student Developer</h1>
				</div>
			</div>


			<div className="scroll-me">
				<div className="scroll-text">Scroll Me</div>
				<div className="arrow">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

		</div>
	)
}
