import React from 'react';

function Todo(props) {



    // function deleteItem(){
    //     props.removeTodo(props.chore.id)
    // }
    // const deleteItem = () => props.removeTodo(props.chore.id)


    return (

        <div className="input-group mb-3 text-center">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Complete</button>
            <input type="text" readOnly value={props.chore.taskText} className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" onClick={() => props.removeTodo(props.chore.id)} id="button-addon2">X</button>
        </div>
    )



}
export default Todo;