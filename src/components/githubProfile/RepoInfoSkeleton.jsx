/* eslint-disable react/prop-types */
import "./RepoInfo.css";
import "./RepoInfoSkeleton.css";
function RepoInfoSkeleton() {
  return (
    <div className="gh__repo-container">
      <div className="gh__repo-card-skeleton skeleton"></div>
      <div className="gh__repo-card-skeleton skeleton"></div>
      <div className="gh__repo-card-skeleton skeleton"></div>
      <div className="gh__repo-card-skeleton skeleton"></div>
    </div>
  );
}

export default RepoInfoSkeleton;
