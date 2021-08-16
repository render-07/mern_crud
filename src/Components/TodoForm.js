import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

export const TodoForm = ({ todo }) => {
    const history = useHistory();

    const { register, handleSubmit } = useForm({
        defaultValues: { text: todo ? todo.text : '' }
    });

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
        history.push('/');
    });

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Text:</label>
                <input className="form-control" {...register('text', { required: true })} type="text" name="text" id="text" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Create todo
                </button>
            </div>
        </form>
    );
};
