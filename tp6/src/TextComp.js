import React, { Component } from 'react'

export class TextComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        theValue : "The value",
        theValue2 : "The value",
        theValue3 : "The value",
        firstName : "firstName",
        lastName : "lastName"
      }
    }
    
    handleChange = (event) => {
        this.setState({theValue : event.target.value})
    }

    handleChange3 (value) {
        this.setState({theValue3 : value})   
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.theInput);
        console.log(event.target.theInput.value);
    } 

    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>   
                    <input name="theInput" value={this.state.theValue} onChange={this.handleChange}></input><br/>
                    <input name="theInput2" value={this.state.theValue2} onChange={event => (this.setState({theValue2 :event.target.value}))}></input><br/>
                    <input name="theInput3" value={this.state.theValue3} onChange={event => (this.handleChange3(event.target.value))}></input><br/>
                    <br/><br/><br/>
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange}></input><br/>
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange}></input><br/>
                    
                    <textarea name="theTextArea" value={this.state.theValue} onChange={this.handleChange}></textarea>
                    <button type="submit">Submit</button>
                </form>
                <br/><br/><br/>
                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        )
    }
}

export default TextComp
