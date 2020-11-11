import React from 'react';
import "./Board.css";
import Element from './Element';

class Board extends React.Component{
    constructor(){
        super();
        this.board = [[null,null,null],
                      [null,null,null],
                      [null,null,null]
        ]
        this.alternate = true;
        this.state = {board:this.board};
    }

    play = (row,col)=>{
        if(this.board[row][col] === 1 || this.board[row][col] === 0){
            return;
        }
        if(this.alternate){
            this.alternate = false;
            this.board[row][col] = 1;
        }else{
            this.alternate = true;
            this.board[row][col] = 0; 
        }
        this.setState({board:this.board});
        console.log(this.state);
    }
  
    renderRow = (row)=>{
        return(
            <tr>
                <td>
                    <Element
                        loc = {{row:row,col:0}}
                        board = {this.state.board}
                        play = {this.play}
                    />
                </td>
                <td >
                    <Element
                        loc = {{row,col:1}}
                        board = {this.state.board}
                        play = {this.play}
                    />
                </td>
                <td>
                    <Element
                        loc = {{row,col:2}}
                        board = {this.state.board}
                        play = {this.play}
                    />
                </td>
            </tr>
        );
    }
    render(){
        return(
            <div>
                <h1>tic-tac-toe</h1>
                <table>
                    <tbody>
                    {this.renderRow(0)}  
                    {this.renderRow(1)}
                    {this.renderRow(2)}
                    </tbody>
                </table> 
            </div>
        ); 
    }
}
export default Board;