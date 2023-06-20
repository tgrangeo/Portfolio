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
			<div className='header' onclick="location.href='google.com';">
				<GitHub fontSize='20vh' />
				<div className='title'>{project.name}</div>
			</div>
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
			<div className='displaySkills'><b>Skills: </b>{project.skills}</div>
			<div className='displayResume'><b>Resume: </b>{project.resume}</div>
		</div>
	)
}

export default ProjectDisplay