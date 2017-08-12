import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        
        this.state = {
            unFilteredArray: [{
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
            },
            {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
            },
            {
                name: 'Carly Armstrong',
                title: 'CEO',
            }],
            userInput: "",
            filteredArray: []
        }
    }

    change(val){
        this.setState({
            userInput: val
        })
    }

    solution(passed){
        var unFilteredArray = this.state.unFilteredArray;
        var filtered = [];
        for(var i = 0; i < unFilteredArray.length; i++){
            if(unFilteredArray[i].hasOwnProperty(passed)){
                filtered.push(unFilteredArray[i]);
            }
        }
        this.setState({
            filteredArray: filtered
        });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e)=> this.change(e.target.value)}></input>
                <button className="confirmationButton" onClick={(e)=> this.solution(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterObject;