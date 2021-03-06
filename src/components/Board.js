import React from 'react';
import "./Board.css";
import Element from './Element';
import Clear from './Clear';
import WinnerMessage from './WinnerMessage';
import Turn from './Turn';
class Board extends React.Component{
    constructor(){
        super();
        this.board = [[null,null,null],
                      [null,null,null],
                      [null,null,null]
        ]
        this.alternate = true;
        this.state = {board:this.board,
                      winner:null,
                      turn : 'O: First Player'
        };
    }

    play = (row,col)=>{
        if(this.state.winner !== null){
            return;
        }
        if(this.board[row][col] === 1 || this.board[row][col] === 2){
            return;
        }
        if(this.alternate){
            this.alternate = false;
            this.setState({turn:'X: Second Player'})
            this.board[row][col] = 1;
        }else{
            this.alternate = true;
            this.setState({turn:'O: First Player'})
            this.board[row][col] = 2; 
        }
        this.setState({board:this.board});
        let item = 0;
        if(this.alternate === false){
            item = 1;
        }else item = 2;
        this.check(item);
        this.checkFinish();

    }

    clear = () =>{
        this.board = [[null,null,null],
                      [null,null,null],
                      [null,null,null]
        ]
        this.alternate = true;
        this.setState({board:this.board,winner:null,
        turn:'O: First Player'
        })
    }

    // Check Who is Winner 
    // "Shought Shin Sar" Algorithm By Sai Nyi
    check = (item) =>{
        let b = this.state.board;
        for(let i=0;i<3;i++){
          let tr = 0;let tc = 0;let td = 0;
          for(let j=0;j<3;j++){
              if(b[i][j] === item){
                tr = tr+b[i][j];
              }
          }

          for (let j=0;j<3;j++){
              if(b[j][i] === item ){
                  tc = tc + b[j][i];
              }
          }

          for(let j=0;j<3;j++){
              if(b[j][j] === item){
                  td = td + b[j][j];
              }
          }
          
          let te = 0;

          if(b[2][0] === item){
              te = te+b[2][0]
          }
          if(b[1][1] === item){
              te = te+b[1][1];
          }
          if(b[0][2] === item ){
              te = te + b[0][2];
          }

          
          if( tr === 3 || tr === 6 || tc === 3 || tc === 6 || td === 3 || td === 6 || te === 3 || te === 6){
              if (item === 1){
                  this.setState({winner:'Circle is Winner'});
                  break;
              }
              this.setState({winner:'Cross is Winner'});
              break;
        }
         tr = 0; tc = 0; td = 0;
         te = 0;
      }
        
    }

    checkFinish(){
        const board = this.state.board;
        let n = 0;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j] === null){
                    n = n+1;
                }
            }
        }
        if(n === 0){
            this.setState({winner:"Draw, please Try again!"});
        }
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
            <React.Fragment>
                <h1>tic-tac-toe</h1>
                <Turn turn = {this.state.turn}/>
                <div>
                <table>
                    <tbody>
                    {this.renderRow(0)}  
                    {this.renderRow(1)}
                    {this.renderRow(2)}
                    </tbody>
                </table> 
                </div>
                <Clear 
                    clear = {this.clear}
                    message = "Clear"
                />
                <WinnerMessage 
                    winner = {this.state.winner}
                    clear = {this.clear}
                />
            </React.Fragment>
        ); 
    }
}
export default Board;