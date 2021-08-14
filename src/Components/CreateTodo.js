import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const CreateTodo = () => {
    const history = useHistory();

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
        history.push('/');
    });

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create todo</h3>
            </div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Text:</label>
                    <input className="form-control" ref={register('value')} type="text" name="text" id="text" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Create todo
                    </button>
                </div>
            </form>
        </div>
    );
};
