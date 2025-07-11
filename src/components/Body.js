import RestroCard, { avalability } from "./ResturantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import ShimmerUI from "./Shimmer";

const Body = () => {
  const [listOFRestro, setListOFRestro] = useState([]);
  const [searchList, setSearchList] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const filteredData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log("filteredData ", filteredData);
      setListOFRestro(filteredData);
      setFilteredList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topRatedFilter = () => {
    setFilteredList(listOFRestro.filter((restro) => restro.info.avgRating > 4));
  };

  const onlineStatus = useNetworkStatus();
  const AvailableRestrurant = avalability(RestroCard);

  if (!onlineStatus) return <h1>!!!!Looks like you are Offiline...</h1>;
  return listOFRestro.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="resto-filter flex items-center m-4">
        <input
          className="border rounded-lg p-1"
          type="text"
          value={searchList}
          onChange={(e) => {
            setSearchList(e.target.value);
          }}
        ></input>
        <button
          className="search px-4 py-1 bg-blue-300 m-4 rounded-lg cursor-pointer"
          onClick={() => {
            // On Filter search filter TODO

            const searchFilterList = listOFRestro.filter((restro) => {
              return restro.info.name
                .toLowerCase()
                .includes(searchList.toLowerCase());
            });
            setFilteredList(searchFilterList);
          }}
        >
          Search
        </button>
        <button
          className="search px-4 py-1 bg-blue-300 m-4 rounded-lg cursor-pointer"
          onClick={topRatedFilter}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((resturant) => (
          <Link
            to={"restaurant/" + resturant?.info?.id}
            key={resturant?.info?.id}
          >
            {resturant?.info?.avgRating > 4.3 ? (
              <AvailableRestrurant resData={resturant} />
            ) : (
              <RestroCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
