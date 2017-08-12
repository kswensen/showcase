import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    firstInput(num1){
        this.setState({
            number1: num1
        });
    }

    secondInput(num2){
        this.setState({
            number2: num2
        });
    }

    solution(){
        var total = parseInt(this.state.number1) + parseInt(this.state.number2);
        this.setState({
            sum: total
        });
    }
    
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=> this.firstInput(e.target.value)}></input>
                <input className="inputLine" onChange={(e)=> this.secondInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={(e)=> this.solution(this.state.sum)}>Add</button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>
            </div>
        );
    }
}

export default Sum;