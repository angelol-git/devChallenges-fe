/* eslint-disable react/prop-types */
import "./UserInfo.css";
import "./UserInfoSkeleton.css";
function UserInfo() {
  return (
    <div>
      <div className="gh__profile-top-row">
        <div className="gh__profile-picture skeleton"></div>
        <div className="gh__meta-info-container">
          <div className="gh__meta-info skeleton">
            <span className="grey-text gh__meta-info-header skeleton-text">
              Followers
            </span>
            <span className="gh__pipe skeleton-text"></span>
            <span className="light-grey-text skeleton-text">0</span>
          </div>
          <div className="gh__meta-info skeleton">
            <span className="grey-text gh__meta-info-header skeleton-text">
              Following
            </span>
            <span className="gh__pipe skeleton-text"></span>
            <span className="light-grey-text skeleton-text">0</span>
          </div>
          <div className="gh__meta-info skeleton">
            <span className="grey-text gh__meta-info-header skeleton-text">
              Location
            </span>
            <span className="gh__pipe skeleton-text"></span>
            <span className="light-grey-text skeleton-text">Test Location</span>
          </div>
        </div>
      </div>

      <div className="gh__profile-title-skeleton skeleton"></div>
    </div>
  );
}

export default UserInfo;
