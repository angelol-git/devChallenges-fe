/* eslint-disable react/prop-types */
import "./TextArea.css";
import "../../assets/styles/reset.css";

function TextAreaSource({
  sourceText,
  setSourceText,
  sourceLanguage,
  setSourceLanguage,
  handleSubmit,
  handleCopy,
  displayModal,
  results,
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
      setSourceLanguage({
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
          value={sourceLanguage.name}
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
      <form onSubmit={handleSubmit}>
        <textarea
          className="textArea__input"
          rows="5"
          maxLength={500}
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
        ></textarea>
        <div className="textArea__character-count-row">
          <span className="textArea__character-count">
            {sourceText.length}/500
          </span>
        </div>
        <div className="textArea__button-bottom-row">
          <div className="textArea__button-util-row">
            <button
              onClick={(event) => handleTextToSpeech(event, "source")}
              className={`textArea__button-util ${
                isSpeaking ? "button-active" : null
              }`}
            >
              <img src="../translate/sound_max_fill.svg" alt="Text to Speech" />
            </button>
            <button
              onClick={(event) => handleCopy(event, sourceText, "source")}
              className="textArea__button-util textArea__button-util-copy"
            >
              <img src="../translate/Copy.svg" alt="Copy source text" />
              <span
                className={`textArea__button-util-modal ${
                  displayModal ? "display" : ""
                }`}
              >
                Source copied
              </span>
            </button>
          </div>

          <button type="submit" className="textArea__button-translate">
            {results.isLoading ? <span className="loader"></span> : "Translate"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TextAreaSource;
