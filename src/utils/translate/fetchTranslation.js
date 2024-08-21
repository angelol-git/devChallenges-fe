async function fetchTranslation(sourceText, sourceLanguage, translatedLanguage) {
    // if (sourceLanguage === "Automatic") {
    //     console.log("here");

    //Simulate Load times
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const result = await fetch(
                    `https://api.mymemory.translated.net/get?q=${sourceText}&langpair=${sourceLanguage.code}|${translatedLanguage.code}`
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
        }, 500)
    });
}

export default fetchTranslation;