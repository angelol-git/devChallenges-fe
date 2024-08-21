/* eslint-disable react/prop-types */
import "./TextArea.css";
import "../../assets/styles/reset.css";

function TextAreaTranslated({
  translatedText,
  translatedLanguage,
  setTranslatedLanguage,
  handleCopy,
  displayModal,
  isSpeaking,
  handleTextToSpeech,
  languages,
}) {
  function handleChange(event) {
    const selectedName = event.target.value;
    const selectedLanguage = languages.languages.find((language) => {
      return language.name === selectedName;
    });

    if (selectedLanguage) {
      setTranslatedLanguage({
        name: selectedName,
        code: selectedLanguage.code,
      });
    }
  }
  return (
    <div className="textArea__container">
      <div className="textArea__button-top-row">
        <select
          className={`textArea__language-button active`}
          value={translatedLanguage.name}
          onChange={handleChange}
        >
          {languages.languages.map((language) => {
            return (
              <option key={language.id} value={language.name}>
                {language.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="textArea__input">{translatedText}</div>

      <div className="textArea__button-bottom-row">
        <div className="textArea__button-util-row">
          <button
            onClick={(event) => handleTextToSpeech(event, "translate")}
            className={`textArea__button-util ${
              isSpeaking ? "button-active" : null
            }`}
          >
            <img
              src="../translate/sound_max_fill.svg"
              alt="Text to Speech"
            ></img>
          </button>
          <button
            onClick={(event) => handleCopy(event, translatedText, "translated")}
            className="textArea__button-util"
          >
            <span
              className={`textArea__button-util-modal long ${
                displayModal ? "display" : null
              }`}
            >
              Translation copied
            </span>
            <img src="../translate/Copy.svg" alt="Copy source text"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextAreaTranslated;
