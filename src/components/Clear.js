import React from 'react';

class Clear extends React.Component{
    render(){
        return(
            <button onClick = {()=>this.props.clear()} className="clear">
                Clear
            </button>
        )
    }
}
export default Clear;