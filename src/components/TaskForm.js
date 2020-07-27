import React, {Component} from 'react';

export default class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }

    onsubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description)
        
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.onsubmit}>
                <input type="Text" name="title" placeholder="Escribe una tarea" 
                onChange={this.onChange} value={this.state.title}/>
                <br/><br/>
                <textarea placeholder="Escribe una descripcion" name="description"
                onChange={this.onChange} value={this.state.description}/>
                <br/>
                <input type="submit"/>
               
            </form>
 
        );
    }
}
