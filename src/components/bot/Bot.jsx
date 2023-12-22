import './Bot.css';
import Messages from "../Messages/Messages.jsx"
import { MessageTypes } from '../../types.jsx';
import TextInput from '../text-form/TextInput.jsx';
import { useState, useCallback } from 'react';
import createBot, { initBot, getStartAction } from '../../app/main.js';

function connect(key, callbacks={}){
    const defaultCallback = {
        setStatus: () => {},
        onError: () => {},
        onEnd: () => {},
        focusOnNode: () => {},
        addVideo: () => {},
        handleCommand: () => {},
        addMessage: () => {},
        addLogs: () => {},
        play: () => {},
        getVoice: () => undefined,
        getStatusString: (s) => s,
        getAttributes: () => {return {}}
    }

    const service = createBot({...defaultCallback, ...callbacks});
    
    initBot(service, key);

    return service
}

function Bot() {
    const [messages, setMessages] = useState([]);

    const setMessage = useCallback(
        (message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        },
        [setMessages]
    );

    const service = connect("6585b4c022c7fc4d204e794c", {addMessage: (type, text, image, background, nodeId) => {
        console.log(text);
        if (text && type){
            setMessage({type: type === "sent" ? MessageTypes.user : MessageTypes.bot, text})
        }
    }});

    function startBot(){
        service.handleOnTextInput(getStartAction(), false);
    }

    return (
        <div className='flowstorm-bot'>
            <Messages allMessages={messages}/> 
            <div className='input-fields'>
                <TextInput addMessage={setMessage}/>
                <button onClick={startBot}>START</button>
            </div>
        </div>
    );
}

export default Bot;