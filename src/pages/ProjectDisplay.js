import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import "../styles/ProjectDisplay.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectDisplay() {
	const { id } = useParams();
	const project = ProjectList[id]
	return (
		<div className='projectDisplay'>
			<h1>{project.name}</h1>
			<Carousel showArrows={true} width={"50%"}>
				<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css" />
				{project.image.map((img) => {
					return <div>
						{/* TODO imageList decale de 1  + pas centre + fleches et indicator pas visible et pas tres beau*/}
						<img src={img} alt='' />
					</div>
				})}

			</Carousel>
			<p><b>Skills: </b>{project.skills}</p>
			<p><b>Resume: </b>{project.resume}</p>
			<GitHub />
		</div>
	)
}

export default ProjectDisplay