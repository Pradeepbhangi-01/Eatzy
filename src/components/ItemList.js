import { MENU_ITEM_IMAGE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ItemList({ data }) {
  // const { cartValue, setCartCount } = useContext(CardContext);
  const { name, itemAttribute, imageId, description } = data?.info;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

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
            onClick={() => handleAddItem(data)}
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
