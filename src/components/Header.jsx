import "./style.css";

let Header = ({ setIsDark, isDark }) => {
	return (
		<div className={'header'}>
			<h2>TODO LIST WEB APP</h2>
			<button
				type='button'
				onClick={() => {
					setIsDark((p) => (p = !p));
				}}
				className={isDark ? 'btnD' : 'btnL'}
			>
				{isDark ? "Light" : "Dark"}
			</button>
		</div>
	);
};

export default Header;
