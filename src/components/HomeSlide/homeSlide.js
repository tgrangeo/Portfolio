import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { School } from '@mui/icons-material'
import Mypic from "../../assets/photo_pro_rounded.png"

export default function HomeSlide() {
	return (
		<div className='homeContent'>

			<div className='ImgBorder'>
				<div style={{ backgroundImage: `url(${Mypic})` }} className='myImage' />
			</div>
			<div style={{ padding: "10px" }}>
				<h2>Thomas Grangeon</h2>
				<div className='sub'>
					<School fontSize='60' />
					<h1>Student Software Developer</h1>
				</div>
			</div>
		</div>
	)
}
