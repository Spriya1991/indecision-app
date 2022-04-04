import React from 'react';

class Action extends React.Component{
    render(){
        return(
            <div>
                <button id='big_button' disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do</button>

            </div>
        );
    }
}
export default Action;