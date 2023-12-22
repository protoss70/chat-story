import './TextInput.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { MessageTypes } from '../../types';

function TextInput({addMessage}) {

    const [inpVal, setInpVal] = useState("")

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Enter') {
            const newMessage = inpVal;
            addMessage({ text: newMessage, type: MessageTypes.user });
            setInpVal('');
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [addMessage, inpVal]);

  return (
    <input value={inpVal} onChange={(e) => setInpVal(e.target.value)} type="text" name="chat-input" id="bot-chat-input" placeholder='type your question...' />
  );
}

export default TextInput;