import React from 'react'
import ResultsContainer from '../../ResultsContainer/ResultsContainer';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'

const name = require('@rstacruz/startup-name-generator')


//functional component
// function App(){
//     return <h1>Functional component</h1>
// }



// Class Based Component
class App extends React.Component{
    
    //state object
    state = {
        headerText: "Name It For You!",
        headerExpanded: true,
        suggestedNames: [],
    }
    
    handleInputChange = (inputText) =>{
        this.setState({
            headerExpanded: !(inputText),
            suggestedNames: inputText?name(inputText):[],
        }) //input text empty means falsy value otherwise truthy value.
        
    }


    render (){

        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headerTitle={this.state.headerText} />
                <SearchBox onInputChange = {this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
                {/* {} is used to access any variable in JSX */}

            </div>
        )
    }
}

export default App;