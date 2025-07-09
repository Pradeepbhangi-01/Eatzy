import { useParams } from "react-router-dom";
import useRestrurantMenu from "../utils/useRestrurantMenu";

import ShimmerUI from "./Shimmer";

const RestrorauntMenu = () => {
  const { resId } = useParams();

  const resDetails = useRestrurantMenu(resId);

  if (!resDetails) return <ShimmerUI />;
  const { name, costForTwoMessage, cuisines } =
    resDetails?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  console.log("itemCards2 ", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu items will be displayed here</h3>
      <ul>
        {itemCards.map((restro) => (
          <li key={restro.card?.info?.id}>
            {restro.card?.info?.name} -{"  ₹"}
            {restro.card?.info?.price / 100 ||
              restro.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrorauntMenu;
