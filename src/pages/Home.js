import React from 'react'
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


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
		modules: [Mousewheel],
	}
	return (
		<div className='home'>
			<div className='about'>
				<Swiper {...swiperConf}>
					<SwiperSlide class="swiper-slide"><HomeSlide /></SwiperSlide>
					<SwiperSlide class="swiper-slide"><SkillSlide /></SwiperSlide>
					<SwiperSlide class="swiper-slide"><ToolsSlide /></SwiperSlide>

					<SwiperSlide class="swiper-slide"><AboutSlide /></SwiperSlide>
					<SwiperSlide class="swiper-slide"><ContactSlide /></SwiperSlide>

				</Swiper>
			</div>
		</div>
	)
}

export default Home