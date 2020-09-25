import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow'; 
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';


const numRows = 100;
const numCols = 100;

const newBoard = (cellStatus = () => Math.random() < 0.2) => {
    const grid =[];
    for (let i = 0; i < numRows; i++){
        grid[i] = [];
        for (let k = 0; k < numCols; k++){
            grid[i][k] = cellStatus();
        }
    }
    return grid
}
const GridBoard = ({boardStatus, onToggleCellStatus, disabled}) => {
    const handleClick = (i,k) => onToggleCellStatus(i,k);
    const rows = [];
    for (let i = 0; i < numRows; i++){
        const cols = [];
        for (let k = 0; k < numCols; k++){
            cols.push(
                <td
                    key={`${i},${k}`}
                    className={boardStatus[i][k] ? 'alive' : 'dead'}
                    onClick={() => !disabled ? handleClick(i, k) : null}
                   
                />
            );
        }
    rows.push(<tr key={i}>{cols}</tr>)
    }
    return <table><tbody>{rows}</tbody></table>;
}

class Game extends React.Component{

    state = {
        boardStatus: newBoard(),
        generation: 0,
        isGameRunning: false,
        speed: 500, 
    }
    handleClearGrid = () => {
        this.setState({
            boardStatus: newBoard(() => false),
            generation: 0
        })
    }
    handleNewBoard = () => {
        this.setState({
            boardStatus: newBoard(),
            generation: 0
        })
    }
    handleToggleCell = (i, k) => {
        const toggleBoardStatus = prevState => {
            const clonedBoardStatus = JSON.parse(JSON.stringify(prevState.boardStatus));
            clonedBoardStatus[i][k] = !clonedBoardStatus[i][k];
           
                return clonedBoardStatus; 
           
                 
        };

        this.setState(prevState => ({
            boardStatus: toggleBoardStatus(prevState),
     
        }));
    }
    handleStep = () => {
        const nextStep = prevState => {
            const boardStatus = prevState.boardStatus;
            const clonedBoardStatus = JSON.parse(JSON.stringify(boardStatus));

            const amontNeighbors = (i, k) => {
                const allneighbors =  [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
                return allneighbors.reduce((aliveNeighbors, neighbors) => {
                    const x = i + neighbors[0];
                    const y = k + neighbors[1];
                    const neighborsOnboard = (x >= 0 && x < numRows && y >= 0 && y < numCols);
                    if (aliveNeighbors <= 4 && neighborsOnboard && boardStatus[x][y]){
                        return aliveNeighbors + 1;
                    } else {
                        return aliveNeighbors;
                    }

                }, 0)
            }
            for (let i = 0; i < numRows; i++){
                for (let k = 0; k < numCols; k++){
                    const totlNeighbors = amontNeighbors(i, k);
                   if (!boardStatus[i][k]){
                        if (totlNeighbors == 3) clonedBoardStatus[i][k] = true;
                    }else {
                        if (totlNeighbors < 2 || totlNeighbors > 3) clonedBoardStatus[i][k] = false;
                    }
                }
            }
            return clonedBoardStatus;
        }

        this.setState(prevState => ({
            boardStatus: nextStep(prevState),
            generation: prevState.generation + 1
        }));
    }
    handleSpeedChange = newSpeed => {
        this.setState({speed: newSpeed});
    }
    handleRun = () => {
        this.setState({isGameRunning: true});
    }
    handleStop = () => {
  
        this.setState({isGameRunning: false, generation: 0});

    }
    handlePause = () => {
        if (this.state.isGameRunning){
            this.setState({isGameRunning: false});
        }else{
            this.handleRun();
        }
    }
    runButton = () => {
        return !this.state.isGameRunning ? 
        <button className="stop-bnt" onClick={this.handleRun}><PlayArrowIcon /></button> :
        <button className="stop-bnt" onClick={this.handlePause}><PauseIcon /></button>
    }
    componentDidUpdate(prevprops, prevState){
        const { isGameRunning, speed } = this.state;
        const speedChanged = prevState.speed !== speed;
        const gameStarted = !prevState.isGameRunning && isGameRunning;
        const gameStopped = prevState.isGameRunning && !isGameRunning;

        if ((isGameRunning) || gameStopped) {
            clearInterval(this.timerID);
        }

        if ((isGameRunning) || gameStarted) {
            this.timerID = setInterval(() => {
                this.handleStep();
            }, speed);
        }
    }
    render(){
        const { boardStatus, isGameRunning, generation } = this.state;
       return(
        <div className='game'>
            <GridBoard boardStatus={boardStatus} disabled={isGameRunning} onToggleCellStatus={this.handleToggleCell}isGameRunning={isGameRunning}/>
            <div className="generation" > {`Generaton: ${generation}`} </div>

            <div className='bnt'>
               {this.runButton()}
                <button className="stop-bnt" onClick={this.handleStop}><StopIcon/> </button>   
            </div>
            <div className='preset'>
                <button className="preset-but" type='button' disabled={isGameRunning} onClick={this.handleStep}>Step</button>
                <button className="preset-but" type='button' onClick={this.handleClearGrid}>Clear Board</button>
                <button className="preset-but" type='button' onClick={this.handleNewBoard}>New Board</button>
            </div>
            
        </div>
    )
    }

    
}
export default Game;