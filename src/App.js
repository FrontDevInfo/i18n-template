import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function App() {
	const { t } = useTranslation();

	const onLangChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<div className="App">
			<select onChange={onLangChange}>
				<option value="ru">Русский</option>
				<option value="en">Aнглийский</option>
			</select>

			<h1>{t("home_title")}</h1>
			<p>{t("home_description")}</p>
		</div>
	);
}

export default App;
