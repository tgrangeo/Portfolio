// import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { School } from '@mui/icons-material'
import Mypic from "../../assets/avatar.png"
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HomeSlide() {
	const { t } = useTranslation();
	return (
		<div className='homeContent'>
			<div className='ImgBorder'>
				<div style={{ backgroundImage: `url(${Mypic})` }} className='myImage' />
			</div>
			<div style={{ padding: "10px" }}>
				<div className="slideTitle">Thomas Grangeon</div>
				<div className='sub'>
					<School fontSize='60' />
					<div className="sub-title">{t("homeslide.sub")}</div>
				</div>
			</div>


			<div className="scroll-me">
				<div className="scroll-text">{t("homeslide.scroll")}</div>
				<div className="arrow">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

		</div>
	)
}