import { CDN_URL } from "../utils/constants";

const RestroContainer = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="restorCard">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3>{name}</h3>
      {cuisines.join(", ")}
      <h4>*{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestroContainer;
