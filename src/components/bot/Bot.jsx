import './Bot.css';
import Messages from "../Messages/Messages.jsx"
import { MessageTypes } from '../../types.jsx';
import TextInput from '../text-form/TextInput.jsx';
import { useState, useCallback } from 'react';
import createBot, { initBot, getStartAction } from '../../app/main.js';
import generateUniqueID from '../../utility/idGenerator.js';

function connect(key, callbacks={}){
    const defaultCallback = {
        setStatus: (state) => {console.log(state)},
        onError: () => {},
        onEnd: (error) => {console.error(error.message)},
        focusOnNode: () => {},
        addVideo: (url, callback) => {},
        handleCommand: () => {},
        addMessage: () => {},
        addLogs: (logs) => {logs.forEach(log => {console.log(log.text)})},
        play: (sound) => {},
        getVoice: () => undefined,
        getStatusString: (s) => s,
        getAttributes: () => {return {}}
    }

    const bot = createBot({...defaultCallback, ...callbacks});
    
    initBot(bot, key);

    return bot
}

function Bot() {
    const [messages, setMessages] = useState([]);

    const commands = [{command: "#suggestions", func: (payload) => {
        const suggestionText = [];
            payload.nodes.forEach((node) => {
            suggestionText.push(node.text);
        });
        setMessage({type: MessageTypes.suggestion, sList: suggestionText})
    }}]

    const setMessage = useCallback((message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        },
        [setMessages]
    );

    const bot = connect("6585b4c022c7fc4d204e794c", {addMessage: (type, text, image, background, nodeId) => {
        if (text && type){
            setMessage({type: type === "sent" ? MessageTypes.user : MessageTypes.bot, text})
        }
    }, handleCommand: async (command, code, t) => {
        const payload = JSON.parse(code);
        commands.forEach(commandObject => {
            if (commandObject.command === command){
                commandObject.func(payload)
            }
        });
    }});

    function startBot(){
        bot.handleOnTextInput(getStartAction(), false);
    }

    bot.ID = generateUniqueID()
    bot.commands = commands

    return (
        <div className='flowstorm-bot' id={bot.ID}>
            <Messages allMessages={messages} bot={bot}/> 
            <div className='input-fields'>
                <TextInput addMessage={setMessage}/>
                <button onClick={startBot}>START</button>
            </div>
        </div>
    );
}

export default Bot;