import CardContext from "../utils/cardContext";
import { MENU_ITEM_IMAGE } from "../utils/constants";
import { useContext } from "react";

function ItemList({ data }) {
  const { cartValue, setCartCount } = useContext(CardContext);
  const { name, itemAttribute, imageId, description } = data?.info;

  console.log("cartCount ", cartValue);
  return (
    <div className="flex justify-between p-2 border-gray-300 border-b-2">
      <div className="text-left w-9/12">
        <div>{itemAttribute?.vegClassifier == "VEG" ? "🟩" : "🔴"}</div>
        <div className="font-bold">{name}</div>
        <div className="font-bold">
          ₹
          {data?.info?.price
            ? data?.info.price / 100
            : data?.info.defaultPrice / 100}
        </div>
        <div className="text-xs">{description}</div>
      </div>
      <div className="w-3/12 p-4">
        <div className="absolute">
          <button
            className="bg-black text-white rounded-lg mx-17  p-1 cursor-pointer"
            onClick={() => {
              setCartCount(cartValue + 1);
            }}
          >
            Add+
          </button>
        </div>
        <img
          className="w-full rounded-lg ml-5"
          alt="no-img"
          src={MENU_ITEM_IMAGE + imageId}
        />
      </div>
    </div>
  );
}

export default ItemList;
