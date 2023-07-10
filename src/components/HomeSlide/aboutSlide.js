import React from 'react'
import "../../styles/HomeSlide/HomeSlide.css"
import { useTranslation } from 'react-i18next';

export default function AboutSlide() {
	const { t } = useTranslation();
	return (
		<div className='aboutSlide'>
			<div style={{ padding: "10px" }}>
				<div className="slideTitle">{t("aboutslide.about")}</div>
				<p>{t("aboutslide.content")}</p>
			</div>
		</div>
	)
}
