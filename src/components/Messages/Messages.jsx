import './Messages.css';
import Bubble from './components/Bubble/Bubble';
import PropTypes from "prop-types"

function Messages({allMessages}) {
  return (
    <div id='bot-messages-container'>
        {allMessages.map((message, index) => (
        <Bubble key={index} {...message} />
      ))}
    </div>
  );
}

Messages.propTypes = {
    allMessages: PropTypes.arrayOf(
        PropTypes.shape({
        type: PropTypes.oneOf(['BOT', 'USER']).isRequired,
        text: PropTypes.string.isRequired,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        })
  ).isRequired,
}

Messages.defaultProps = {
    allMessages: []
}



export default Messages;