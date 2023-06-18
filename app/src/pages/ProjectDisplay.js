import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
	const { id } = useParams();
	const project = ProjectList[id]
	return (
		<div className='projectDisplay'>
			<h1>{project.name}</h1>
			<Swiper
				slidesPerView={1}
				spaceBetween={50}
				pagination={{
					type: "fraction",
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{project.image.map((img) => {
					return <SwiperSlide>
						<img src={img} alt='' />
					</SwiperSlide>
				})}

			</Swiper>
			<p><b>Skills: </b>{project.skills}</p>
			<p><b>Resume: </b>{project.resume}</p>
			<GitHub />
		</div>
	)
}

export default ProjectDisplay