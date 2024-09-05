async function fetchCountries() {
    // const result = await fetch(`https://restcountries.com/v3.1/all?fields=name,flag,population,area,region,independent`);
    const result = await fetch("/worldRanks/data.json");

    if (!result.ok) {
        throw new Error("Fetching countries error");
    }
    const data = await result.json();
    return data;
}

export default fetchCountries;