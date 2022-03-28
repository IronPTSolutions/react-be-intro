import React, { Component } from 'react';
import './App.css';
import { todoList, todoDetail } from './services/TodosService';
import { getAllAlbums } from './services/AlbumsService';

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        todoList()
            .then(response => {
                this.setState({
                    todos: response
                })
            })
            getAllAlbums()
                .then(albums =>  console.log('albums', albums))

    }

    logDetail = (id) => {
        todoDetail()
            .then(todo => console.log(todo))
    }

    render() {
        return (
            <div className="App">
               {this.state.todos.map(todo => {
                   return (
                        <p onClick={() => this.logDetail(todo.id)} key={todo.id}>{todo.title}</p>
                   )
               })}
            </div>
        );
    }
}

export default App;
