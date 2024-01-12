import './Messages.css';
import Bubble from '../Bubble/Bubble';
import Suggestions from '../suggestions/suggestions';
import PropTypes from "prop-types"
import { MessageTypes } from '../../types';

function Messages({bot, allMessages}) {

  return (
    <div id='bot-messages-container'>
        {allMessages.map((message, index) => {
          if (message.type === MessageTypes.bot || message.type === MessageTypes.user) {
            return <Bubble key={index} {...message} />;
          } else if (message.type === MessageTypes.suggestion) {
            return <Suggestions key={index} bot={bot} {...message} />;
          }
          return null;
        })}
    </div>
  );
}

Messages.propTypes = {
    allMessages: PropTypes.arrayOf(
        PropTypes.shape({
        type: PropTypes.oneOf(Object.values(MessageTypes)).isRequired,
        })
  ).isRequired,
}

Messages.defaultProps = {
    allMessages: []
}



export default Messages;