import React from 'react'
import Square from "./square";

const Board = (props) => {
    let squares = props.squares
    squares = squares.map( (square, i) =>
        <Square className='square'
                key={i}
                value={ squares[i] }
                onClick={ () => props.onClick(i) }
        />
    )

    return (
        <div className='container'>
            { squares }
        </div>
    )


}


export default Board
