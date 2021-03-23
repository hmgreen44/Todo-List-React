import React from 'react';

function Todo(props) {
    return (

        <div className="input-group mb-3 text-center">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1">X</button>
            <input type="text" readOnly value={props.Chore} className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Completed</button>
        </div>
    )


}
export default Todo;