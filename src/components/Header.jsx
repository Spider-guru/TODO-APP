import "./style.css";

let Header = ({ setIsDark, isDark, setTodoList }) => {
	let handleClick = () => {
		setTodoList((p) => (p = []));
		localStorage.setItem("todoList", "");
	};
	return (
		<div className={"header"}>
			<h2>TODO LIST WEB APP</h2>
			<button
				type='button'
				onClick={() => {
					setIsDark((p) => (p = !p));
				}}
				className={isDark ? "btnD" : "btnL"}
			>
				{isDark ? "Light" : "Dark"}
			</button>
			<button
				onClick={() => handleClick()}
				className='deleteAll'
			>
				Clear All
			</button>
		</div>
	);
};

export default Header;
