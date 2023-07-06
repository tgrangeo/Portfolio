import React, { useState, useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css";
import { ProjectList } from '../helpers/ProjectList';


import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Projects() {
	const [elements] = useState(ProjectList);
	const [elementsFiltres, setElementsFiltres] = useState([]);
	const [filter, setFilter] = useState('All');

	const option = [
		'All', 'Web', 'Mobile', 'Security'
	];

	useEffect(() => {
		filtrerElements();
		// eslint-disable-next-line
	}, [filter]);

	const filtrerElements = () => {
		const elementsFiltres = elements.filter((element) => {
			if (filter === "All")
				return element
			else
				return element.tags[0] === filter;
		});

		setElementsFiltres(elementsFiltres);
	};

	return (
		<div className='projects'>
			<div className='filterRow'>
				<p className='filterTitle' style={{ paddingRight: "2vh" }}>Category:</p>
				<Dropdown className='dropdown' options={option} onChange={(value) => { setFilter(value.value); filtrerElements() }} value={filter} />
			</div>
			<div className='projectList'>
				{elementsFiltres.length > 0 ? (
					elementsFiltres.map((project, idx) => (
						<ProjectItem key={idx} id={idx} name={project.name} image={project.image} />
					))
				) : (
					<div>Aucun élément filtré</div>
				)}
			</div>
		</div>
	);
}

export default Projects;