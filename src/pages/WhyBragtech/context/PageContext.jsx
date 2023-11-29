import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../../constants/Base-urls";

const PageContext = createContext();

const PageContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/why-braghtech`);
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
    <PageContext.Provider value={{ data, loading }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;

export const usePageContext = () => useContext(PageContext);
