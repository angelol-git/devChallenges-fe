async function fetchGitHubRepos(username) {
    //Simulate Load times
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const result = await fetch(
                    `https://api.github.com/orgs/${username}/repos`
                );

                if (!result.ok) {
                    throw new Error("Fetching repos error");
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

export default fetchGitHubRepos;