import React from 'react';
import Board from './Board';
import './App.css';
class App extends React.Component{
    render(){
        return(
            <div className="overall">
                <Board/>
            </div>
        );
    }
}
export default App;