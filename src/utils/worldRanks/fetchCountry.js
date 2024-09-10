async function fetchCountry(name) {
    //https://restcountries.com/v3.1/name/aruba?fullText=true
    // const result = await fetch(`https://restcountries.com/v3.1/name/aruba`);
    const result = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

    // const result = await fetch("/worldRanks/data2.json");
    if (!result.ok) {
        throw new Error("Fetching countries error");
    }
    const data = await result.json();
    return data;
}

export default fetchCountry;