//UTILITY FUNCTIONS TO ENSURE CODECLEANINESS

export let idGen = () => {
	return Math.round(Math.random() * 10000 * Math.random());
};

export let extractTodoItemsFromLocalStorage = (localStorageItems) => {
	let arrOfItems = localStorageItems.split("::").map((item) => item.split(","));
	let formattedTodoItems = [];
	for (let prop of arrOfItems) {
		formattedTodoItems.push({ paragraph: prop[0], key: prop[1] });
	}
	return formattedTodoItems;
};

export let saveToLocalStorage = (param) => {
	try {
		let data = extractTodoItemsFromTodolistArr(param);
		localStorage.setItem("todoList", data);
		console.info("success on storing data in local storage");
	} catch (error) {
		console.info("error on storing data in local storage");
	}
};
