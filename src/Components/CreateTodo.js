import React from 'react';
import { TodoForm } from './TodoForm';
import { createTodo } from '../api';

export const CreateTodo = () => {
    const onSubmit = async (data) => {
        await createTodo(data);
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
