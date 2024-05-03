import style from "./style.module.css";

let Form = ({ setIsErr, todo, setTodo, todoList, setTodoList }) => {
	let handleChange = (e) => {
		setTodo(e.target.value);
	};

	let idGen = () => {
		return Math.round(Math.random() * 10000 * Math.random());
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		if (event.target[0].value == "") {
			setIsErr((prev) => (prev = true));
			return;
		} else {
			setIsErr((prev) => (prev = false));
			setTodoList([...todoList, { name: todo, id: idGen() }]);
			setTodo("");
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className={style.form}>
				<input
					placeholder="What are the tasks today?"
					value={todo}
					onChange={handleChange}
					type="text"
					className={style.input}
				/>

				<button
					type="submit"
					className={style.submit}>
					{window.innerWidth < 500 ? (
						<span className={style.plus}>&#43;</span>
					) : (
						`Add Task`
					)}
				</button>
			</form>
		</>
	);
};

export default Form;
