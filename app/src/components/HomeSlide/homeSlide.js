// import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { School } from '@mui/icons-material'
import Mypic from "../../assets/photo_pro_rounded.png"
import React, { useState } from 'react';

export default function HomeSlide() {
	// const [data, setData] = useState(null);

	// useEffect(() => {
	// 	fetch('http://localhost:8080/api/v1/example')
	// 		.then(response => response.json())
	// 		.then(json => setData(json))
	// 		.catch(error => console.error(error));
	// }, []);

	function dl() {
		fetch("http://localhost:8080/api/v1/donwloadCv", {
			method: "GET",
			responseType: "blob", // Ajouter cette ligne
		}).then((response) => {
			// Vérifier si la réponse est réussie
			if (response.ok) {
				// Récupérer l'URL du fichier téléchargé depuis l'en-tête de la réponse
				const disposition = response.headers.get("Content-Disposition");
				const filename = "cv.pdf"

				// Démarrer le téléchargement du fichier en créant un lien de téléchargement et en déclenchant un clic programmé
				response.blob().then((blob) => {
					const url = window.URL.createObjectURL(blob);
					const link = document.createElement("a");
					link.href = url;
					link.setAttribute("download", filename);
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				});
			}
		})
			.catch((error) => {
				console.log("Erreur lors du téléchargement du fichier :", error);
			});
	};

	return (
		<div className='homeContent'>

			<div className='ImgBorder'>
				<div style={{ backgroundImage: `url(${Mypic})` }} className='myImage' />
			</div>
			<div style={{ padding: "10px" }}>
				<h2>Thomas GRANGEON</h2>
				<div className='sub'>
					<School fontSize='60' />
					<h1>Student Software Developer</h1>
				</div>
				<div>
					<button onClick={dl}>Download my CV</button>
					{/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}
				</div>
			</div>
		</div>
	)
}
