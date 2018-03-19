import React from 'react'
import Square from "./square"



class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            squares: Array(9).fill(null),
            xisNext: true,
            winner: false,
        }
    }

    clickButton(i) {
        let square = this.state.squares.slice()
        square[i] = this.state.xisNext ? 'X' : 'O'
        this.setState({
            squares: square,
            xisNext: !this.state.xisNext,
        })
        this.winner(square)
    }

    winner(square) {
        const rules = [
            [0,1,2,],
            [3,4,5,],
            [6,7,8,],
            [0,3,6,],
            [1,4,7,],
            [2,5,8,],
            [0,4,8,],
        ]
        rules.forEach( r => {
            const [x, y, z] = r
            // console.log('r', x, y, z, square)
            if (square[x] !== null && square[x] === this.state.squares[y] && square[x] === square[z] ) {
                console.log('winner', square, this.state)
                this.setState( {winner: true})
            }
        })
    }


    render() {
        let lists = this.state.squares.map( (list, i) => <Square key={i} value={list} onClick={this.clickButton.bind(this, i)} /> )
        let status
        let win = this.state.winneR
        console.log('wind',win)
        if (win) {
            status =  'win'
        }


    return (
        <div className='container'>
            <div className="wrapper" >
                { lists }
            </div>
            <div className="player-info">
                player: { this.state.xisNext ? 'X' : 'O' }
                <span> { status }</span>
            </div>
        </div>
        )
    }
}

export default Board