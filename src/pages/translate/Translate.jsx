import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../../components/Header";
import TextAreaSource from "../../components/translate/TextAreaSource";
import TextAreaTranslated from "../../components/translate/TextAreaTranslated";
import fetchTranslation from "../../utils/translate/fetchTranslation";
import "./Translate.css";
import "../../assets/styles/reset.css";

function Translate() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [translatedLanguage, setTranslatedLanguage] = useState("French");
  const [displaySourceModal, setDisplaySourceModal] = useState(false);
  const [displayTranslatedModal, setDisplayTranslatedModal] = useState(false);
  const results = useQuery({
    queryKey: ["translation"],
    queryFn: () =>
      fetchTranslation(sourceText, sourceLanguage, translatedLanguage),
    enabled: false,
  });

  function handleCopy(event, text, modalType) {
    event.preventDefault();
    navigator.clipboard.writeText(text);

    if (modalType === "source") {
      setDisplaySourceModal(true);
      setTimeout(() => {
        setDisplaySourceModal(false);
      }, 2000);
    } else if (modalType === "translated") {
      setDisplayTranslatedModal(true);
      setTimeout(() => {
        setDisplayTranslatedModal(false);
      }, 2000);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await results.refetch();
    setTranslatedText(data.data.responseData.translatedText);
  }

  return (
    <div className="translate__container">
      <Header />
      <div className="textArea__wrapper">
        <div className="textArea__row">
          <TextAreaSource
            sourceText={sourceText}
            setSourceText={setSourceText}
            sourceLanguage={sourceLanguage}
            setSourceLanguage={setSourceLanguage}
            handleSubmit={handleSubmit}
            handleCopy={handleCopy}
            displayModal={displaySourceModal}
            results={results}
          />
          <TextAreaTranslated
            translatedText={translatedText}
            setTranslatedText={setTranslatedText}
            translatedLanguage={translatedLanguage}
            setTranslatedLanguage={setTranslatedLanguage}
            handleCopy={handleCopy}
            displayModal={displayTranslatedModal}
          />
        </div>
      </div>
    </div>
  );
}

export default Translate;
