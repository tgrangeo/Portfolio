import React from 'react'
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

import "swiper/css";
import "../styles/Home.css"
import "../styles/ProjectDisplay.css"
import HomeSlide from '../components/HomeSlide/homeSlide.js';
import SkillSlide from '../components/HomeSlide/skillSlide.js';
import ContactSlide from '../components/HomeSlide/contactSlide';
import AboutSlide from '../components/HomeSlide/aboutSlide';
import ToolsSlide from '../components/HomeSlide/toolSlide';

function Home() {
	const swiperConf = {
		direction: 'vertical',
		slidesPerView: 1,
		mousewheel: true,
		parallax: true,
		speed: 600,
		pagination: {
			el: '.custom-pagination',
			clickable: true,
			renderPagination: function (index, className) {
				return '<div className="' + className + '"></div>';
			}
		},
		modules: [Mousewheel, Pagination],
	}
	return (
		<div className='home'>
			<div className="custom-pagination"></div>
			<div className='about'>
				<Swiper {...swiperConf}>
					<SwiperSlide className="swiper-slide"><HomeSlide /></SwiperSlide>
					<SwiperSlide className="swiper-slide"><SkillSlide /></SwiperSlide>
					<SwiperSlide className="swiper-slide"><ToolsSlide /></SwiperSlide>
					<SwiperSlide className="swiper-slide"><AboutSlide /></SwiperSlide>
					<SwiperSlide className="swiper-slide"><ContactSlide /></SwiperSlide>

				</Swiper>
			</div>
		</div>
	)
}

export default Home