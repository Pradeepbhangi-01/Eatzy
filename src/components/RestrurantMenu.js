import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestrurantMenu from "../utils/useRestrurantMenu";
import ResturantCategories from "./ResturantCategories";
import ShimmerUI from "./Shimmer";

const RestrorauntMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resDetails = useRestrurantMenu(resId);

  if (!resDetails) return <ShimmerUI />;
  const { name, costForTwoMessage, cuisines } =
    resDetails?.data?.cards[2]?.card?.card?.info;
  // console.log("itemCards2 ", resDetails?.data);
  const { itemCards } =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const resCategories =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("allMenus ", resCategories);

  return (
    <div className="text-center">
      <h1 className="font-bold">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {resCategories.map((restro, index) => (
        <ResturantCategories
          key={index}
          data={restro?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowItems={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestrorauntMenu;
