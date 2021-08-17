import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

export const TodoForm = ({ todo, onSubmit }) => {
    const history = useHistory();

    const { register, handleSubmit } = useForm();

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
                <label htmlFor="description">Description:</label>
                <input className="form-control" {...register('description', { required: true })} type="description" name="description" id="description" />
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">
                    Save todo
                </button>
            </div>
        </form>
    );
};
