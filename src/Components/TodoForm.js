import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

export const TodoForm = ({ todo, onSubmit }) => {
    const history = useHistory();

    const { register, handleSubmit } = useForm({
        defaultValues: { text: todo ? todo.text : '' }
    });

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
        history.push('/');
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Text:</label>
                <input className="form-control" {...register('text', { required: true })} type="text" name="text" id="text" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save todo
                </button>
            </div>
        </form>
    );
};
