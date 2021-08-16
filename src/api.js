export const getTodos = () => fetch('http://localhost:5000').then((res) => res.json());
export const createTodo = (todo) =>
    fetch('http://localhost:5000/create', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
