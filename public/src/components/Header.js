import React from 'react';

const Header=(props)=>(
        <div id = 'first' >
            <h1 className='head'>{props.title}</h1>
            <h2>{props.subtitle}</h2>

        </div>
    );
    
    export default Header;