import React from 'react'


export default function TodoForm({values, handleChange, handleSubmit, formMessage}) {
    //console.log(completed);
    return (
        <form onSubmit={handleSubmit}>
            <div className="align-center"> Add or Edit </div>
            <div className="alert alert-warning"> {formMessage}</div>
            <div className="form-group">
                <input type="text" value= {values.title} onChange={event => (handleChange(event))} className="form-control" name="title" placeholder="Enter title" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" checked={values.completed} onChange={event => (handleChange(event))} className="form-check-input" name="completed" id="completed" />
                <label className="form-check-label" htmlFor="completed">Done ?</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
