import { useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  //   console.log("cartItems", cartItems);

  return (
    <div className=" m-4 p-4">
      <div className="flex justify-center px-2 text-center">
        <div className="text-2xl font-bold mx-4 ">Cart page</div>
        <button
          className="text-white bg-black rounded-lg p-2 cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart{" "}
        </button>
      </div>

      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg m-2 rounded-lg">
        {cartItems.length === 0 && (
          <h1 className="font-bold text-center">
            Please Add items to the Cart!..
          </h1>
        )}
        {cartItems.map((item, index) => (
          <ItemList key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
