import './suggestions.css';
import PropTypes from 'prop-types';

function Suggestions({sList, bot}) {

  const removeSuggestions = () => {
    const botElement = document.getElementById(bot.ID);

    if (botElement){
      const botSuggestions = botElement.getElementsByClassName('bot-suggestion');
      for (let index = 0; index < botSuggestions.length; index++) {
        const element = botSuggestions[index];
        element.classList.add("hidden");
      }
    }
  }

  const suggestionCallback = (text) => {
    bot.handleOnTextInput(text, false);
    removeSuggestions();
  }

  const suggestion = (text, key) => (<button key={key} onClick={() => {suggestionCallback(text)}} className='suggestion-bubble'>{text}</button>)

  return (
    <div className='bot-suggestion list-view'>
      {sList.map((text, index) => suggestion(text, index))}
    </div>
  );
}

Suggestions.propTypes = {
  sList: PropTypes.array.isRequired,
};

export default Suggestions;