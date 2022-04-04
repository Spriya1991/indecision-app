import React from 'react';
import Option from './Option';


const Options=(props)=>
    (
    <div>
        <div id='widget'>
             <h3 id='widget widget--link'>Your Options</h3>
            <button id="bt2" onClick={props.handleRemoveAll}>Remove All</button>
            
        </div>
        {props.options.length===0 && <p className="errorline">Please add options</p>}

            {props.options.map((option)=><Option key={option} remove={props.remove} optionkey={option}/>)}
    </div>

    
    )
export default Options;