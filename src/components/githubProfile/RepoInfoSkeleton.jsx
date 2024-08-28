/* eslint-disable react/prop-types */
import "./RepoInfo.css";
import "./RepoInfoSkeleton.css";
function RepoInfoSkeleton() {
  return (
    <div className="gh__repo-wrapper">
      <div className="gh__repo-container">
        <div className="gh__repo-card-skeleton skeleton"></div>
        <div className="gh__repo-card-skeleton skeleton"></div>
        <div className="gh__repo-card-skeleton skeleton"></div>
        <div className="gh__repo-card-skeleton skeleton"></div>
      </div>
      <div className="gh__repo-bottom-container">
        <div className="gh__repo-all-link-skeleton skeleton"></div>
      </div>
    </div>
  );
}

export default RepoInfoSkeleton;
