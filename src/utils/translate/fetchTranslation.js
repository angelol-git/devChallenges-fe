async function fetchTranslation(sourceText, sourceLanguage, translatedLanguage) {
    // if (sourceLanguage === "Automatic") {
    //     console.log("here");

    return new Promise((resolve, reject) => {
        //Simulate Load times
        setTimeout(async () => {
            try {
                const result = await fetch(
                    `https://api.mymemory.translated.net/get?q=${sourceText}&langpair=${formatLanguage(sourceLanguage)}|${formatLanguage(translatedLanguage)}`
                );

                if (!result.ok) {
                    throw new Error("Fetching products error");
                }

                const data = await result.json();
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }, 1000)
    });
}

function formatLanguage(language) {
    let formattedLanguage;
    switch (language) {
        case "English":
            formattedLanguage = "en";
            break;
        case "French":
            formattedLanguage = "fr";
            break;
    }
    return formattedLanguage;
}
export default fetchTranslation;