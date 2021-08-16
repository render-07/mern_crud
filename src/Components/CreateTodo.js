import React from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm } from './TodoForm';

export const CreateTodo = () => {
    const history = useHistory();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        history.push('/');
    };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create todo</h3>
            </div>
            <TodoForm onSubmit={onSubmit}></TodoForm>
        </div>
    );
};
