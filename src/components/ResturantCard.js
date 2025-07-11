import { CDN_URL } from "../utils/constants";

const RestroCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-2 p-2 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="font-bold py-1">{name}</h3>
      {cuisines.join(", ")}
      <h4>*{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export const avalability = (RestroCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute p-2">🔰</label>
        <RestroCard {...props} />
      </>
    );
  };
};

export default RestroCard;
