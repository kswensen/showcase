import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    change(val){
        this.setState({
            userInput: val
        })
    }

    solution(userInput){
        var splitInput = userInput.split(',');
        var evens = [];
        var odds = [];
        for(var i = 0; i < splitInput.length; i++){
            if(splitInput[i] % 2 === 0){
                evens.push(splitInput[i]);
            } else {
                odds.push(splitInput[i]);
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }
    
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e)=> this.change(e.target.value)}></input>
                <button className="confirmationButton" onClick={(e)=> this.solution(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span> 
            </div>
        );
    }
}

export default EvenAndOdd;