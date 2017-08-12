import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    entered(val){
        this.setState({
            userInput: val
        });
    }

    solution(passed){
        var isPalindrome;
        if(passed === passed.split('').reverse().join('')){
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
        this.setState({
            palindrome: isPalindrome
        })
    }
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=> this.entered(e.target.value)}></input>
                <button className="confirmationButton" onClick={(e)=> this.solution(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        );
    }
}

export default Palindrome;