import React from "react"

const DisplayCards = (props) => {
    return (
        <div id="displayContainer">
            {props.data.map(entry => {
                return (
                    <div className="displayCards" key={entry.id}>
                        <h6>{entry.description}</h6>
                        <h5>{entry.amount}</h5>
                        <p>{entry.date}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayCards
