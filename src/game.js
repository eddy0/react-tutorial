import React from 'react'
import Board from './board'
import './game.scss'

class Game extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
                <Board />
        )
    }
}

export default Game