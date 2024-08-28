async function fetchGitHubRepos(username) {
    //Simulate Load times
    console.log("Fetching repos");
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const result = await fetch(
                    `https://api.github.com/users/${username}/repos`
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
        }, 500)
    });
}

export default fetchGitHubRepos;