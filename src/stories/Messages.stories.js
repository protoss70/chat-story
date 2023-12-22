// Messages.stories.js

import React from 'react';
import Messages from '../components/Messages/Messages'; // Import your Messages component

export default {
  title: 'Components/Messages',
  component: Messages,
  argTypes: {
    bubblesCount: {
      control: { type: 'range', min: 1, max: 10 }, // Define a range control for the number of bubbles
    },
  },
};

function generateBubble(count){
    const res = []
    for (let index = 0; index < count; index++) {
        const type = index % 2 === 0 ? 'BOT' : 'USER';
        const text = type === 'USER' ? 'User Message' : 'Bot Message';
        const element = {text, type}
        res.push(element);
    }
    return res;
}

const Template = ({bubblesCount, args}) => {
    return <Messages allMessages={generateBubble(bubblesCount)} {...args}/>
}

export const chat = Template.bind({})

chat.args = {
    bubblesCount: 3
}