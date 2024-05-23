import style from "./style.module.css";

let Header = ({ setIsDark, isDark }) => {
	return (
		<div className={style.header}>
			<h2>TODO LIST WEB APP</h2>
			<button
				type='button'
				onClick={() => setIsDark((p) => (p = !p))}
				className={isDark ? style.btnD : style.btnL}
			>
				{isDark ? "Light" : "Dark"}
			</button>
		</div>
	);
};

export default Header;
