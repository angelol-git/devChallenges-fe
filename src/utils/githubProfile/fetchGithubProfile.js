async function fetchGitHubProfile(username) {
    //Simulate Load times
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const result = await fetch(
                    `https://api.github.com/users/${username}`
                );

                if (!result.ok) {
                    throw new Error("Fetching profile error");
                }

                const data = await result.json();
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }, 5000)
    });
}

export default fetchGitHubProfile;