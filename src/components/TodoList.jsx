import style from "./style.module.css";
import TodoItem from "./todoItem";
let TodoList = ({ todoList, setTodoList }) => {
	
	return (
		<div className={style.TL}>
			{todoList.map((todoItem) => (
				<TodoItem
					key={todoItem.id}
					setTodoList={setTodoList}
					todoList={todoList}
					todoItem={todoItem}
				/>
			))}
		</div>
	);
};

export default TodoList;
