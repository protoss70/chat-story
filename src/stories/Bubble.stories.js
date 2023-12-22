// Bubble.stories.js

import React from 'react';
import PropTypes from 'prop-types';
import Bubble from '../components/Messages/components/Bubble/Bubble'; // Path to your Bubble component
import { MessageTypes, MessageSizes } from '../types';

export default {
  title: 'Components/Bubble',
  component: Bubble,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: Object.values(MessageTypes),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(MessageSizes),
      },
    },
  },
};

const Template = (args) => <Bubble {...args} />;

Template.propTypes = {
  type: PropTypes.oneOf(Object.values(MessageTypes)).isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(MessageSizes)),
};

export const BotMessage = Template.bind({});
BotMessage.args = {
  type: MessageTypes.bot,
  text: 'Hello, I am a bot message!',
  size: MessageSizes.md,
};

export const UserMessage = Template.bind({});
UserMessage.args = {
  type: MessageTypes.user,
  text: 'Hi, I am a user message!',
  size: MessageSizes.md,
};
