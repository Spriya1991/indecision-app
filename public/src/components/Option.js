import React from 'react';

const Option=(props)=>(
        <div className="options">
                {props.optionkey}
            <button id="bt2" onClick={(e)=>{
                props.remove(props.optionkey);} }>Remove</button>

            
        </div>

);
export default Option;