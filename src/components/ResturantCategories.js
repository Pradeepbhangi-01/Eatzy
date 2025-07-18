import { useState } from "react";

import ItemList from "./ItemList";

function ResturantCategories({ data }) {
  // console.log("data.itemCards", data.itemCards);

  const [showItems, setShowItems] = useState(false);

  const handleAccordian = () => {
    // console.log("Clicked accordian", showItems);
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50  p-4 shadow-lg m-2 cursor-pointer">
        <div className="flex justify-between " onClick={handleAccordian}>
          <span className="font-bold">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems &&
          data.itemCards.map((item) => (
            <ItemList key={item?.card?.info.id} data={item?.card} />
          ))}
      </div>
    </div>
  );
}

export default ResturantCategories;
