import React, { useState } from 'react'

export const Addtodo = ({ addTodo }) => { // receive addTodo as a prop
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Enter something"); // change message to be more informative
        } else {
            addTodo(title, desc); // call addTodo function with title and desc as arguments
            setTitle(""); // clear title input field after submit
            setDesc(""); // clear desc input field after submit
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                    <small id="titleHelp" className="form-text text-muted">Enter a title for your todo</small> {/* update label for title input field */}
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Todo description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" placeholder="Enter description" />
                    <small id="descHelp" className="form-text text-muted">Enter a description for your todo</small> {/* add label for desc input field */}
                </div>
                <button type="submit" className="btn btn-primary">Add todo</button>
            </form>
        </div>
    )
}
