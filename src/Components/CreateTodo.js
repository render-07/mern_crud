import React from 'react';
import { TodoForm } from './TodoForm';
import { createTodo } from '../api';

export const CreateTodo = () => {
    const onSubmit = (data) => {
        createTodo(data);
        alert(JSON.stringify(data));
    };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create todo item</h3>
            </div>
            <TodoForm onSubmit={onSubmit}></TodoForm>
        </div>
    );
};
