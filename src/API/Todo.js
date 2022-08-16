const API_URL = 'https://60fa2fa37ae59c0017166030.mockapi.io/api/v1';

async function getTodoList() {
	const respone = await fetch(`${API_URL}/todos`);
	const data = await respone.json();
	return data;
}

async function getTodoDetail(id) {
	const url = `${API_URL}/todos/${id}`;
	const respone = await fetch(url);
	const data = await respone.json();
	if (data !== 'Not found') {
		return data;
	}
	return 0;
}

async function updateStatusTodo(todo, status) {
	const url = `${API_URL}/todos/${todo.id}`;
	if (todo.status === status) {
		return;
	}
	todo.status = status;
	const response = await fetch(url, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(todo),
	});

	const data = await response.json();
	return data;
}

async function deleteTodo(id) {
	const url = `${API_URL}/todos/${id}`;
	const response = await fetch(url, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
	});

	const data = await response.json();
	return data;
}

async function addTodo(todo) {
	todo.createdDate = new Date(Date.now()).toISOString();
	const url = `${API_URL}/todos`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(todo),
	});
	const data = await response.json();
	return data;
}

async function editTodo(todo) {
	const url = `${API_URL}/todos/${todo.id}`;
	const response = await fetch(url, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(todo),
	});
	const data = await response.json();
	return data;
}

async function getUser(email, password) {
	const respone = await fetch(`${API_URL}/users`);
	const data = await respone.json();
	for (let i = 0; i < data.length; i++) {
		if (data[i].email === email && data[i].password === password) {
			return data[i];
		}
	}
	return 0;
}

async function signIn(email, password) {
	const user = await getUser(email, password);
	return user;
}

const Todos = {
	getTodoList,
	getTodoDetail,
	updateStatusTodo,
	deleteTodo,
	addTodo,
	editTodo,
	signIn,
};

export default Todos;
