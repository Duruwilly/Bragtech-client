import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../../constants/Base-urls";

const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage`);
        if (response.data.message === "success") {
          setLoading(false);
          setData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <HomeContext.Provider value={{ data, loading }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;

export const useHomeContext = () => useContext(HomeContext);
