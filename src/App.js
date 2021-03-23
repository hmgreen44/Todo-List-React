import React from "react";
import './App.css';
import Todo from "./Components/Todo"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newChore: '', taskList: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);

  }
  componentDidMount() {
    let taskList = window.localStorage.getItem('taskList')
    if (taskList) {
      this.setState({ taskList: JSON.parse(taskList) })
    }
    else {
      window.localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
      
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
    console.log(JSON.stringify(this.state.taskList))
   
  }

  handleChange(event) {
    this.setState({ newChore: event.target.value })
  }
  handleSubmit(event) {
    if (this.state.newChore !== '') {
      this.setState({
        taskList: [...this.state.taskList, this.state.newChore],
        newChore: ''
      })
    }
    event.preventDefault();
  }
  removeTodo(event){
    
  
 }
  completeTodo(event){
    const filterTodos = this.state.taskList.filter(task )

  }

  
  //addItem() {
  //create a new todo with a unique id
  //const Chores = [...this.state.taskList];
  //Chores.map
  //copy of current list of items

  //add new item to the list
  //}
  render() {

    return (
      <div className="App container">
        <div className="card-body text-center">
          <blockquote className="blockquote mb-0 mt-5" />
          <p>My Todo List</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3 mt-3">
            <input type="text" value={this.state.newChore} onChange={this.handleChange} className="form-control" placeholder="What do you need to do?" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" value="Submit" id="button-addon2">Submit</button>
          </div>
        </form>
        {this.state.taskList.map((item, index) => <Todo key={index} Chore={item} />)}

      </div>
    );
  }
}

export default App;
