import React from 'react'
import NameCard from '../components/NameCard/NameCard'
import './ResultsContainer.css'


const ResultsContainer = ({suggestedNames})=>{
    const suggestedNameJSX = suggestedNames.map(suggestedName=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    })
    
    return (
        <div className="results-container">

            {suggestedNameJSX}
        </div>
    )
}

export default ResultsContainer;