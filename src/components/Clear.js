import React from 'react';

class Clear extends React.Component{
    render(){
        return(
            <button 
            onClick = {()=>this.props.clear()} className="clear"
            >
                {this.props.message}
            </button>
        )
    }
}
export default Clear;