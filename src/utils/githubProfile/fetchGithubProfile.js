async function fetchGitHubProfile(username) {
    //Simulate Load times
    console.log("Fetching profile");
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const result = await fetch(
                    `https://api.github.com/users/${username}`
                );

                if (result.status === 404) {
                    throw new Error(`${result.status}`);
                }
                else if (!result.ok) {
                    throw new Error(`Error retrieving GitHub User Info`);
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

export default fetchGitHubProfile;