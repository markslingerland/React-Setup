import * as React from 'react';

interface ITodoItem {
    id: number,
    body: string
}

interface ITodoAppState {
    todos: ITodoItem[],
    counter: number
}

interface ITodoFromProps{
    submit(value: string) : void
}

export class todoApp extends React.Component<any, ITodoAppState>{
    constructor() {
        super()
        this.state = {
            counter: 0,
            todos: [

            ]
        }
    }

    public add(value: string){
        let item = {id: this.state.counter, body: value}
        let newCounter = this.state.counter + 1
        
        let newState = {...this.state, counter: newCounter}
        newState.todos.push(item)

        this.setState(newState)
    }

    public delete(id: number){
        let newTodos = this.state.todos.filter(todo => {if (todo.id !== id) return todo})
        this.setState({...this.state, todos: newTodos})
    }

    public render() {

        return (
        <div> 
            <h1>todoApp</h1>
            <TodoForm submit={this.add.bind(this)}/>
            <TodoList todos={this.state.todos} delete={this.delete.bind(this)}/>
            
            
        </div>)
    }
}

interface ITodoForm{
    input: string
}

class TodoForm extends React.Component<ITodoFromProps, ITodoForm>{

    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    onChange(event) {
        this.setState({ input: event.target.value })
    }

    onSubmit() {
        this.props.submit(this.state.input)
        this.setState({input: ""})
    }

    render() {
        return(
            <div>
                <input value={this.state.input} onChange={this.onChange.bind(this)}/>
                <button onClick={this.onSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}

interface ITodoListProps {
    todos: ITodoItem[],
    delete(id: number)
}

class TodoList extends React.Component<ITodoListProps, any> {
    constructor() {
        super()
    }

    onDelete(id: number) {
        this.props.delete(id);
    }

    render() {
        let view = this.props.todos.map(todo => <li key={todo.id} onClick={(e) => this.onDelete(todo.id)}>{todo.body}</li>)

        return(
            <ul>
                {view}
            </ul>
        )
    }


}