import React from 'react'
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "../styles/Home.css"
import "../styles/ProjectDisplay.css"
import HomeSlide from '../components/HomeSlide/homeSlide.js';
import SkillSlide from '../components/HomeSlide/skillSlide.js';

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
				</Swiper>
			</div>
		</div>
	)
}

export default Home