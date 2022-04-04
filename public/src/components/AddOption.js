import React from 'react';

class AddOption extends React.Component{
    state={
        error: undefined
    };
    handleAddoption=(e)=>{
        e.preventDefault();

            const item1 =e.target.elements.option.value.trim();
            const error=this.props.handleError(item1);

            this.setState(()=>{
                return{
                    error: error
                };
            })
            if(!error){
                e.target.elements.option.value=' ';
            }
        }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <div className="options">
                <form onSubmit={this.handleAddoption}>
                    <input type='text' name='option'/>
                    <button id='bt2'>submit</button>
                </form>

                </div>
                

            </div>

        );

    }
    
}
export default AddOption;
