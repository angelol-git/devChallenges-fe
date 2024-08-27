/* eslint-disable react/prop-types */
import starSvg from "../../assets/githubProfile/Star.svg";
import forkSvg from "../../assets/githubProfile/Nesting.svg";
import licenseSvg from "../../assets/githubProfile/Chield_alt.svg";

import "./RepoInfo.css";

function RepoInfo({ results }) {
  const dateNow = new Date();
  function getUpdatedDate(lastUpdatedDate) {
    const updatedDate = new Date(lastUpdatedDate);
    const differenceInTime = dateNow.getTime() - updatedDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }

  return (
    <div className="gh__repo-container">
      {results.data &&
        results.data.map((repo, index) => {
          if (index > 3) {
            return;
          }
          return (
            <div className="gh__repo-card" key={repo.id}>
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
            </div>
          );
        })}
    </div>
  );
}

export default RepoInfo;
