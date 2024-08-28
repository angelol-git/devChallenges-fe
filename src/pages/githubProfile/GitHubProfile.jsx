import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import Header from "../../components/Header";
import SearchForm from "../../components/githubProfile/SearchForm";
import UserInfo from "../../components/githubProfile/UserInfo";
import UserInfoSkeleton from "../../components/githubProfile/UserInfoSkeleton";
import RepoInfo from "../../components/githubProfile/RepoInfo";
import RepoInfoSkeleton from "../../components/githubProfile/RepoInfoSkeleton";
import fetchGitHubProfile from "../../utils/githubProfile/fetchGithubProfile";
import fetchGitHubRepos from "../../utils/githubProfile/fetchGithubRepos";

import heroImage from "../../assets/githubProfile/hero-image-github-profile.png";
import "./GitHubProfile.css";
function GitHubProfile() {
  document.body.style = "background: #20293A;";
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
    setSearchUser(event.target.value);
    results.refetch();
  }

  return (
    <div className="gh__container">
      <div className="gh__hero-image-wrapper">
        <img src={heroImage} className="gh__hero-image" />
      </div>
      <div className="gh__header-container">
        <Header />
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      <main className="gh__main-wrapper">
        <div className="gh__main-container">
          {results[0].isLoading ? (
            <UserInfoSkeleton />
          ) : (
            <UserInfo
              avatar_url={results[0].data.avatar_url}
              followers={results[0].data.followers}
              following={results[0].data.following}
              location={results[0].data.location}
              title={results[0].data.name}
              bio={results[0].data.bio}
            />
          )}
          {results[1].isLoading ? (
            <RepoInfoSkeleton />
          ) : (
            <RepoInfo searchUser={searchUser} results={results[1]} />
          )}
        </div>
      </main>
    </div>
  );
}

export default GitHubProfile;
