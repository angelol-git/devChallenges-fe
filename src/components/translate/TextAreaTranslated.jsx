/* eslint-disable react/prop-types */
import "./TextArea.css";
import "../../assets/styles/reset.css";

function TextAreaTranslated({
  translatedText,
  translatedLanguage,
  setTranslatedLanguage,
  handleCopy,
  displayModal,
}) {
  return (
    <div className="textArea__container">
      <div className="textArea__button-top-row">
        <button
          className={`textArea__language-button ${
            translatedLanguage === "English" ? "active" : ""
          }`}
          onClick={() => {
            setTranslatedLanguage("English");
          }}
        >
          English
        </button>
        <button
          className={`textArea__language-button ${
            translatedLanguage === "French" ? "active" : ""
          }`}
          onClick={() => {
            setTranslatedLanguage("French");
          }}
        >
          French
        </button>
      </div>

      <div className="textArea__input">{translatedText}</div>

      <div className="textArea__button-bottom-row">
        <div className="textArea__button-util-row">
          <button className="textArea__button-util">
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
