import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import Header from "../../components/Header";
import SearchForm from "../../components/githubProfile/SearchForm";
import UserInfo from "../../components/githubProfile/UserInfo";
import RepoInfo from "../../components/githubProfile/RepoInfo";
import fetchGitHubProfile from "../../utils/githubProfile/fetchGithubProfile";
import fetchGitHubRepos from "../../utils/githubProfile/fetchGithubRepos";

import heroImage from "../../assets/githubProfile/hero-image-github-profile.png";
import "./GitHubProfile.css";
function GitHubProfile() {
  const [searchUser, setSearchUser] = useState("github");
  const results = useQueries({
    queries: [
      {
        queryKey: ["username", 1],
        queryFn: () => fetchGitHubProfile(searchUser),
      },
      { queryKey: ["repos", 2], queryFn: () => fetchGitHubRepos(searchUser) },
    ],
  });

  function handleSubmit(event) {
    event.preventDefault();
    results.refetch();
  }
  if (results[0].isLoading && results[1].isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gh__container">
      <div className="gh__hero-image-wrapper">
        <img src={heroImage} className="gh__hero-image" />
      </div>
      <div className="gh__header-container">
        <Header />
        <SearchForm />
      </div>
      <main className="gh__main-wrapper">
        <div className="gh__main-container">
          <UserInfo
            avatar_url={results[0].data.avatar_url}
            followers={results[0].data.followers}
            following={results[0].data.following}
            location={results[0].data.location}
            title={results[0].data.name}
          />

          <RepoInfo results={results[1]} />
        </div>
      </main>
    </div>
  );
}

export default GitHubProfile;
