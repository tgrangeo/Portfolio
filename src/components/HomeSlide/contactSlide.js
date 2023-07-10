import React, { useState } from 'react'
import { Send } from '@mui/icons-material'
import "../../styles/HomeSlide/HomeSlide.css"
import { useTranslation } from 'react-i18next';

export default function ContactSlide() {
	const [object, setObject] = useState('');
	const [message, setMessage] = useState('');
	const { t } = useTranslation();

	return (
		<div className='contact'>
			<div className="slideTitle">{t("contactslide.title")}</div>
			<div className="form-group">
				<input type="text" className="form-control" placeholder={t("contactslide.subject")} value={object}
					onChange={(event) =>
						setObject(event.target.value)
					} />
			</div>
			<div className="form-group">
				<textarea className="form-control" style={{ resize: "none" }} placeholder={t("contactslide.message")} rows="5" value={message}
					onChange={(event) =>
						setMessage(event.target.value)
					}></textarea>
			</div>
			<div className="form-group">
				<a href={`mailto:thomas.grangeon9+Portfolio@gmail.com?subject=${object} &body=${message}`}>
					<div className="SendButton"><Send style={{ marginRight: "10px" }} />{t("contactslide.send")}</div>
				</a>
			</div>
		</div>
	)
}
