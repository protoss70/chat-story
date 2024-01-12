import './Bubble.css';
import PropTypes from 'prop-types';
import { MessageTypes, MessageSizes } from '../../types';

function Bubble({type, text, size}) {
    
  return (
    <div className={`bot-message-container message-type-${type}`}>
        <span className={`bot-message-bubble message-type-${type} message-size-${size} last-${type}`}>
            {text}
        </span>
    </div>
  );
}

Bubble.propTypes = {
    type: PropTypes.oneOf(Object.values(MessageTypes)).isRequired,
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.values(MessageSizes))
}

Bubble.defaultProps = {
    size: "md"
}

export default Bubble;