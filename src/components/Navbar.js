import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { Reorder } from '@mui/icons-material'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Navbar() {
	const { t } = useTranslation();
	var current_lang = i18next.language;
	const [expandNavbar, setExpandNavbar] = useState(false);

	const location = useLocation();

	useEffect(() => {
		setExpandNavbar(false);
	}, [location]);

	return (
		<div className="navbar" id={expandNavbar ? "open" : "close"}>
			<div className="toggleButton">
				<button
					onClick={() => {
						setExpandNavbar((prev) => !prev);
					}}
				>
					<Reorder />
				</button>
			</div>
			<div className="links">
				<Link className="li" to="/"> {t("navbar.home")} </Link>
				<Link className="li" to="/Projects"> {t("navbar.project")} </Link>
				<div className='langRow'>
					<button className={current_lang === "en" ? "actualLang" : "otherLang"} onClick={() => i18next.changeLanguage('en')}>EN</button>
					<div style={{ width: '1vh' }} />
					<button className={current_lang === "fr" ? "actualLang" : "otherLang"} onClick={() => i18next.changeLanguage('fr')}>FR</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar