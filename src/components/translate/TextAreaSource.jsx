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
}) {
  return (
    <div className="textArea__container">
      <div className="textArea__button-top-row">
        <button
          className={`textArea__language-button ${
            sourceLanguage === "Automatic" ? "active" : ""
          }`}
          onClick={() => {
            setSourceLanguage("Automatic");
          }}
        >
          Automatic
        </button>
        <button
          className={`textArea__language-button ${
            sourceLanguage === "English" ? "active" : ""
          }`}
          onClick={() => {
            setSourceLanguage("English");
          }}
        >
          English
        </button>
        <button
          className={`textArea__language-button ${
            sourceLanguage === "French" ? "active" : ""
          }`}
          onClick={() => {
            setSourceLanguage("French");
          }}
        >
          French
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textArea__input"
          rows="5"
          maxLength={500}
          onChange={(e) => {
            setSourceText(e.target.value);
          }}
        ></textarea>
        <div className="textArea__character-count-row">
          <span className="textArea__character-count">
            {sourceText.length}
            /500
          </span>
        </div>
        <div className="textArea__button-bottom-row">
          <div className="textArea__button-util-row">
            <button className="textArea__button-util">
              <img
                src="../translate/sound_max_fill.svg"
                alt="Text to Speech"
              ></img>
            </button>
            <button
              onClick={(event) => handleCopy(event, sourceText, "source")}
              className="textArea__button-util textArea__button-util-copy"
            >
              <img src="../translate/Copy.svg" alt="Copy source text"></img>
              <span
                className={`textArea__button-util-modal ${
                  displayModal ? "display" : null
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
