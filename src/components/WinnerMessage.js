import React from 'react';
import Clear from './Clear';

class WinnerMessage extends React.Component{

    renderMessage = ()=>{
        if(this.props.winner === null){
            return null;
        }
        return(
            <div className="winner">
                <h2>{this.props.winner}</h2>
                <Clear
                 clear = {this.props.clear} 
                 message = "Try Again!"
                 />
            </div>
            );
    }

    render(){
        return this.renderMessage();
    }
}
export default WinnerMessage;