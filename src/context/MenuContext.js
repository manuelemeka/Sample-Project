import React, { createContext, useEffect, useReducer } from "react";
import {
  defaultMenuType,
  menuHiddenBreakpoint,
  subHiddenBreakpoint,
} from "../constants/menuConstant";
import { MenuReducer } from "../reducers/MenuReducer";

const INIT_STATE = {
  containerClassnames: defaultMenuType,
  subHiddenBreakpoint,
  menuHiddenBreakpoint,
  menuClickCount: 0,
  selectedMenuHasSubItems: defaultMenuType === "menu-default", // if you use menu-sub-hidden as default menu type, set value of this variable to false
};

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [menu, dispatch] = useReducer(MenuReducer, {}, () => {
    const data = localStorage.getItem("menu");
    try {
      return data !== null ? JSON.parse(data) : INIT_STATE;
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
  }, [menu]);

  return (
    <MenuContext.Provider value={{ menu, dispatch }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
