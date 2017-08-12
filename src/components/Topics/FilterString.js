import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super();
        
        this.state = {
            unFilteredArray: ["Sarah", "Sam", "Beth", "Baylee", "James", "Kent", "Keith", "Antony", "Juan"],
            userInput: "",
            filteredArray: []
        }
    }

    change(val){
        this.setState({
            userInput: val
        });
    }

    solution(passed){
        var unFilteredArray = this.state.unFilteredArray;
        var filtered = [];
        for(var i = 0; i < unFilteredArray.length; i++){
            if(unFilteredArray[i].includes(passed)){
                filtered.push(unFilteredArray[i]);
            }
        }
        this.setState({
            filteredArray: filtered
        })
    }
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e)=> this.change(e.target.value)}></input>
                <button className= "confirmationButton" onClick={(e)=> this.solution(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString;