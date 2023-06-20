// import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { School, Download } from '@mui/icons-material'
import Mypic from "../../assets/photo_pro_rounded.png"
import React from 'react';

export default function HomeSlide() {

	function dl() {
		fetch("http://localhost:8080/api/v1/donwloadCv", {
			method: "GET",
			responseType: "blob",
		}).then((response) => {
			if (response.ok) {
				// const disposition = response.headers.get("Content-Disposition");
				const filename = "cv.pdf"
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
					<button onClick={dl} className="SendButton"><Download style={{ marginRight: "10px" }} /> Download my CV</button>
				</div>
			</div>
		</div>
	)
}
