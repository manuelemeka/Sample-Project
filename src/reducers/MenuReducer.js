import {
  defaultMenuType,
  menuHiddenBreakpoint,
  MENU_CHANGE_DEFAULT_CLASSES,
  MENU_CHANGE_HAS_SUB_ITEM_STATUS,
  MENU_CLICK_MOBILE_MENU,
  MENU_CONTAINER_ADD_CLASSNAME,
  MENU_SET_CLASSNAMES,
  subHiddenBreakpoint,
} from "../constants/menuConstant";

const INIT_STATE = {
  containerClassnames: defaultMenuType,
  subHiddenBreakpoint,
  menuHiddenBreakpoint,
  menuClickCount: 0,
  selectedMenuHasSubItems: defaultMenuType === "menu-default",
};

export const MenuReducer = (state, action) => {
  switch (action.type) {
    case MENU_CHANGE_HAS_SUB_ITEM_STATUS:
      return { ...state, selectedMenuHasSubItems: action.payload };

    case MENU_SET_CLASSNAMES:
      return {
        ...state,
        containerClassnames: action.payload.containerClassnames,
        menuClickCount: action.payload.menuClickCount,
      };

    case MENU_CLICK_MOBILE_MENU:
      return {
        ...state,
        containerClassnames: action.payload.containerClassnames,
        menuClickCount: action.payload.menuClickCount,
      };

    case MENU_CONTAINER_ADD_CLASSNAME:
      return { ...state, containerClassnames: action.payload };

    case MENU_CHANGE_DEFAULT_CLASSES:
      return { ...state, containerClassnames: action.payload };

    default:
      return { ...state };
  }
};
