import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
	const {id} = useParams();
	const project = ProjectList[id]
  return (
	<div className='projectDisplay'>
		<h1>{project.name}</h1>
		<img src={project.image}/>
		<p><b>Skills: </b>{project.skills}</p>
		<p><b>Resume: </b>{project.resume}</p>
		<GitHub/>
	</div>
  )
}

export default ProjectDisplay