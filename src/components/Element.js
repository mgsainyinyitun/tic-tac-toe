import React from 'react';

class Element extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.row = props.loc.row;
        this.col = props.loc.col;
    }
    
    renderButton = ()=>{
        const arr = this.props.board[this.row][this.col];
        if(arr === null){
            return null;
        }
        return(
            arr === 1?<h1 style={{color:"red"}}>O</h1>:<h1>X</h1>
        );
       
    }
    render(){
        return(
        <button style ={{ width: "100%", height: "100%" }}
        onClick = {()=>this.props.play(this.row,this.col)}
        >{this.renderButton()}</button>  
        );
    }
}
export default Element;