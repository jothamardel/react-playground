import { Component  } from "react";


class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            newItem: '',
            todoItems: [
                {title: 'wash', done: false},
                {title: 'cook', done: false},
            ]
        }
    }


    addItemToList = (event) => {
        //do something
        event.preventDefault();
        if(this.state.newItem.length < 1){
            alert("Please add a task!");
            return;
        }
        const newArr = [...this.state.todoItems]
        newArr.push({title: this.state.newItem, done: false});
        this.setState({ todoItems: [...newArr], newItem: ''})
    }

    taskIsDone = (params) => {
        //do something
    }



    render() {


        return (
            <div>
                <form onSubmit={this.addItemToList}>
                    <input value={this.state.newItem} onChange={
                        (event) => this.setState({ newItem: event.target.value})
                    } type="text" placeholder="Add task" />
                    <button type="submit">Add Task</button>
                </form>

                <ul>
                   { 
                        this.state.todoItems?.map((item) => (
                            <li onClick={() => this.taskIsDone('')} style={{textDecoration: `${item.done ? 'line-through': ''}`}}>{item.title}</li>
                        ))
                   }
                </ul>
            </div>
        )
    }
}


export default TodoList;
