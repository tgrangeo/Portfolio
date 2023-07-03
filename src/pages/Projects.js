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

























// import React, { useState } from 'react'
// import ProjectItem from '../components/ProjectItem'
// import "../styles/Projects.css"
// import { ProjectList } from '../helpers/ProjectList'

// function Projects() {

// 	const [elements, setElements] = useState(
// 		ProjectList
// 	);

// 	const [elementsFiltres, setElementsFiltres] = useState([]);

// 	const [filter, setFilter] = useState();

// 	const [open, setOpen] = React.useState(false);

// 	const handleOpen = () => {
// 		setOpen(!open);
// 	};

// 	// Fonction de filtrage
// 	const filtrerElements = () => {
// 		// Appliquer ici la logique de filtrage souhaitée
// 		const elementsFiltres = elements.filter((element) => {
// 			// Retourne true ou false en fonction du critère de filtrage
// 			// Par exemple, si tu veux filtrer les éléments dont la somme est supérieure à 4 :
// 			return eval(element.tags[0]) == filter;
// 		});

// 		setElementsFiltres(elementsFiltres);
// 	};



// 	return (
// 		<div className='projects'>
// 			<h1>My Personnal Projects</h1>
// 			<button onClick={handleOpen}>Dropdown</button>
// 			{open ? (
// 				<ul className="menu">
// 					<li className="menu-item">
// 						<button onClick={() => { setFilter("all"); filtrerElements }}>all</button>
// 					</li>
// 					<li className="menu-item">
// 						<button onClick={() => { setFilter("web"); filtrerElements }}>web</button>
// 					</li>
// 					<li className="menu-item">
// 						<button onClick={() => { setFilter("mobile"); filtrerElements }}>mobile</button>
// 					</li>
// 					<li className="menu-item">
// 						<button onClick={() => { setFilter("security"); filtrerElements }}>security</button>
// 					</li>
// 				</ul>
// 			) : null}
// 			<div className='projectList'>
// 				{elementsFiltres.length > 0 ? (
// 					elementsFiltres.map((project, idx) => {
// 						return <ProjectItem id={idx} name={project.name} image={project.image} />
// 					})
// 				) : (
// 					<div>Aucun élément filtré</div>
// 				)}


// 				{/* {ProjectList.map((project, idx) => {
// 					return <ProjectItem id={idx} name={project.name} image={project.image} />
// 				})} */}
// 			</div>
// 		</div>
// 	)
// }

// export default Projects