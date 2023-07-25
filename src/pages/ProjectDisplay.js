import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { GitHub, Close } from '@mui/icons-material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import i18next from 'i18next';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
	const { id } = useParams();
	const project = ProjectList[id];
	const [imgState, setimgState] = useState();
	const [isVisible, setIsVisible] = useState(false);
	const [currentLang, setCurrentLang] = useState(i18next.language);

	useEffect(() => {
		setCurrentLang(i18next.language);
		const languageChangeHandler = () => {
			setCurrentLang(i18next.language);
		};
		i18next.on('languageChanged', languageChangeHandler);

		return () => {
			i18next.off('languageChanged', languageChangeHandler);
		};
	}, []);

	function zoomHandler(img) {
		setimgState(img);
		setIsVisible(true);
	}
	function closeZoom() {
		setIsVisible(false);
	}

	const resumeToDisplay = currentLang === 'fr' ? project.resume : project.resume_en;

	return (
		<div className='projectDisplay'>
			<div className={isVisible ? 'zoomImageVisible' : 'zoomImageHidden'}>
				<button className="closeButton" onClick={closeZoom}>
					<Close className='closeZoom' />
				</button>
				<img className="zoomedImg" src={imgState} alt='' />
			</div>
			<a className='header' href={project.url} target="_blank" rel="noreferrer">
				<GitHub />
				<div className='title'>{project.name}</div>
			</a>
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
				{project.image.map((img) => (
					<SwiperSlide key={img}>
						<img onClick={() => zoomHandler(img)} src={img} alt='' />
					</SwiperSlide>
				))}
			</Swiper>
			<div className='contentProject'>
				<div className='displaySkills'>
					<div className='subtitle'><b>Skills: </b></div>
					<ul>
						{project.skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</div>
				<div style={{ width: "2vw" }}></div>
				<div className='displayResume'>
					<div className='subtitle'><b>Resume: </b></div>
					{resumeToDisplay}
				</div>
			</div>
		</div>
	);
}

export default ProjectDisplay;