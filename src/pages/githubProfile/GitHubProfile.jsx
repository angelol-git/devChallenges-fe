import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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

  const userProfile = useQuery({
    queryKey: ["username", searchUser],
    queryFn: () => fetchGitHubProfile(searchUser),
    retry: false,
  });

  const userRepos = useQuery({
    queryKey: ["repos"],
    queryFn: () => fetchGitHubRepos(searchUser),
    retry: false,
    enabled: userProfile.isSuccess,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearchUser(event.target[0].value);
  }

  if (userProfile.isError || userRepos.isError) {
    return (
      <div className="gh__container">
        <div className="gh__hero-image-wrapper">
          <img src={heroImage} className="gh__hero-image" />
        </div>
        <div className="gh__header-container">
          <Header />
          <SearchForm handleSubmit={handleSubmit} />
        </div>
        <main className="gh__main-wrapper-error">
          <div className="gh__main-container">
            <h2>Error</h2>
            {userProfile.error.message === "404" ? (
              <p>
                User
                <span style={{ fontWeight: "bold" }}> {searchUser} </span>
                does not exist
              </p>
            ) : (
              <p>Can not GitHub profile.</p>
            )}
          </div>
        </main>
      </div>
    );
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
          {userProfile.isLoading ? (
            <UserInfoSkeleton />
          ) : (
            <UserInfo
              avatar_url={userProfile.data.avatar_url}
              followers={userProfile.data.followers}
              following={userProfile.data.following}
              location={userProfile.data.location}
              title={userProfile.data.name}
              bio={userProfile.data.bio}
            />
          )}
          {userRepos.isLoading || !userProfile.isSuccess ? (
            <RepoInfoSkeleton />
          ) : (
            <RepoInfo searchUser={searchUser} results={userRepos.data} />
          )}
        </div>
      </main>
    </div>
  );
}

export default GitHubProfile;
