import axios from "axios";
import React, {
  useContext,
  createContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { BASE_URL } from "../constants/Base-urls";

const StateContext = createContext();

export const GlobalContextWrapper = ({ children }) => {
  const [menusData, setMenusData] = useState();
  const [companySettings, setCompanySettings] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/menus`);
      if (response.data.message === "success") {
        setMenusData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompanySettingsData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/company-settings`);
      if (response.data.message === "success") {
        setCompanySettings(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCompanySettingsData();
  }, []);

  return (
    <StateContext.Provider
      value={{
        menusData,
        companySettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);
