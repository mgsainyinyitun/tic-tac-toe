import React from 'react';

class WinnerMessage extends React.Component{

    renderMessage = ()=>{
        if(this.props.winner === null){
            return null;
        }
        return(
            <div className="winner">
                <h2>{this.props.winner}</h2>
            </div>
            );
    }

    render(){
        return this.renderMessage();
    }
}
export default WinnerMessage;