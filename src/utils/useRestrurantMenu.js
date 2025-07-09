import { useEffect, useState } from "react";
import { RESMENU_URL } from "./constants";

const useRestrurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const resData = await fetch(RESMENU_URL + resId);
      const filteredResData = await resData.json();
      console.log("filteredResData ", filteredResData);
      setResInfo(filteredResData);
    } catch (error) {
      console.error("Error fetching restaurant menu: ", error);
    }
  };

  return resInfo;
};

export default useRestrurantMenu;
