import React from 'react';
import "./Board.css";
import Element from './Element';
import Clear from './Clear';
import WinnerMessage from './WinnerMessage';
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
        };
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
            this.board[row][col] = 2; 
        }
        this.setState({board:this.board});
        let item = 0;
        if(this.alternate === false){
            item = 1;
        }else item = 2;
        this.check(item);
    }
    clear = () =>{
        this.board = [[null,null,null],
                      [null,null,null],
                      [null,null,null]
        ]
        this.alternate = true;
        this.setState({board:this.board,winner:null})
    }

    // Check Who is Winner 
    // Shut Shin Sar Algorithm By Sai Nyi
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
         //te = 0;
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
                <div>
                <table>
                    <tbody>
                    {this.renderRow(0)}  
                    {this.renderRow(1)}
                    {this.renderRow(2)}
                    </tbody>
                </table> 
                </div>
                <Clear clear = {this.clear}/>
                <WinnerMessage winner = {this.state.winner}/>
            </React.Fragment>
        ); 
    }
}
export default Board;