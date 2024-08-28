/* eslint-disable react/prop-types */
import starSvg from "../../assets/githubProfile/Star.svg";
import forkSvg from "../../assets/githubProfile/Nesting.svg";
import licenseSvg from "../../assets/githubProfile/Chield_alt.svg";

import "./RepoInfo.css";

function RepoInfo({ searchUser, results }) {
  const dateNow = new Date();
  function getUpdatedDate(lastUpdatedDate) {
    const updatedDate = new Date(lastUpdatedDate);
    const differenceInTime = dateNow.getTime() - updatedDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }
  const sortedRepos = results.data.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );
  return (
    <div className="gh__repo-wrapper">
      <div className="gh__repo-container">
        {sortedRepos &&
          sortedRepos.slice(0, 4).map((repo) => {
            return (
              <a
                target="_blank"
                href={repo.html_url}
                className="gh__repo-card gh__repo-link"
                key={repo.id}
              >
                <h3 className="gh__repo-name">{repo.name}</h3>
                <p className="gh__repo-description">{repo.description}</p>
                <div className="gh__repo-card-counter-row">
                  {repo.license !== null ? (
                    <div className="gh__repo-card-counter">
                      <img src={licenseSvg} />
                      {repo.license.spdx_id}
                    </div>
                  ) : null}
                  <div className="gh__repo-card-counter">
                    <img src={forkSvg} />
                    {repo.forks}
                  </div>
                  <div className="gh__repo-card-counter ">
                    <img src={starSvg} />
                    {repo.stargazers_count}
                  </div>
                  <div className="gh__repo-card-updated">
                    last updated {getUpdatedDate(repo.updated_at)} days ago
                  </div>
                </div>
              </a>
            );
          })}
      </div>
      <div className="gh__repo-bottom-container">
        <a
          target="_blank"
          href={`https://github.com/orgs/${searchUser}/repositories`}
          className="gh__repo-all-link gh__repo-link"
        >
          View all repositories
        </a>
      </div>
    </div>
  );
}

export default RepoInfo;
