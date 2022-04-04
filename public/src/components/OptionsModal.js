import React from 'react';
import Modal from 'react-modal';
 const OptionsModal=(props)=>{
     return(
        <div className='Reactmodal'>
            <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.clearText}
            >
            <h3>Selected Text</h3>
            {props.selectedOption&& <p>{props.selectedOption}</p>}
            <button onClick={props.clearText}>Okay</button>
            </Modal>

        </div>



     );
 }
 export default OptionsModal;