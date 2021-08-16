import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';

export const EditTodo = () => {
    const [todo, setTodo] = useState('');

    useEffect(() => {
        setTodo({
            text: 'foo'
        });
    }, []);

    return todo ? (
        <div className="container">
            <div className="mt-3">
                <h3>Edit Todo Item</h3>
                <TodoForm todo={todo}></TodoForm>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
};
