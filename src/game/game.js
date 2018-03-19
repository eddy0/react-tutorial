import React from 'react'
import './game.scss'
import Board from './Board'
import { rule } from './utils'

let history = []
history.push(Array(16).fill(null))


const PlayerInfo = (props) => {
    console.log('props',props)
    const squares= props.state.squares
    const win = rule(squares)
    if (win){
        return (
            <span> { props.state.player } win!</span>
        )
    } else {
        return (
            <span> current player: { props.state.player }</span>

        )
    }
}

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            squares: history[history.length - 1],
            player: 'X',
        }
    }

    regret() {
        if (history.length > 1){
            history.pop()
            let previous = (this.state.player === 'X')? 'O' : 'X'
            this.setState({
                squares: history[history.length - 1],
                player: previous,
            })
        }

    }


    handle(i) {
        console.log('clicked', i, this.state)
        let s = this.state.squares.slice()
        if ( rule(s) || s[i] ){
            return
        }
        s[i] = this.state.player
        let next = (this.state.player === 'X')? 'O' : 'X'
        this.setState({
            squares: s,
            player: next,
            })
        history.push(s)
    }

    render() {
        return (
            <div className='main'>
                <Board squares={this.state.squares}
                       onClick={ (i) => this.handle(i) } />
                <div className='player-info'>
                    <PlayerInfo state={this.state} />
                    <div>
                        <button className='square' onClick={this.regret.bind(this) } > B </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Game






