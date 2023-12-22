import './Bot.css';
import Messages from "../Messages/Messages.jsx"
import { MessageTypes } from '../../types.jsx';
import TextInput from '../text-form/TextInput.jsx';
import { useState, useCallback } from 'react';

function Bot() {

    const [messages, setMessages] = useState([
        {type: MessageTypes.bot, text:"The king sends you to kill the traitor. He is hiding at the end of Dark Valley"},
        {type: MessageTypes.bot, text:"1. Go as fast as possible from the shortest path"},
        {type: MessageTypes.bot, text:"2. Go sneaky using the cave passages"},
    ]);

    const addMessage = useCallback(
        (message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        },
        [setMessages]
      );

    return (
        <div className='flowstorm-bot'>
            <Messages allMessages={messages}/> 
            <div className='input-fields'>
                <TextInput addMessage={addMessage}/>
            </div>
        </div>
    );
}

export default Bot;