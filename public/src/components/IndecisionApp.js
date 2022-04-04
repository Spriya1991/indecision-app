import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionsModal from './OptionsModal'

class IndecisionApp extends React.Component{
    state={
        options:['one', 'two' ],
        selectedOption: undefined
    };
handleclearText=()=>{
this.setState(()=>({selectedOption: undefined}));
}
handleRemoveAll=()=>{
    this.setState(()=>{
        return {
            
            options:[]
        };
    });
}
handlePick=()=>{
    const pick=Math.floor(Math.random() *this.state.options.length);
    const opt=this.state.options[pick];
    this.setState(()=>({selectedOption: opt}));
}
handleError=(option)=>{
    if(!option){
        return 'enter valid item';
    }
    else if (this.state.options.indexOf(option)>-1){
        return 'item already exist';
    }
    this.setState((prevState)=>{
        return{
            options:prevState.options.concat(option)
    };
}
);
}

remove=(optionremove)=>{
this.setState((prevState)=>({
    options:prevState.options.filter((option)=>{
        return optionremove!==option;

    }
    )
}));

}
    render(){
        const title='Indecision App';
        const subtitle='Put your hands on computer';
        return(
            <div className='container'>
                <Header title={title} subtitle={subtitle} />
                <Action handlePick={this.handlePick} 
                hasOptions={this.state.options.length>0}/>
                <Options handleRemoveAll={this.handleRemoveAll} 
                options={this.state.options} remove={this.remove}/>
                <AddOption handleError={this.handleError}/>
                <OptionsModal selectedOption={this.state.selectedOption}
                clearText={this.handleclearText}/>
            </div>
        );
    }
}

export default IndecisionApp;